import { Box, Button } from "@chakra-ui/react"
import { CartItem } from "./CartItem"
import { CartTotal } from "./CartTotal"

export const CartHome=()=>{



    return (<div >
        <Box width="80%" lineHeight={"25px"} justifyContent={"center"} justifyItems={"center"} justifySelf={"auto"} margin={"auto"} border={"1px solid red"}>
        <h1>Cart page</h1>
        <Box border={"1px solid red"} justifyItems={"center"} textAlign={"center"}><Box>Your bag total is ₹92400.00 or ₹10963.00/mo.</Box>
        <Box><Button>Check Out</Button></Box>
        <hr />
        </Box>
        <Box><CartItem /></Box>
        <Box><CartTotal /></Box>
        </Box>
    </div>)
}