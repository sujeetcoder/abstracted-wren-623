import axios from "axios"
import * as types from "./actionTypes"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { dataUrl } from "../../Utils/AllUrls";
import { toastHandlerF, toastHandlerS } from "../../Utils/toast";



const registerUser = (payload, toast) => (dispatch) => {
    try {
        dispatch({ type: types.USER_REGISTRATION_REQUEST })
        createUserWithEmailAndPassword(auth, payload.email, payload.pass).then((res)=>{
            return axios.post(`${dataUrl}/users/signup`, payload, {withCredentials:true}).then((res2) => {
                toastHandlerS(res2.data, toast)
                console.log("hh")
                dispatch({ type: types.USER_REGISTRATION_SUCCESS, payload: res2.data })
            }).catch((error) => { 
                console.log(error) 
                toastHandlerF(error, toast)     
                dispatch({ type: types.USER_REGISTRATION_FAILURE})
            })
        })

    } catch (error) {
        console.log(error.message)
        dispatch({ type: types.USER_REGISTRATION_FAILURE})
    }
    
}

const loginUser = (payload, toast) => (dispatch) => {
    
}

const logOut = (payload, toast) => (dispatch) => {
    
}



export { registerUser, loginUser, logOut }