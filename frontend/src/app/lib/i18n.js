/*
===============================================================================
The i18n File contains all the translation of static text across the app

How to use it?
---------------
Add an import statement with reference to this file

- import I18n from 'filepath/i18n'

Now instead of putting text directly add the text entry in this file and
reference it in your component like below. Make sure there inside the curly
braces.

Example:
// containers/landing/SignIn.js

import I18 from '../../lib/i18n';

<Button buttonText={ I18n.t('landing.signin.primaryButton') } />

===============================================================================
*/


var I18n = {};

I18n.locale = 'en-US';

I18n.translate = function(path) {
    var text = _.get(I18n.translations[I18n.locale], path);

    if (!text) {
        __error('i18n', 'translation could not be found.', { path })

        return 'i18n.' + path;
    } else {
        return text;
    }
};

// Set aliases, so we can save some typing.
I18n.t = I18n.translate;


I18n.translations = {
    'en-US': {
        generated: {
            notImplemented: 'Not Implemented.'
        }
    }
}

module.exports = I18n;
