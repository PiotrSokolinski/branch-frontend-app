import {
  getOrdersFailure,
  getOrdersRequest,
  getOrdersSuccess,
} from "./actions";

export const getOrders = (): any => {
  return async (dispatch: any, _: any, { axios, history }: any) => {
    dispatch(getOrdersRequest({}));

    const url = "/api/token";
    try {
      const result = await axios.get(url);
      dispatch(getOrdersSuccess({ orders: result }));
    } catch (error) {
      dispatch(getOrdersFailure({ error: error.message }));
    }
  };
};
