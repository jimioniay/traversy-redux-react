import { FETCH_POSTS, ADD_POST } from '../actionTypes';
import _orderBy from 'lodash/orderBy';

const initialState = {
  posts: [],
  post: {},
};

const sortPostDescending = posts => {
  return _orderBy(posts, ['id', 'title'], ['desc', 'asc']);
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: sortPostDescending([...state.posts, ...action.payload]),
      };
    case ADD_POST:
    
      const resp = {
        ...state,
        posts: sortPostDescending([...state.posts, action.payload]),
        post: action.payload,
      };
    
      return resp;
    default:
      return state;
  }
};

export default postReducer;
