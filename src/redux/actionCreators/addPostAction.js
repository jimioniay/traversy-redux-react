import { ADD_POST } from '../actionTypes';
import api from '../../api/api';

export const addPost = data => dispatch => {
  console.log('inside add post action ...', dispatch, data);
  return api.JsPosts.apiPostNewPost(data).then(resp =>
    dispatch({
      type: ADD_POST,
      payload: resp.status === 201 ? data : { ...data },
    }),
  );
};
