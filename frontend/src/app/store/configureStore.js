import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import rootReducer from './../reducers/index'

export default function configureStore() {
    return applyMiddleware(thunkMiddleware)(createStore)(rootReducer)
}
