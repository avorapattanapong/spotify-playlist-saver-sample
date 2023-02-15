import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import playlistReducer from '../reducers/playlistReducer';
import spotifyApiReducer from '../reducers/spotifyApiReducer';

const reducers = {
  playlistReducer,
  spotifyApiReducer,
};

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

export default createStore(combineReducers(reducers), {}, applyMiddleware(...middleware));
