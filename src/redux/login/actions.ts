import actionBuilder from "../../utils/actionBuilder";

import { ActionType } from "../../types";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

export const loginRequest = (payload: object): ActionType =>
  actionBuilder(LOGIN_REQUEST, payload);

export const loginSuccess = (payload: object): ActionType =>
  actionBuilder(LOGIN_SUCCESS, payload);

export const loginFailure = (payload: object): ActionType =>
  actionBuilder(LOGIN_FAILURE, payload);
