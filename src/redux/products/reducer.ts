import produce from "immer";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
} from "./constants";
import { Product } from "../../types";

const mockedProducts = [
  {
    id: 1,
    name: "Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 10000,
    stock: 100,
  },
  {
    id: 1,
    name: "Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 10000,
    stock: 100,
  },
  {
    id: 1,
    name: "Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 10000,
    stock: 100,
  },
  {
    id: 1,
    name: "Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 10000,
    stock: 100,
  },
];

type ProductsType = {
  loading: boolean;
  error: string | null;
  products: Product[];
};

const initialState: ProductsType = {
  loading: false,
  error: null,
  products: mockedProducts,
};

const productsReducer = (state: ProductsType = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCTS_REQUEST:
        draft.error = null;
        draft.loading = true;
        draft.products = action.payload.products;
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.error = null;
        draft.loading = false;
        break;
      case GET_PRODUCTS_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export { productsReducer };
