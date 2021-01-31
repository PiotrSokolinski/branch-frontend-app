import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "./actions";

export const getProducts = (email: string, password: string): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(getProductsRequest({}));

    const url = "/api/token";
    try {
      const result = await axios.get(url);
      dispatch(getProductsSuccess({ products: result }));
    } catch (error) {
      dispatch(getProductsFailure({ error: error.message }));
    }
  };
};
