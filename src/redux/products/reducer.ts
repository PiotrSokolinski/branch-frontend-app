import produce from "immer";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
} from "./constants";
import { Product } from "../../types";

type ProductsType = {
  loading: boolean;
  error: string | null;
  products: Product[];
};

const initialState: ProductsType = {
  loading: false,
  error: null,
  products: [],
};

const productsReducer = (state: ProductsType = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCTS_REQUEST:
        draft.error = null;
        draft.loading = true;
        break;
      case GET_PRODUCTS_SUCCESS:
        draft.error = null;
        draft.loading = false;
        draft.products = action.payload.products;
        break;
      case GET_PRODUCTS_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export { productsReducer };
