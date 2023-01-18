import { Box, Button, Flex, Heading, Img, Select, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {HiOutlineGiftTop } from "react-icons/hi2";

export const CartItem = () => {



    return (<div>
        <h1>Cart Item</h1>
        <Box width="100%" lineHeight={"25px"} justifyContent={"center"} justifyItems={"center"} justifySelf={"auto"} margin={"auto"} border={"1px solid red"}>
            <Flex>
                <Box><Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDP3?" alt="img" /></Box>
                <Box >
                    <Box border={"1px solid red"} padding={"30px"}>
                        <Flex justifyContent={"space-between"}>
                            <Box width={"50%"}>
                                <Text fontSize={"xl"} fontWeight={"bold"} >
Magic Keyboard Folio for iPad (10th generation) - US English</Text></Box>
                             <Box><Select><option>1</option></Select></Box>
                            <Box>
                                <Box>Price</Box>
                                
                                
                                <Box><Link>Remove</Link></Box>
                            </Box>
                        </Flex>
                    </Box>
                    <hr />
                    <Box border={"1px solid red"} padding={"30px"}>
                        <Flex justifyContent={"space-between"}>
                            <Box> <Flex gap={"10px"}><Box marginTop={"2px"}><HiOutlineGiftTop size={"20px"} /></Box>
                            <Box>Add a gift message</Box></Flex></Box>
                            <Box><Link>Add</Link></Box>
                        </Flex>
                    </Box>
                    <Box border={"1px solid red"} padding={"30px"}>
                        <Heading size={"md"}>Find out how soon you can get this Item</Heading>
                        <Text >In stock ready to ship</Text>
                    </Box>
                </Box>
            </Flex>
            <hr />
        </Box>
    </div>)
}