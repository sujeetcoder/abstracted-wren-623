import * as types from "./actionTypes"
const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: null,
}


const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.USER_REGISTRATION_REQUEST:
            return { ...state, isLoading: true };
        case types.USER_REGISTRATION_SUCCESS:
            return { ...state, isLoading: false, };
        case types.USER_REGISTRATION_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case types.USER_LOGIN_REQUEST:
            return { ...state, isLoading: true, token: payload, isAuth: true };
        case types.USER_LOGIN_SUCCESS:
            return { ...state, isLoading: false, };
        case types.USER_LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}
export { reducer }