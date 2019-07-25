import axiosInstance from './axiosInstance';

export default {
  JsPosts: {
    apiFetchJsPosts: async () => {
      try {
        const resp = await axiosInstance.get('/posts');
        return resp.data;
      } catch (error) {
        console.log(error);
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
      });
      return resp;
    },
  },
};
