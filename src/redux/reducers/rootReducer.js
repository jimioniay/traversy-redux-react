import { combineReducers } from 'redux';
import postReducer from './postReducer';
import addPostReducer from './addPostReducer';

export default combineReducers({
  postsRoot: postReducer,
  addPostRoot: addPostReducer,
});
