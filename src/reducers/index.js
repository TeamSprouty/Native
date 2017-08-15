import { combineReducers } from 'redux';
import authed from '../reducers/authed';
import user from '../reducers/user';

const rootReducer = combineReducers({
  authed,
  user
});

export default rootReducer;
