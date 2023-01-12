import axios, { AxiosInstance } from 'axios';
import { baseURL } from '../constant';

interface ErrorResponse {
  [key: string]: { status: number },
}

export const axiosRequestConfig = {
  method: 'get', // default
  timeout: 1000 * 10, // default is `0` (no timeout)
  headers: {
    'Request-ID': 'allow|me'
  },

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `maxContentLength` defines the max size of the http
  // response content in bytes allowed in node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Node only option) defines the max size of the http
  // request content in bytes allowed
  maxBodyLength: 2000,

  // If set to 0, no redirects will be followed.
  maxRedirects: 0, // default

};

// Add a request interceptor
axios.interceptors.request.use(
  // Do something before request is sent
  (config) => config,
  // Do something with request error
  (error) => Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  (response) => response,
  (error: ErrorResponse) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.status === 471) {
      // Handle Token error
      // const lastApiReq = error?.request
    }
    return Promise.reject(error);
  },
);

class APIService {
  userService!: AxiosInstance;
  trackSessionService!: AxiosInstance;

  constructor() {
    this.initService();
  }

  initService() {
    const userServiceUrl = baseURL
    this.userService = axios.create({ ...axiosRequestConfig, baseURL: userServiceUrl });

    const trackSessionServiceUrl = baseURL
    this.trackSessionService = axios.create({ ...axiosRequestConfig, baseURL: trackSessionServiceUrl });
  }

  changeEnv() {
    this.initService();
  }
}

export const API = new APIService();
