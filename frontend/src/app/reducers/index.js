/* 
 * Redux Reducers
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Reducer Definitions
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

/**
* RootReducer: This reducer combines many subreducers to create the root
* application state
*/
function rootReducer(state = {
}, action) {

    return state;
}

export default rootReducer
