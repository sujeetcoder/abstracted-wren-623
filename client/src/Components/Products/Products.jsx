import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Products = () => {
  return (
    <div>
      <Stack
        backgroundColor={"#f5f5f7"}
        minH={"100%"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          ml={{ sm: "1%", md: "-1%", lg: "6%", "2xl": "10%" }}
          p={8}
          pb={0}
          pr={0}
          flex={{base:'10em', sm: "15em", md: "2em", lg: "30em",xl:"35em", "2xl": "35em" }}
          align={"center"}
          justify={"center"}
        >
          <Stack spacing={6} p={8} pr={0} pb={0}>
            <Heading
              fontWeight={"semibold"}
              fontSize={{ base: "3xl", md: "2xl", lg: "5xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                Mix. Match.
              </Text>
              <br /> <Text as={"span"}>MagSafe.</Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }}>
              Snap on a case, wallet, wireless <br /> charger or battery pack.
            </Text>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"blue.600"}
              as={"span"}
            >
              Shop MagSafe.
            </Text>

            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
            ></Stack>
          </Stack>
        </Flex>
        <Flex
          p={5}
          pr={0}
          pb={0}
          flex={{
            sm: "30em",
            md: "10em",
            lg: "62em",
            xl: "80em",
            "2xl": "96em",
          }}
        >
          <Image
            alt="photo"
            objectFit={"cover"}
            h={{
              base: "9em",
              sm: "15em",
              md: "14em",
              lg: "19.7em",
              xl: "19.7em",
              "2xl": "19.7em",
            }}
            src={
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magsafe-202209?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1666047384972"
            }
          />
        </Flex>
      </Stack>

      <Stack
        w={{
          base: "15em",
          sm: "20em",
          md: "30em",
          lg: "40em",
          xl: "50em",
          "2xl": "50em",
        }}
        m={"auto"}
        mt={8}
      >
        <Text
          fontSize={{
            base: "lg",
            sm: "lg",
            md: "xl",
            lg: "xl",
            xl: "2xl",
            "2xl": "2xl",
          }}
          textAlign={"center"}
        >
          Find the Products you’re looking for.
        </Text>
        <Input placeholder="Search Products" />
      </Stack>
      <Stack  w={{
          base: "15em",
          sm: "20em",
          md: "30em",
          lg: "40em",
          xl: "50em",
          "2xl": "50em",
        }}
        
        m={"auto"} mt={8}>
        <Text fontSize={{
            base: "lg",
            sm: "lg",
            md: "xl",
            lg: "xl",
            xl: "2xl",
            "2xl": "2xl",
          }} textAlign={'center'}>Browse by Product</Text>
          <hr />
          <Box display={{ base: "block",sm: "block",md: "flex",lg: "flex",xl: "flex","2xl": "flex"}} gap={2}  justifyContent={'center'} >
          <Box margin={'auto'} textAlign={'center'} > 
          <Box m={"auto"} mt={2} width={{base:20,sm:20,md:85,lg:100,xl:130}}  border={'1px solid lightgray'} borderRadius={"50%"} p={{base:1,sm:4,md:0.5,lg:1,xl:4,'2xl':4}} >
             <Image margin={'auto'}  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615" />
             </Box><Text>Mac</Text>
             </Box>
             <Box margin={'auto'} textAlign={'center'} > 
          <Box m={"auto"} mt={2} width={{base:20,sm:20,md:85,lg:100,xl:130}}  border={'1px solid lightgray'} borderRadius={"50%"} p={{base:1,sm:4,md:0.5,lg:1,xl:4,'2xl':4}} >
             <Image margin={'auto'}  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-ipad?wid=150&hei=150&fmt=png-alpha&.v=1544482382704" />
             </Box>
             <Text>iPad</Text>
             </Box>
             <Box margin={'auto'} textAlign={'center'} > 
          <Box m={"auto"} mt={2} width={{base:20,sm:20,md:85,lg:100,xl:130}}  border={'1px solid lightgray'} borderRadius={"50%"} p={{base:1,sm:4,md:0.5,lg:1,xl:4,'2xl':4}} >
             <Image margin={'auto'}  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-iphone?wid=150&hei=150&fmt=png-alpha&.v=1544482382650" />
             </Box>
             <Text>iPhone</Text>
             </Box>
             <Box margin={'auto'} textAlign={'center'} > 
          <Box m={"auto"} mt={2} width={{base:20,sm:20,md:85,lg:100,xl:130}}  border={'1px solid lightgray'} borderRadius={"50%"} p={{base:1,sm:4,md:0.5,lg:1,xl:4,'2xl':4}} >
             <Image margin={'auto'}  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-iphone?wid=150&hei=150&fmt=png-alpha&.v=1544482382650" />
             </Box>
             <Text>Watch</Text>
             </Box>
             <Box margin={'auto'} textAlign={'center'} > 
          <Box m={"auto"} mt={2} width={{base:20,sm:20,md:85,lg:100,xl:130}}  border={'1px solid lightgray'} borderRadius={"50%"} p={{base:1,sm:4,md:0.5,lg:1,xl:4,'2xl':4}} >
             <Image margin={'auto'}  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-tv?wid=150&hei=150&fmt=png-alpha&.v=1667595021278" />
             </Box>
             <Text>Tv & Home</Text>
             </Box>
          </Box>
          
      </Stack>
    </div>
  );
};
export default Products;
