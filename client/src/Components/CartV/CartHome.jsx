import { Box, Button, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { CartItem } from "./CartItem"
import { CartTotal } from "./CartTotal"
import { OfferStamp } from "./OfferStamp"
import {useDispatch, useSelector} from "react-redux"
import { dataUrl } from "../../Utils/AllUrls"
import axios from "axios"

export const CartHome=()=>{

const [cartData, setPro] = useState([]);
const [changeone,setchangeone] = useState(0)

const getPro = () => {
    axios.get(`${dataUrl}/carts`, { withCredentials: true })
        .then((res) => setPro(res.data))
        .catch((er) => console.log(er))
}
const delPro = (id) => {
    axios.delete(`${dataUrl}/carts/deleteone/${id}`, { withCredentials: true })
        .then((res)=>{
            /* toast.success("Remove successfully") */
            console.log("delete")
            setchangeone((pre)=>pre+1)
        })
        .catch((er) => console.log(er))
}
const cheakout = () => {
    axios.patch(`${dataUrl}/carts/order/all`, { withCredentials: true })
        .then((res) => {console.log(res.data)
           /*  toast.success("Order Suceccesfull") */
            setchangeone((pre)=>pre+1)
        })
        .catch((er) => console.log(er))
}

useEffect(() => {
    getPro()

}, [changeone])



    
console.log( "njvnjdvd" ,cartData[0])

const cartTotal=localStorage.getItem("total")
    console.log("yy",cartTotal)
    


    return (<div >
        <OfferStamp />
        <Box width="72%" lineHeight={"20px"} justifyContent={"center"} justifyItems={"center"} justifySelf={"auto"} margin={"auto"} >



        <Box  padding={"5%"} justifyItems={"center"} fontWeight={"light"} textAlign={"center"}><Heading>Your bag total is ₹{cartTotal>0?cartTotal:"00"} </Heading>
        <Box><Button marginTop={"3%"}  width={"30%"} borderRadius={"7px"} backgroundColor={"#0071e3"} color="white">Check Out</Button></Box>
        
        </Box>
        <hr />
        
        
        <hr />
        {cartData && cartData.map((el)=>(<div key={el._id}> <Box marginTop={"5px"} ><CartItem delPro={delPro} setchangeone={setchangeone}  {...el}/></Box> </div>))}
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