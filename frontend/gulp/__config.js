'use strict';

module.exports = {

    project: {
        name: 'BugTrackerProject'
    },

    generator: {
        base_path: 'src/app/',
        choices: [
            { name: 'Component', value: 'component' },
            { name: 'Page', value: 'page' },
        ],
        files: {
            component: [
                { ext: 'js',   template: 'gulp/templates/component/component_js.jst',   basepath: 'src/app/components/', folder: '<%= snake_name %>/' },
                { ext: 'less', template: 'gulp/templates/component/component_less.jst', basepath: 'src/app/components/', folder: '<%= snake_name %>/' },
            ],
            page: [
                { ext: 'js',   template: 'gulp/templates/component/component_js.jst',   basepath: 'src/app/pages/', folder: '<%= snake_name %>/' },
                { ext: 'less', template: 'gulp/templates/component/component_less.jst', basepath: 'src/app/pages/', folder: '<%= snake_name %>/' },
            ],
        }
    },

};
