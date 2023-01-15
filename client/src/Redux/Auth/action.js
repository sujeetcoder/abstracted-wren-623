import axios from "axios"
import * as types from "./actionTypes"

import { GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { dataUrl } from "../../URL/AllUrl";
const provider = new GoogleAuthProvider();

const genrateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
            size: "invisible",
            callback: (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            },
        },
        auth
    );
};

const sendOtP = (phoneNumber, setSendOtp) => (dispatch) => {
    genrateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    let ph = "+91" + phoneNumber
    signInWithPhoneNumber(auth, ph, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setSendOtp(true);
        })
        .catch((err) => {
            // setError(err.message);
            console.log(err);
        });
}

const verifyOtp = (otp, navigate) => async (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST })
    const confirmationResult = window.confirmationResult;
    await confirmationResult
        .confirm(otp)
        .then((result) => {
            // console.log(result);
            // User signed in successfully.
            const token = result.user.accessToken;
            // console.log(token);
            dispatch({ type: types.USER_LOGIN_SUCCESS, payload: token });
            navigate("/")
            // ...
        })
        .catch((error) => {
            console.log(error);
            // User couldn't sign in (bad verification code?)
            // ...
            dispatch({ type: types.USER_LOGIN_FAILURE, payload: error.message })
        });
}

const googleAuth = (payload) => async (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST })
    return await signInWithPopup(auth, provider)
        .then((res) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = res.user;
            dispatch({ type: types.USER_LOGIN_SUCCESS, payload: token });
            // console.log(user.displayName, user.email, token, credential);
        })
        .catch((err) => {
            console.log(err);
            // Handle Errors here.
            const errorCode = err.code;
            // The email of the user's account used.
            const email = err.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(err);
            // console.log(errorCode, errorMessage, email, credential);
            dispatch({ type: types.USER_LOGIN_FAILURE, payload: err.message });
        });
}

const registerUser = (payload) => (dispatch) => {
    dispatch({ type: types.USER_REGISTRATION_REQUEST })
    return axios.post(`${dataUrl}/auth/register`, payload).then((res) => {

        return dispatch({ type: types.USER_REGISTRATION_SUCCESS })
    }).catch((error) => {

        return dispatch({ type: types.USER_REGISTRATION_FAILURE, payload: error })
    })
}

const loginUser = (payload, toast) => (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST })
    return axios.post(`${dataUrl}/auth/login`, payload).then((res) => {
        toast.success("You are logged in successfully", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data.token })

    }).catch((error) => {
        toast.error(error.response.data.msg, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        // console.log(error.response.data.msg)
        dispatch({ type: types.USER_LOGIN_FAILURE, payload: error })
    })
}



export { registerUser, loginUser, googleAuth, sendOtP, verifyOtp }