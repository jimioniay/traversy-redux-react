import { ADD_POST } from '../actionTypes';
import api from '../../api/api';

export const addPost = data => dispatch => {
  api.JsPosts.apiPostNewPost(data).then(resp => {
    return dispatch({
      type: ADD_POST,
      payload: { ...resp },
    });
  });
};
