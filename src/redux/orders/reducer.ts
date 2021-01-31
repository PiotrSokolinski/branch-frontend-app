import produce from "immer";
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_FAILURE,
  GET_ORDERS_SUCCESS,
} from "./constants";
import { Order } from "../../types/Order";

const mockedOrders: Order[] = [
  {
    id: 1,
    user_id: 1,
    created_at: "string",
    status: "shipped",
    products: [
      {
        id: 1,
        name: "Name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 10000,
        stock: 100,
      },
    ],
  },
  {
    id: 1,
    user_id: 1,
    created_at: "string",
    status: "shipped",
    products: [
      {
        id: 1,
        name: "Name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 10000,
        stock: 100,
      },
    ],
  },
  {
    id: 1,
    user_id: 1,
    created_at: "string",
    status: "shipped",
    products: [
      {
        id: 1,
        name: "Name 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 10000,
        stock: 100,
      },
    ],
  },
];

type OrdersType = {
  loading: boolean;
  error: string | null;
  orders: Order[];
};

const initialState: OrdersType = {
  loading: false,
  error: null,
  orders: mockedOrders,
};

const ordersReducer = (state: OrdersType = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ORDERS_REQUEST:
        draft.error = null;
        draft.loading = true;
        draft.orders = action.payload.orders;
        break;
      case GET_ORDERS_SUCCESS:
        draft.error = null;
        draft.loading = false;
        break;
      case GET_ORDERS_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export { ordersReducer };
