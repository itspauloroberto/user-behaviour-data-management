import axios from 'axios';
import REACT_APP_API from '../config';

const getInstance = () => {
  const { url, port } = REACT_APP_API;
  return axios.create({ baseURL: `${url}:${port}/` });
};
const API = getInstance();

export { API };
