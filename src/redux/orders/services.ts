import {
  getOrdersFailure,
  getOrdersRequest,
  getOrdersSuccess,
  makeOrderFailure,
  makeOrderRequest,
  makeOrderSuccess,
} from "./actions";

export const getOrders = (): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(getOrdersRequest({}));

    const url = "/api/v1/orders";
    try {
      const result = await axios.get(url);
      dispatch(getOrdersSuccess({ orders: result.data }));
    } catch (error) {
      dispatch(getOrdersFailure({ error: error.message }));
    }
  };
};

export const makeOrder = (
  customer: string,
  quantity: number,
  product_id: number
): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(makeOrderRequest({}));

    const url = "/api/v1/orders";
    try {
      const result = await axios.post(url, {
        customer,
        products: [{ quantity, product_id }],
      });
      dispatch(makeOrderSuccess({}));
      dispatch(getOrdersRequest({}));
    } catch (error) {
      dispatch(makeOrderFailure({ error: error.message }));
    }
  };
};
