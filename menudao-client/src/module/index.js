import { combineReducers } from 'redux';
import modalReducer from './modal';

const rootReducer = combineReducers({
  modalReducer,
});

export default rootReducer;