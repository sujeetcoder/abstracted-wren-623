import * as types from "./actionTypes";
const initData = {
  fName: "",
  lName: "",
  country: "India",
  countryCode: "91",
  birth: "",
  email: "",
  password: "",
  role:"user",
  mobile: 0,
  type: "text",
}

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  userData: initData,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_REGISTRATION_REQUEST:
      return { ...state, isLoading: true, isError: false  };
    case types.USER_REGISTRATION_SUCCESS:
      return { ...state, isLoading: false,isError: false  };
    case types.USER_REGISTRATION_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.USER_LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, userData:payload, isError: false, isAuth: true  };
    case "savedata":
      return { ...state, isLoading: false, userData:payload, isError: false, isAuth: true  };
    case types.USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.USER_LOGOUT_REQUEST:
      return { ...state, isLoading: true, token: payload, isAuth: true };
    case types.USER_LOGOUT_SUCCESS:
      return { ...state, isLoading: false, userData:initData, isAuth: false, isError: false};
    case types.USER_LOGOUT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
export { AuthReducer };
