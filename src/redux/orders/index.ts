export {
  getOrdersSuccess,
  getOrdersRequest,
  getOrdersFailure,
} from "./actions";

export {
  selectLoading,
  selectOrders,
  selectError,
  selectOrderLoading,
  selectOrderError,
} from "./selectors";

export { getOrders, makeOrder } from "./services";

export { ordersReducer } from "./reducer";
