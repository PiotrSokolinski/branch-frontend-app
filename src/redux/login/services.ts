import { loginFailure, loginSuccess, loginRequest } from "./actions";

import localStorageService from "../../utils/localStorage";

export const login = (email: string, password: string): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(loginRequest({}));

    const url = "/api/token";
    let formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    try {
      const result = await axios.post(url, formData);
      console.log({ result });
      dispatch(loginSuccess({}));
      localStorageService.saveSession({ headers: result.data });
      history.push("/products");
    } catch (error) {
      dispatch(loginFailure({ error: error.message }));
    }
  };
};
