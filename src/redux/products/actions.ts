import actionBuilder from "../../utils/actionBuilder";

import { ActionType } from "../../types";

import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./constants";

export const getProductsRequest = (payload: object): ActionType => {
  console.log("2");
  return actionBuilder(GET_PRODUCTS_REQUEST, payload);
};

export const getProductsSuccess = (payload: object): ActionType =>
  actionBuilder(GET_PRODUCTS_SUCCESS, payload);

export const getProductsFailure = (payload: object): ActionType =>
  actionBuilder(GET_PRODUCTS_FAILURE, payload);
