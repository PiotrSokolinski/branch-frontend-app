import produce from "immer";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./constants";

type RegisterType = {
  loading: boolean;
  error: string | null;
};

const initialState: RegisterType = {
  loading: false,
  error: null,
};

const registerReducer = (
  state: RegisterType = initialState,
  action: any
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        draft.error = null;
        draft.loading = true;
        break;
      case REGISTER_SUCCESS:
        draft.error = null;
        draft.loading = false;
        break;
      case REGISTER_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export { registerReducer };
