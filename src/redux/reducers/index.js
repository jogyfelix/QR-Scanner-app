import {combineReducers} from 'redux';
import setDataReducer from './setDataReducer';

export default combineReducers({
  data: setDataReducer,
});
