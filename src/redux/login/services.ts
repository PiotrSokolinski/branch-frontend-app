import { loginFailure, loginSuccess, loginRequest } from "./actions";

export const login = (email: string, password: string): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(loginRequest({}));

    const url = "/api/token";
    let formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    try {
      await axios.post(url, formData);
      dispatch(loginSuccess({}));
      history.push("/products");
    } catch (error) {
      dispatch(loginFailure({ error: error.message }));
    }
  };
};
