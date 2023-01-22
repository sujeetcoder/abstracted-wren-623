import axios from "axios"
import * as types from "./actionTypes"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { dataUrl } from "../../Utils/AllUrls";
import { toastHandlerF, toastHandlerFire, toastHandlerS } from "../../Utils/toast";



const registerUser = (payload, toast, navigate) => (dispatch) => {
    try {
        dispatch({ type: types.USER_REGISTRATION_REQUEST })
        createUserWithEmailAndPassword(auth, payload.email, payload.password).then((res)=>{
            return axios.post(`${dataUrl}/users/signup`, payload, {withCredentials:true}).then((res2) => {
                console.log(res2)
                dispatch({ type: types.USER_REGISTRATION_SUCCESS })
                toastHandlerS(res2.data, toast, "Signup")
                navigate("/login")
            }).catch((error) => { 
                console.log(error.code) 
                toastHandlerF(error, toast)     
                dispatch({ type: types.USER_REGISTRATION_FAILURE})
            })
        }).catch((er)=>{
            console.log(er.message)
            dispatch({ type: types.USER_REGISTRATION_FAILURE})
            toastHandlerFire(er, toast)
        })

    } catch (error) {
        console.log(error)
        dispatch({ type: types.USER_REGISTRATION_FAILURE})
        toastHandlerF(error, toast)
    }
    
}

const loginUser = (payload, toast, navigate) => (dispatch) => {
    try {
        dispatch({type: types.USER_LOGIN_REQUEST})
        return axios.post(`${dataUrl}/users/login`, payload, {withCredentials:true}).then((res2) => {
            console.log(res2)
            dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res2.data })
            toastHandlerS(res2.data, toast, "Login")
            navigate("/")
    }).catch((error) => { 
        console.log(error) 
        toastHandlerF(error, toast)     
        dispatch({ type: types.USER_LOGIN_FAILURE})
    })
    } catch (error) {
        console.log(error.message)
        dispatch({ type: types.USER_LOGIN_FAILURE})
        toastHandlerF(error, toast) 
    }
}

const logOut = (payload, toast, navigate) => (dispatch) => {
    try {
        dispatch({type: types.USER_LOGOUT_REQUEST})
        return axios.post(`${dataUrl}/users/logout/${payload.email}`, payload, {withCredentials:true}).then((res2) => {
        toastHandlerS(res2.data, toast)
        console.log(res2)
        dispatch({ type: types.USER_LOGOUT_SUCCESS })
        navigate("/")
    }).catch((error) => { 
        console.log(error) 
        toastHandlerF(error, toast)     
        dispatch({ type: types.USER_LOGOUT_FAILURE})
    })
    } catch (error) {
        console.log(error.message)
        dispatch({ type: types.USER_LOGOUT_FAILURE})
        toastHandlerF(error, toast) 
    }
}



export { registerUser, loginUser, logOut }