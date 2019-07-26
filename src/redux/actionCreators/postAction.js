import { FETCH_POSTS } from '../actionTypes';
import api from '../../api/api';

export const fetchPosts = () => dispatch => {
  return api.JsPosts.apiFetchJsPosts()
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      }),
    )
    .catch(err =>
      dispatch({
        type: FETCH_POSTS,
        payload: err,
      }),
    );
};
