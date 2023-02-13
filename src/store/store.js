import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import AppReducer from '../reducers/AppReducer'
import spotifyApiReducer from "../reducers/spotifyApiReducer";

const reducers = {
  AppReducer,
  spotifyApiReducer,
}

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

export default createStore(combineReducers(reducers), {}, applyMiddleware(...middleware))
