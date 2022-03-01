import axios from 'axios';

const commonSuccess = response => {
  return response;
};

const commonError = error => {
  return Promise.reject(error);
};

export const getDataApi = async url => {
  axios.interceptors.response.use(commonSuccess, commonError);
  return await axios.get(url);
};
