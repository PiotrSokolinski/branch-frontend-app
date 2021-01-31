import produce from "immer";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

type LoginType = {
  loading: boolean;
  error: string | null;
};

const initialState: LoginType = {
  loading: false,
  error: null,
};

const loginReducer = (state: LoginType = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.error = null;
        draft.loading = true;
        break;
      case LOGIN_SUCCESS:
        draft.error = null;
        draft.loading = false;
        break;
      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = action.payload.error;
        break;
    }
  });

export { loginReducer };
