import axios from "axios";
import { store } from "../store/redux";

const url = "http://ticketing.test"

// axios.defaults.baseURL = url;
axios.create({
  baseURL:url,
  timeout:10000
})
axios.defaults.timeout = 10000;
axios.defaults.timeoutErrorMessage = 'Request timeout!'; 

axios.interceptors.request.use(
    config => {
      const authToken = store.getState().token;
      if (authToken) {
       // config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    err => Promise.reject(err),
  );