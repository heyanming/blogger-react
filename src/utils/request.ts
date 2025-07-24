import axios from "axios";

const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

// 3. Request interceptor
request.interceptors.request.use(
  (config) => {
    // Do something before sending the request
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 3. Response interceptor
request.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export { request };
