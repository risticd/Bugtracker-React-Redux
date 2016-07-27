/* 
 * Index
 */

import React from 'react';
import ReactDOM from 'react-dom';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Provider } from 'react-redux'
import { Router, browserHistory, IndexRoute } from 'react-router'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import './main.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import './lib/globals'
import routes from './routes'
import configureStore from './store/configureStore'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Main
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
const store = configureStore()

ReactDOM.render((
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}>
        </Router>
    </Provider>
), document.getElementById('app'));
