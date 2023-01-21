import * as types from "./actionTypes";
const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  userData: {},
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_REGISTRATION_REQUEST:
      return { ...state, isLoading: true, isError: false  };
    case types.USER_REGISTRATION_SUCCESS:
      return { ...state, isLoading: false,isError: false , userData:payload };
    case types.USER_REGISTRATION_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true, token: payload, isAuth: true };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false };
    case types.USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.USER_LOGOUT_REQUEST:
      return { ...state, isLoading: true, token: payload, isAuth: true };
    case types.USER_LOGOUT_SUCCESS:
      return { ...state, isLoading: false, userData:{}};
    case types.USER_LOGOUT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
export { AuthReducer };
