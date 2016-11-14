import { combineReducers } from 'redux';
import Complaints from './reducer-complaints';
import ActiveComplaint from './reducer-active-complaint';

const rootReducer = combineReducers({
  complaints: Complaints,
  activeComplaint: ActiveComplaint
});

export default rootReducer;
