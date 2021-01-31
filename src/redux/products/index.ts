export {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
} from "./actions";

export { selectLoading, selectProducts, selectError } from "./selectors";

export { getProducts } from "./services";

export { productsReducer } from "./reducer";
