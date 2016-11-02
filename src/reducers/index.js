import { combineReducers } from 'redux';
import { complaints } from './complaints';

const rootReducer = combineReducers({
  complaints: complaints
});

export default rootReducer;
