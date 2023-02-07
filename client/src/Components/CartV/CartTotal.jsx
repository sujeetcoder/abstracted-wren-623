import { Box, Button, Flex, Text } from "@chakra-ui/react"

export const CartTotal=()=>{

    
    const cartTotal=localStorage.getItem("total")
    console.log("dd",cartTotal)
    
    return (<div>
        
<Box width="83%" lineHeight={"30px"}  fontSize={"md"} marginLeft="17%" marginTop={"20px"} marginBottom="10px" >
<Box marginBottom="15px" >
    <Box >
        <Flex justifyContent={"space-between"}>
            <Box>Subtotal</Box>
            <Box>₹{cartTotal>0?cartTotal:"00"}</Box>
        </Flex>
    </Box>

    <Box>
    <Flex justifyContent={"space-between"}>
            <Box>Shipping</Box>
            <Box> Free</Box>
    </Flex>
    </Box>
    </Box>
    <hr />
    <hr />
    <Box  marginTop={"15px"}>
    <Flex fontWeight={"bold"} justifyContent={"space-between"} fontSize="xl">
            <Box><Text >Total</Text></Box>
            <Box><Text>₹{cartTotal>0?cartTotal:"00"}</Text></Box>
    </Flex>
    </Box>
    
    <Box><Flex justifyContent={"space-between" }>
            <Box>Monthly payment</Box>
            <Box> ₹{cartTotal>0?cartTotal/12:"00"}/mo.with EMI</Box>
    </Flex></Box>
    <Box color="blue" textAlign={"end"}>Explore instant Cashback§§ and No Cost EMI</Box>
    <a href="/payment"><Box textAlign={"end"}><Button backgroundColor={"#0071e3"} w="45%">Check Out</Button></Box></a>
    </Box>
    </div>)
}