import { FETCH_POSTS, ADD_POST } from '../actionTypes';

const initialState = {
  posts: [],
  post: {},
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case ADD_POST:
      const resp = {
        ...state,
        posts: [...state.posts, action.payload],
        post: action.payload,
      };
      console.log('resp: ', resp);
      return resp;
    default:
      return state;
  }
};

export default postReducer;
