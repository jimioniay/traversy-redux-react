import axios from 'axios';
import config from '../data/config.json';

const AUTH_TOKEN = '';

const baseURL =
  process.env === 'production'
    ? config.JSON_PLACEHOLDER_BASE_ENDPOINT
    : config.JSON_PLACEHOLDER_BASE_ENDPOINT;

const instance = axios.create({
  baseURL,
});

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default instance;
