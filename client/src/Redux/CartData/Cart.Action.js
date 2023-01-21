import {
    CART_PRODUCT_ERROR,
    CART_PRODUCT_LOADING,
    CART_PRODUCT_SUCCESS
} from "./Cart.ActionType"

import axios from "axios"
import jwt_decode from "jwt-decode"


let cartPostFunc = "https://rose-glamorous-katydid.cyclic.app/products/cart"

//.........................Post Cart Data in DataBase...............//
//
export const postData = (token, product, toast) => async (dispatch) => {
    const myToken = jwt_decode(token)
    const user = myToken.id
    dispatch({ type: CART_PRODUCT_LOADING })
    try {
        let response = await axios.post(cartPostFunc, {
            "id": product._id,
            "name": product.name,
            "image": product.image[0],
            "price": product.price,
            "category": product.category,
            "description": product.description
        }, {
            headers: {
                "x-authorization": `Bearer ${user}`
            }
        })

        dispatch({ type: CART_PRODUCT_SUCCESS })
    } catch (e) {
        dispatch({ type: CART_PRODUCT_ERROR })
    }
}


//...........................Get Cart Data From Database..........................//

export const getCartData = (token) => async (dispatch) => {
    const myToken = jwt_decode(token)
    const user = myToken.id

    dispatch({ type: CART_PRODUCT_LOADING })
    try {
        let response = await axios.get(cartPostFunc, {
            headers: {
                "x-authorization": `Bearer ${user}`
            }
        })
        dispatch({ type: CART_PRODUCT_SUCCESS, payload: response.data })
        return response.data
    } catch (e) {
        dispatch({ type: CART_PRODUCT_ERROR })
        // toast({
        //     title: ' Please try again later',
        //     status: 'error',
        //     position: "top",
        //     duration: 5000,
        //     isClosable: true,
        // })
    }

}






// import * as types from "./Cart.ActionType";
// import axios from "axios";

// const getProducts =(id, params)=>(dispatch  )=>{
//   dispatch({type : types.GET_PRODUCTS_REQUEST})

//   axios.get(`http://localhost:8080/products/63c96cdedc8ac267f07b42aa`,params)
//   .then((abcd) =>dispatch({type : types.GET_PRODUCTS_SUCCESS ,payload : abcd.data}))
//   .catch((error)=>dispatch({type : types.GET_PRODUCTS_fAILURE}))   
// }
// const addProductCartRequest = (payload) => {
//   return {
//     type: types.ADD_PRODUCT_CART_REQUEST,
//     payload,
//   };
// };
// const addProductCartSuccess = (payload) => {
//   return {
//     type: types.ADD_PRODUCT_CART_SUCCESS,
//     payload,
//   };
// };
// const addProductCartFailure = (payload) => {
//   return {
//     type: types.ADD_PRODUCT_CART_FAILURE,
//     payload,
//   };
// };
// const addProductToCart = (product) => (dispatch) => {
//   dispatch(addProductCartRequest());
//   axios
//     .post("http://localhost:8080/products/63c96cdedc8ac267f07b42aa", product)
//     .then((abcd) => dispatch(addProductCartSuccess(abcd.data)))
//     .catch((error) => dispatch(addProductCartFailure(error.data)));
// };
// export { addProductToCart, getProducts };