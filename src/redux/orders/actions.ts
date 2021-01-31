import actionBuilder from "../../utils/actionBuilder";

import { ActionType } from "../../types";

import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "./constants";

export const getOrdersRequest = (payload: object): ActionType =>
  actionBuilder(GET_ORDERS_REQUEST, payload);

export const getOrdersSuccess = (payload: object): ActionType =>
  actionBuilder(GET_ORDERS_SUCCESS, payload);

export const getOrdersFailure = (payload: object): ActionType =>
  actionBuilder(GET_ORDERS_FAILURE, payload);
