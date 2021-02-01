import produce from "immer";
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_FAILURE,
  GET_ORDERS_SUCCESS,
  MAKE_ORDER_FAILURE,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_REQUEST,
} from "./constants";
import { Order } from "../../types/Order";

type OrdersType = {
  loading: boolean;
  error: string | null;
  orders: Order[];
  orderLoading: boolean;
  orderError: string | null;
};

const initialState: OrdersType = {
  loading: false,
  error: null,
  orders: [],
  orderLoading: false,
  orderError: null,
};

const ordersReducer = (state: OrdersType = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ORDERS_REQUEST:
        draft.error = null;
        draft.loading = true;
        break;
      case GET_ORDERS_SUCCESS:
        draft.error = null;
        draft.loading = false;
        draft.orders = action.payload.orders;
        break;
      case GET_ORDERS_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
      case MAKE_ORDER_REQUEST:
        draft.orderError = null;
        draft.orderLoading = true;
        break;
      case MAKE_ORDER_SUCCESS:
        draft.orderError = null;
        draft.orderLoading = false;
        break;
      case MAKE_ORDER_FAILURE:
        draft.orderLoading = false;
        draft.orderLoading = action.payload.error;
        break;
    }
  });

export { ordersReducer };
