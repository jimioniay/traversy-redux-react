import axiosInstance from './axiosInstance';

export default {
  JsPosts: {
    apiFetchJsPosts: async () => {
      try {
        const resp = await axiosInstance
          .get('/posts')
          .then(resp => resp)
          .catch(err => console.log(err));
        return resp.data;
      } catch (error) {
        return error;
      }
    },
    apiPostNewPost: async data => {
      const resp = await axiosInstance({
        method: 'POST',
        url: '/posts',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(resp => resp)
        .catch(err => err);
      return resp;
    },
  },
};
