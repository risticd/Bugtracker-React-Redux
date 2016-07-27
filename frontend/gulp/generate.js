'use strict';

module.exports = function(gulp, config) {

    gulp.task('generate', function(done) {
        console.log(' └── generate');

        var inquirer = require('inquirer');

        inquirer.prompt([
            { type: 'list', choices: config.generator.choices, name: 'type', message: 'What would you like to generate?' },
            { type: 'input', name: 'filename', message: 'Enter the filename of what you\'d like to generate (without extension)' },
            { type: 'input', name: 'filepath', message: 'Enter the folder path to where you want the generator to place the files' },
            { type: 'confirm', name: 'confirmed', message: onInquirerConfirm }
        ]).then(function(answers) {
            onInquirerDone(answers, done);
        }); 
    });

    function onInquirerConfirm(answers) {
        var metadata = generateMetaData(answers.filepath, answers.filename, answers.app);
        var fileList = config.generator.files[answers.type];

        console.log('\tName: ' + metadata.class_name);
        console.log('\tKebab Name: ' + metadata.kebab_name);

        fileList.forEach(function(item) {
            console.log(getFilepath(item, metadata));
        });

        return 'Is this correct?';
    }

    function onInquirerDone(answers, callback) {
        if (answers.confirmed) {
            var metadata = generateMetaData(answers.filepath, answers.filename, answers.app);
            generateFiles(config.generator.files[answers.type], metadata, callback);
        }
    }

    function generateMetaData(filepath, filename, app) {
        var _    = require('lodash');
        var path = require('path');

        return {
            project_name    : config.project.name,
            app             : app,

            file_ext        : path.extname(filename).toLowerCase(),
            file_path       : filepath,
            file_name       : _.upperFirst(_.camelCase(filename)),

            class_name      : _.upperFirst(_.camelCase(filename)),
            var_name        : _.lowerFirst(_.camelCase(filename)),
            kebab_name      : _.kebabCase(filename),
            snake_name      : _.snakeCase(filename)
        };
    }

    function getFilepath(options, metadata) {
        var _    = require('lodash');
        var path = require('path');

        var basepath = _.template(options.basepath || '')(metadata);
        var folder   = _.template(options.folder || '')(metadata);
        var filename = metadata.file_name + '.' + options.ext;
        var filepath = path.join(basepath, metadata.file_path, folder, filename);

        return filepath;
    }

    function generateFiles(templateFiles, metadata, callback) {
        var async  = require('async');
        var mkdirp = require('mkdirp');

        var index = 0, current;
        async.whilst(
            function() { return index < templateFiles.length; },
            function(next) {
                current = templateFiles[index++];
                writeFile(current, metadata, next);
            },
            function() {
                callback();
            }
        );
    }

    function writeFile(options, metadata, callback) {
        var _      = require('lodash');
        var path   = require('path');
        var fs     = require('fs');
        var mkdirp = require('mkdirp');

        fs.readFile(options.template, function(err, data) {
            if (err) throw err;

            var filepath = getFilepath(options, metadata);

            // Add mixins
            metadata.path        = path;
            metadata.full_path   = filepath;
            metadata.base_path   = config.generator.base_path;

            var filedata = _.template(data)(metadata);

            // Write the directory path
            mkdirp(path.dirname(filepath), function (err) {
                if (err) throw err;

                // Write the template file
                fs.writeFile(filepath, filedata, function(err) {
                    if (err) throw err;

                    callback(); // Finished!
                });
            });
        });
    }
};
