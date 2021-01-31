import actionBuilder from "../../utils/actionBuilder";

import { ActionType } from "../../types";

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./constants";

export const registerRequest = (payload: object): ActionType =>
  actionBuilder(REGISTER_REQUEST, payload);

export const registerSuccess = (payload: object): ActionType =>
  actionBuilder(REGISTER_SUCCESS, payload);

export const registerFailure = (payload: object): ActionType =>
  actionBuilder(REGISTER_FAILURE, payload);
