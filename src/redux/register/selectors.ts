import { createSelector } from "reselect";

const selectState = (state: any): object => state.register;

export const selectLoading: any = createSelector(
  selectState,
  (substate: any): object => substate.loading
);

export const selectError: any = createSelector(
  selectState,
  (substate: any): object => substate.error
);
