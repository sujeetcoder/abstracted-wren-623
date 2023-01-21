import { Box, Button, Flex, Text } from "@chakra-ui/react"

export const CartTotal=()=>{

    return (<div>
        
<Box width="83%" lineHeight={"30px"}  fontSize={"md"} marginLeft="17%" marginTop={"20px"} marginBottom="10px" >
<Box marginBottom="15px" >
    <Box >
        <Flex justifyContent={"space-between"}>
            <Box>Subtotal</Box>
            <Box>₹8000</Box>
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
            <Box><Text>₹10000</Text></Box>
    </Flex>
    </Box>
    
    <Box><Flex justifyContent={"space-between" }>
            <Box>Monthly payment</Box>
            <Box> ₹9500/mo.with EMI</Box>
    </Flex></Box>
    <Box color="blue" textAlign={"end"}>Explore instant Cashback§§ and No Cost EMI</Box>
    <Box textAlign={"end"}><Button backgroundColor={"#0071e3"} w="45%">Check Out</Button></Box>
    </Box>
    </div>)
}