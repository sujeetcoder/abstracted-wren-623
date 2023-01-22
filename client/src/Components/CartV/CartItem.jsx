import { Box, Button, Flex, Heading, Img, Select, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { HiOutlineGiftTop } from "react-icons/hi2";
import { BsBoxSeam } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useEffect } from "react";
import { useState } from "react";
export const CartItem = ({_id,product,quantity,delPro}) => {
    const {name, image, price} = product
    const ()











    return (<div>

        <Box width="100%" paddingTop="5%" lineHeight={"25px"} justifyContent={"center"} justifyItems={"center"} justifySelf={"auto"} margin={"auto"} >
            <Flex>
                <Box boxSize={"18%"}  ><Img src={image[0]} alt="img" /></Box>
                <Box  width="90%" >
                    <Box >
                        <Flex justifyContent={"space-between"}>
                            <Box width={"45%"}>
                                <Text fontSize={"25px"} fontWeight={"medium"} >
                                    {name}</Text></Box>
                            <Box marginRight={"25%"}><Select onChange={(e)=>changeHandler1(+e.target.value)} defaultValue={quantity}><option value={1}>1</option>
                            
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}> 4</option>

                            
                            </Select></Box>
                            <Box>
                                <Box fontWeight={"medium"} fontSize={"2xl"}>{price}</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box marginTop={"2%"} fontSize="md"><Flex justifyContent={"space-between"}>
                        <Box>Pay 16% pa for 6 months</Box>
                        <Box> ₹8692.00/mo.</Box>
                    </Flex></Box>
                    <Box textAlign={"end"} marginTop={"2%"} marginBottom="2%" color="blue" fontSize={"lg"} onClick={()=>delPro(_id)}>Remove</Box>
                    <hr />
                    <hr />
                    <Box paddingTop={"15px"} paddingBottom="15px"  fontSize="lg" >
                        <Flex justifyContent={"space-between"}>
                            <Box> <Flex gap={"10px"}><Box marginTop={"5px"}><HiOutlineGiftTop size={"20px"} /></Box>
                                <Box fontWeight={"medium"}>Add a gift message</Box></Flex></Box>
                            <Box color="blue"><Link>Add</Link></Box>
                        </Flex>
                    </Box>
                    <hr />
                    <hr />
            
                    <Box >
                        <Flex gap={"3px"} marginTop="8px"><Box><Text fontWeight={"medium"} fontSize="md" marginTop={"5px"}>Find out how soon you can get this Item</Text></Box>
                      <Box> <Text color={"blue"} marginTop="6px">Enter PinCode </Text> </Box><Box marginTop={"8px"}><MdKeyboardArrowDown color="blue" /></Box></Flex>
                        <Flex gap="5px"><Box marginTop={"5px"} > <BsBoxSeam /></Box><Box><Text> In stock ready to ship</Text></Box></Flex>
                    </Box>
                </Box>
            </Flex>
            <br />
            <br />
            <hr />
            <hr />
            
        </Box>
    </div>)
}