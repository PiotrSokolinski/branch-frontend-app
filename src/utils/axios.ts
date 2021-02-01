import axios from "axios";
// import store from "./store";
import localStorageService from "./localStorage";

// const { dispatch } = store;

axios.interceptors.request.use(
  (config) => {
    config.baseURL = "https://iap-branch-backend.herokuapp.com";

    const headers: any = localStorageService.getHeaders();
    console.log({ headers });
    config.headers = {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${headers.access_token}`,
      // ...headers,
      // ...config.headers,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    console.log({ response });
    // localStorageService.updateSession("headers", {
    //   "Content-Type": "application/json;charset=utf-8",
    //   "token-type": "Bearer",
    //   access_token: response.headers.access_token,
    // });

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
