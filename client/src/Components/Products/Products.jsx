import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "../../Styles/Products.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useMedia } from "../../MediaQuery/UseMedia";
import axios from "axios";
const Products = () => {
  const { mediumScreen, smallScreen } = useMedia();
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:8080/products")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(data);
  let Mac = data.filter((e) => {
    if (e.category == "Mac") {
      return e.category;
    }
  });
  console.log(Mac);

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
            xl: "35em",
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
              xl: "32em",
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
              iPad
            </Text>
          </Box>
          <Box margin={"auto"} textAlign={"center"}>
            <Box
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
              m={"auto"}
              mt={2}
              width={{ base: 20, sm: 20, md: 85, lg: 150, xl: 180 }}
              border={"1px solid lightgray"}
              borderRadius={"50%"}
              p={{ base: 1, sm: 4, md: 0.5, lg: 1, xl: 10, "2xl": 10 }}
            >
              <Image
                margin={"auto"}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-tv?wid=150&hei=150&fmt=png-alpha&.v=1667595021278"
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
              TV & Home
            </Text>
          </Box>
        </Box>
      </Stack>
      <Box backgroundColor={"white"}>
        {/* carousel......................... */}
        <Box w={"70%"} m={"auto"} mt={2}>
          <Heading textAlign={"center"}>Featured Macbooks</Heading>
          <Swiper
            slidesPerView={!smallScreen ? 1 : 3 && !mediumScreen ? 2 : 3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
          </Swiper>
          <Text
            fontSize={{
              base: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "2xl",
              "2xl": "2xl",
            }}
            mt={2}
            textAlign={"center"}
            color={"blue.600"}
          >
            Shop all Iphones
          </Text>
        </Box>
        {/* carousel......................... */}
        {/* carousel......................... */}
        <Box w={"70%"} m={"auto"} mt={2} backgroundColor={"white"}>
          <Heading textAlign={"center"}>Featured iPads</Heading>
          <Swiper
            slidesPerView={!smallScreen ? 1 : 3 && !mediumScreen ? 2 : 3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
          </Swiper>
          <Text
            fontSize={{
              base: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "2xl",
              "2xl": "2xl",
            }}
            mt={2}
            textAlign={"center"}
            color={"blue.600"}
          >
            Shop all Iphones
          </Text>
        </Box>
        {/* carousel......................... */}
        {/* carousel......................... */}

        <Box w={"70%"} m={"auto"} mt={2} backgroundColor={"white"}>
          <Heading textAlign={"center"}>Featured iPhones</Heading>
          
          <Swiper
          slidesPerView={!smallScreen ? 1 : 3 && !mediumScreen ? 2 : 3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Mac.map(e=>
          <SwiperSlide key={e._id}>
            {" "}
            <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
              <Img src={e.image[0]} />
              <Text>{e.name}</Text>
              <Text>price:{e.price} (Incl. of all taxes)</Text>{" "}
            </Box>{" "}
          </SwiperSlide>
          )}
          {/* <SwiperSlide>
            {" "}
            <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
              <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
              <Text>iPhone 14</Text>
              <Text>price:79990 (Incl. of all taxes)</Text>{" "}
            </Box>{" "}
          </SwiperSlide> */}
        </Swiper>
          
          {/* 
           
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide> */}
          {/* </Swiper> */} 
          <Text
            fontSize={{
              base: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "2xl",
              "2xl": "2xl",
            }}
            mt={2}
            textAlign={"center"}
            color={"blue.600"}
          >
            Shop all Iphones
          </Text>
        </Box>
        {/* carousel......................... */}
        {/* carousel......................... */}
        <Box w={"70%"} m={"auto"} mt={2} backgroundColor={"white"}>
          <Heading textAlign={"center"}>Featured Watches</Heading>
          <Swiper
            slidesPerView={!smallScreen ? 1 : 3 && !mediumScreen ? 2 : 3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
          </Swiper>
          <Text
            fontSize={{
              base: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "2xl",
              "2xl": "2xl",
            }}
            mt={2}
            textAlign={"center"}
            color={"blue.600"}
          >
            Shop all Iphones
          </Text>
        </Box>
        {/* carousel......................... */}
        {/* carousel......................... */}
        <Box w={"70%"} m={"auto"} mt={2} backgroundColor={"white"}>
          <Heading textAlign={"center"}>TV & Homes</Heading>
          <Swiper
            slidesPerView={!smallScreen ? 1 : 3 && !mediumScreen ? 2 : 3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box backgroundColor={"#f2f2f2"} borderRadius={"10px"}>
                <Img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text>iPhone 14</Text>
                <Text>price:79990 (Incl. of all taxes)</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
          </Swiper>
          <Text
            fontSize={{
              base: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "2xl",
              "2xl": "2xl",
            }}
            mt={2}
            textAlign={"center"}
            color={"blue.600"}
          >
            Shop all Iphones
          </Text>
        </Box>
        {/* carousel......................... */}
      </Box>
    </div>
  );
};
export default Products;
