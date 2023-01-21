import { Box, Button, Flex, Heading, Img, Select, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { HiOutlineGiftTop } from "react-icons/hi2";
import { BsBoxSeam } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
export const CartItem = () => {



    return (<div>

        <Box width="100%" paddingTop="5%" lineHeight={"25px"} justifyContent={"center"} justifyItems={"center"} justifySelf={"auto"} margin={"auto"} >
            <Flex>
                <Box boxSize={"18%"}  ><Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDP3?" alt="img" /></Box>
                <Box  width="90%" >
                    <Box >
                        <Flex justifyContent={"space-between"}>
                            <Box width={"45%"}>
                                <Text fontSize={"25px"} fontWeight={"medium"} >
                                    Magic Keyboard Folio for iPad (10th generation) - US English</Text></Box>
                            <Box marginRight={"25%"}><Select><option>1</option></Select></Box>
                            <Box>
                                <Box fontWeight={"medium"} fontSize={"2xl"}>₹49800.00</Box>
                            </Box>
                        </Flex>
                    </Box>
                    <Box marginTop={"2%"} fontSize="md"><Flex justifyContent={"space-between"}>
                        <Box>Pay 16% pa for 6 months</Box>
                        <Box> ₹8692.00/mo.</Box>
                    </Flex></Box>
                    <Box textAlign={"end"} marginTop={"2%"} marginBottom="2%" color="blue" fontSize={"lg"}>Remove</Box>
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