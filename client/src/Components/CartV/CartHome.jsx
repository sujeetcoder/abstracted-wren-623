import { Box, Button, Heading } from "@chakra-ui/react"
import { useEffect } from "react"
import { CartItem } from "./CartItem"
import { CartTotal } from "./CartTotal"
import { OfferStamp } from "./OfferStamp"
import {useDispatch, useSelector} from "react-redux"
import { getCartData } from "../../Redux/CartData/Cart.Action"

 import data from "./db.json" 

export const CartHome=()=>{
console.log("data",data.cartProduct)

let tata=data.cartProduct
    return (<div >
        <OfferStamp />
        <Box width="72%" lineHeight={"20px"} justifyContent={"center"} justifyItems={"center"} justifySelf={"auto"} margin={"auto"} >



        <Box  padding={"5%"} justifyItems={"center"} fontWeight={"light"} textAlign={"center"}><Heading>Your bag total is ₹92400.00 or ₹10963.00/mo.</Heading>
        <Box><Button marginTop={"3%"}  width={"30%"} borderRadius={"7px"} backgroundColor={"#0071e3"} color="white">Check Out</Button></Box>
        
        </Box>
        <hr />
        
        
        <hr />
        {tata.map((el)=>(<div key={el.id}> <Box marginTop={"5px"} border="1px solid red" ><CartItem id={el.id} title={el.title} img={el.img} price={el.price}/></Box> </div>))}
        <br />
        
        
        <Box marginTop={"5px"}><CartTotal /></Box>
        </Box>
    </div>)
}




// const dispatch=useDispatch()
// const {token}=useSelector(store=>(store.Cart.token))



// useEffect(()=>{
//     dispatch(getCartData(token))

// },[])