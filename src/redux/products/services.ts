import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "./actions";

export const getProducts = (): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(getProductsRequest({}));

    const url = "/api/v1/products";
    try {
      const result = await axios.get(url);

      dispatch(getProductsSuccess({ products: result.data }));
    } catch (error) {
      dispatch(getProductsFailure({ error: error.message }));
    }
  };
};
