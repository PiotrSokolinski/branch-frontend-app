import { registerRequest, registerSuccess, registerFailure } from "./actions";

export const register = (email: string, password: string): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(registerRequest({}));

    const url = "/api/signup";
    let formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    try {
      await axios.post(url, formData);
      dispatch(registerSuccess({}));
      history.push("/");
    } catch (error) {
      dispatch(registerFailure({ error: error.message }));
    }
  };
};
