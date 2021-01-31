import axios from "axios";
// import store from "./store";
import localStorageService from "./localStorage";

// const { dispatch } = store;

axios.interceptors.request.use(
  (config) => {
    config.baseURL = "https://lumiere-bcknd.herokuapp.com";

    const headers: object = localStorageService.getHeaders();
    config.headers = { ...headers, ...config.headers };

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    localStorageService.updateSession("headers", {
      "Content-Type": "application/json;charset=utf-8",
      "token-type": "Bearer",
      "access-token": response.headers.access_token,
    });

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
