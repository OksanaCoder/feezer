import { combineReducers } from 'redux';

// api
import playlistReducer from './playlist';


const reducers = combineReducers({
    playlistReducer,
  })

export default reducers;
