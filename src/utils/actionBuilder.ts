import { ActionType } from "../types";

const actionBuilder = (type: string, payload: object): ActionType => ({
  type,
  payload,
});

export default actionBuilder;
