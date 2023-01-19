import { Box, Button, Flex } from "@chakra-ui/react"

export const CartTotal=()=>{

    return (<div>
<Box width="70%" lineHeight={"25px"} justifyContent={"center"} justifyItems={"center"} justifySelf={"auto"} marginLeft={"27%"} border={"1px solid red"}>

    <Box >
        <Flex justifyContent={"space-between"}>
            <Box>Subtotal</Box>
            <Box>8000</Box>
        </Flex>
    </Box>
    <Box>
    <Flex justifyContent={"space-between"}>
            <Box>Shipping</Box>
            <Box> Free</Box>
    </Flex>
    </Box>
    <Box>
    <Flex justifyContent={"space-between"}>
            <Box>Total</Box>
            <Box>FREE</Box>
    </Flex>
    </Box>
    <hr />
    <Box><Flex justifyContent={"space-between"}>
            <Box>Monthly payment</Box>
            <Box> ₹9500/mo.with EMI</Box>
    </Flex></Box>
    <Button>Check Out</Button>
    </Box>
    </div>)
}