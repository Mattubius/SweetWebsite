import { createStore, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import customerRed from './reducers/customerRed'
import { logger } from 'redux-logger'
import { reducer as form } from 'redux-form'

var reducers = combineReducers({ customerRed, form })

var store = createStore(reducers, {}, applyMiddleware(logger, promise()));

export default store;