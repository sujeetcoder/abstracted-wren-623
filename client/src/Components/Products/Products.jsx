import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [category , setCategory] = useState("all");
  const getData = (category) => {
    if(category !== "all"){
    axios
      .get(`https://apple0.cyclic.app/products?category=${category}`)
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
    }else{
      axios
      .get(`https://apple0.cyclic.app/products`)
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getData(category);
  }, [category]);
  console.log(data);

  return (
    <div backgroundColor={"white"}>
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
          flex={{
            base: "10em",
            sm: "15em",
            md: "2em",
            lg: "30em",
            xl: "15em",
            "2xl": "35em",
          }}
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
              md: "15em",
              lg: "20em",
              xl: "25em",
              "2xl": "32em",
            }}
            src={
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/magsafe-202209?wid=2880&hei=960&fmt=jpeg&qlt=90&.v=1666047384972"
            }
          />
        </Flex>
      </Stack>
      <Box>
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
      </Box>
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
          Browse by Product
        </Text>
        <hr />
        <Box
          display={{
            base: "block",
            sm: "block",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          gap={5}
          justifyContent={"center"}
        >
          <Box margin={"auto"} textAlign={"center"}>
            <Box
            onClick={()=>setCategory("Mac")}
              m={"auto"}
              mt={2}
              width={{ base: 20, sm: 20, md: 85, lg: 150, xl: 180 }}
              border={"1px solid lightgray"}
              borderRadius={"50%"}
              p={{ base: 1, sm: 4, md: 0.5, lg: 1, xl: 10, "2xl": 10 }}
            >
              <Image
                margin={"auto"}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
              />
            </Box>
            <Text
              fontSize={{
                base: "lg",
                sm: "lg",
                md: "small",
                lg: "xl",
                xl: "2xl",
                "2xl": "2xl",
              }}
              mt={2}
            >
              Mac
            </Text>
          </Box>
         
          <Box margin={"auto"} textAlign={"center"}>
            <Box
             onClick={()=>setCategory("iPhone")}
              m={"auto"}
              mt={2}
              width={{ base: 20, sm: 20, md: 85, lg: 150, xl: 180 }}
              border={"1px solid lightgray"}
              borderRadius={"50%"}
              p={{ base: 1, sm: 4, md: 0.5, lg: 1, xl: 10, "2xl": 10 }}
            >
              <Image
                margin={"auto"}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-iphone?wid=150&hei=150&fmt=png-alpha&.v=1544482382650"
              />
            </Box>
            <Text
              fontSize={{
                base: "lg",
                sm: "lg",
                md: "small",
                lg: "xl",
                xl: "2xl",
                "2xl": "2xl",
              }}
              mt={2}
            >
              iPhone
            </Text>
          </Box>
          <Box margin={"auto"} textAlign={"center"}>
            <Box
             onClick={()=>setCategory("watch")}
              m={"auto"}
              mt={2}
              width={{ base: 20, sm: 20, md: 85, lg: 150, xl: 180 }}
              border={"1px solid lightgray"}
              borderRadius={"50%"}
              p={{ base: 1, sm: 4, md: 0.5, lg: 1, xl: 10, "2xl": 10 }}
            >
              <Image
                margin={"auto"}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-watch?wid=150&hei=150&fmt=png-alpha&.v=1544482383418"
              />
            </Box>
            <Text
              fontSize={{
                base: "lg",
                sm: "lg",
                md: "small",
                lg: "xl",
                xl: "2xl",
                "2xl": "2xl",
              }}
              mt={2}
            >
              Watch
            </Text>
          </Box>
          <Box margin={"auto"} textAlign={"center"}>
            <Box
             onClick={()=>setCategory('Headphons')}
              m={"auto"}
              mt={2}
              width={{ base: 20, sm: 20, md: 85, lg: 150, xl: 180 }}
              border={"1px solid lightgray"}
              borderRadius={"50%"}
              p={{ base: 1, sm: 4, md: 0.5, lg: 1, xl: 10, "2xl": 10 }}
            >
              <Image
                margin={"auto"}
                src="https://i.pinimg.com/originals/a8/13/5d/a8135d121d45e460baf292db0c6cc82b.png"
              />
            </Box>
            <Text
              fontSize={{
                base: "lg",
                sm: "lg",
                md: "small",
                lg: "xl",
                xl: "2xl",
                "2xl": "2xl",
              }}
              mt={2}
            >
              Headphones & Speakers
            </Text>
          </Box>
          <Box margin={"auto"} textAlign={"center"}>
            <Box
              onClick={()=>setCategory("smarthome")}
              m={"auto"}
              mt={2}
              width={{ base: 20, sm: 20, md: 85, lg: 150, xl: 180 }}
              border={"1px solid lightgray"}
              borderRadius={"50%"}
              p={{ base: 1, sm: 4, md: 0.5, lg: 1, xl: 10, "2xl": 10 }}
            >
              <Image
                margin={"auto"}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-ipad?wid=150&hei=150&fmt=png-alpha&.v=1544482382704"
              />
            </Box>
            <Text
              fontSize={{
                base: "lg",
                sm: "lg",
                md: "small",
                lg: "xl",
                xl: "2xl",
                "2xl": "2xl",
              }}
              mt={2}
            >
              Smart Home
            </Text>
          </Box>
        </Box>
      </Stack>
      <Box  w={'90%'} mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Divider />
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {data.map((product) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <Grid item xs={2} sm={4} md={4} key={product.id}>
                <Box borderRadius={'30px'} boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
                  textAlign="center"
                  style={{
                    padding: "25px 1px",
                  }}
                >
                  <Image h={{base:"250px",sm:"400px",md:"350px",lg:"500px",xl:"500px",}}  src={product.image[0]} alt="Products" />
                  <Text
                    style={{
                      fontWeight: 600,
                      color: "#212121",
                    }}
                  >
                    {product.name}
                  </Text>
                  <Text
                    style={{
                      color: "green",
                    }}
                  >
                    {`Rs.${product.price}`}
                  </Text>
                </Box>
              </Grid>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};
export default Products;
