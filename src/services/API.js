import axios from 'axios';
import { BACKEND_URL, TOKEN } from '@env'

class API {
  constructor() {
    this.baseUrl = "https://nodejs-heroku-login.herokuapp.com/api/auth";
    this.axios = axios.create();
    this.axios.interceptors.response.use((resp) => resp.data, (error) => Promise.reject(error));
  }

  get(endpoint, params) {
    const config = {
      params,
    };
    return this.axios.get(`${this.baseUrl}/${endpoint}`, config);
  }

  post(endpoint, data) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return this.axios.post(`${this.baseUrl}/${endpoint}`, data, config);
  }

  put(endpoint, data) {
    return this.axios.put(`${this.baseUrl}/${endpoint}`, data);
  }

  delete(endpoint) {
    return this.axios.delete(`${this.baseUrl}/${endpoint}`);
  }
}

export default API;
