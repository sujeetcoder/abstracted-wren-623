import {
    CART_PRODUCT_EDIT_SUCCESS,
    CART_PRODUCT_ERROR,
    CART_PRODUCT_LOADING,
    CART_PRODUCT_SUCCESS
} from "./Cart.actionTypes"

import axios from "axios"
import jwt_decode from "jwt-decode"


let cartPostFunc = "https://met-ned-back.onrender.com/cart"

//.........................Post Cart Data in DataBase...............//
//
export const postData = (token, product, toast) => async (dispatch) => {
    const myToken = jwt_decode(token)
    const user = myToken.id
    dispatch({ type: CART_PRODUCT_LOADING })
    try {
        let response = await axios.post(cartPostFunc, {
            "product_id": product._id,
            "title": product.title,
            "img1": product.img1,
            "actual_price": product.actual_price,
            "crossed_price": product.crossed_price,
            "manufacturer": product.manufacturer,
            "country": product.country,
            "category": product.category,
            "sub_category": product.sub_category
        }, {
            headers: {
                "x-authorization": `Bearer ${user}`
            }
        })

        dispatch({ type: CART_PRODUCT_EDIT_SUCCESS })
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
        toast({
            title: ' Please try again later',
            status: 'error',
            position: "top",
            duration: 5000,
            isClosable: true,
        })
    }

}





