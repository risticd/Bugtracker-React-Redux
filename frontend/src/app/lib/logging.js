/*
=================
Logging Functions
=================
*/

import config from '../__config'

function log(type, category, message, data) {
    var msg = {
        message    : message,
        category   : category,
        type       : type,
        timestamp  : new Date(),
        data       : data
    };

    if (config.logging.SEND_TO_SERVER) {
        // todo: send the messages back to the server
        // console.log(JSON.stringify(msg));
    }

    /*eslint-disable */
    switch (type) {
        case 'info':
            return console.log(moment().format('hh:mm:ss:SSSS') + ' %c info ', 'background:#eee;color:black;font-weight:bold;', category, message, data);
        case 'warning':
            return console.log(moment().format('hh:mm:ss:SSSS') + ' %c warning ', 'background:#eee;color:orange;font-weight:bold;', category, message, data);
        case 'error':
            return console.log(moment().format('hh:mm:ss:SSSS') + ' %c error ', 'background:#eee;color:red;font-weight:bold;', category, message, data);
        case 'request':
            return console.log(moment().format('hh:mm:ss:SSSS') + ' %c req ', 'background:#eee;color:green;font-weight:bold;', category, message, data);
        case 'response':
            return console.log(moment().format('hh:mm:ss:SSSS') + ' %c res ', 'background:#eee;color:black;font-weight:bold;', category, message, data);
    }
    /*eslint-enable */
}

function info(category, message, data) {
    if (config.logging.INCLUDE_INFO_MESSAGES) {
        log('info', category, message, data);
    }
}
function warning(category, message, data) {
    if (config.logging.INCLUDE_WARNING_MESSAGES) {
        log('warning', category, message, data);
    }
}
function error(category, message, data) {
    if (config.logging.INCLUDE_ERROR_MESSAGES) {
        log('error', category, message, data);
    }
}
function request(category, message, data) {
    if (config.logging.INCLUDE_REQUEST_MESSAGES) {
        log('request', category, message, data);
    }
}
function response(category, message, data) {
    if (config.logging.INCLUDE_RESPONSE_MESSAGES) {
        log('response', category, message, data);
    }
}

window.__info     = info;
window.__warning  = warning;
window.__error    = error;
window.__api_req  = request;
window.__api_res  = response;
