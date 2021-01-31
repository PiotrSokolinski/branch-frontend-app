import { createSelector } from "reselect";

const selectState = (state: any): object => state.orders;

export const selectLoading: any = createSelector(
  selectState,
  (substate: any): object => substate.loading
);

export const selectError: any = createSelector(
  selectState,
  (substate: any): object => substate.error
);

export const selectOrders: any = createSelector(
  selectState,
  (substate: any): object => substate.orders
);
