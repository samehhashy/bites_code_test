import axios from 'axios';

export const globalAxios = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
});

export default globalAxios;
