import React from 'react'
import {Box,Text,Image, UnorderedList, ListItem, Tooltip} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useMedia } from "../../MediaQuery/UseMedia";
import "../../Styles/SingleProduct.css";

const BottomData = () => {
    const { mediumScreen, smallScreen } = useMedia();

  return (
    <div>
    
    <Box className='data-information'>
       <Tooltip hasArrow label='Product Information' bg='whitesmoke' color='black'>
        <details>
          <summary> <Text fontSize='32px' fontWeight='600' letterSpacing='0.004em' fontFamily='SF Pro Icons'>Product Information</Text> </summary>
         <Box className='data-details' pt='40px'>
          <Box className='data-detail' display={"flex"} justifyContent='space-between'>
              <Text fontSize={'24px'} fontWeight='600' fontFamily={'SF Pro Display'} as='h1' pt='14px' className='data-product-data'>Overview</Text>
           <Box  className='data-product'>
           <Text  fontSize='17px' fontFamily={'SF Pro Text'} color='#1d1d1f'>
              The OtterBox Lumen Series Case with 
              MagSafe Is an exclusive design 
              celebrating the Year of the Rabbit.
               Traditional red and gold colors and a
                rabbit symbolize peace and success for
                 the coming year. This slim case works
                  seamlessly with MagSafe chargers and
                   accessories. Dress your phone with
                  positive reflections and proven protection.
             </Text>
             <Box mt='34px' border={'1px solid #d2d2d7'} ></Box>
           </Box>
          </Box>

          <Box className='data-detail' mt='19px' display={"flex"} justifyContent='space-between'>
              <Text fontSize={'24px'} fontWeight='600' fontFamily={'SF Pro Display'} as='h1' pt='14px' className='data-product-data'>Highlights</Text>
           <Box  className='data-product'>
             <UnorderedList fontSize='17px' fontFamily={'SF Pro Text'} color='#1d1d1f' >
              <ListItem>Designed for iPhone and Apple MagSafe technology.</ListItem>
              <ListItem> Sleek, pocket-friendly profile. </ListItem>
              <ListItem> Clear and scratch-resistant case shows off your iPhone. </ListItem>
              <ListItem> Colorful highlights on sides and back. </ListItem>
              <ListItem> Grippy sides for a sure grip. </ListItem>
              <ListItem> Raised edges protect camera and screen. </ListItem>
              <ListItem> Includes recycled material. </ListItem>
              <ListItem> Limited lifetime warranty and hassle-free customer service. </ListItem>
             </UnorderedList>
             <Box mt='34px' border={'1px solid #d2d2d7'} ></Box>
           </Box>
          </Box>

          <Box className='data-detail' mt='19px' display={"flex"} justifyContent='space-between'>
              <Text fontSize={'24px'} fontWeight='600' fontFamily={'SF Pro Display'} as='h1' pt='14px' className='data-product-data'>In the Box</Text>
           <Box  className='data-product'>
           <Text  fontSize='17px' fontFamily={'SF Pro Text'} color='#1d1d1f'>
              OtterBox Lumen Series Case with MagSafe.
             </Text>
             <Box mt='34px' border={'1px solid #d2d2d7'} ></Box>
           </Box>
          </Box>

          <Box className='data-detail' mt='19px' display={"flex"} justifyContent='space-between'>
              <Text fontSize={'24px'} fontWeight='600' fontFamily={'SF Pro Display'} as='h1' pt='14px' className='data-product-data'>Manufacturer Information</Text>
           <Box  className='data-product'>
           <Text  className='data-part-number' >
             <b>Part Number</b>
             <br/>
             <Text>Mfr. Part Number: 77-92042</Text>
             <Text>UPC or EAN No.: 840304723669</Text>
             <b >Warranty</b>
             <br/>
             <Text>Note: Products sold through this 
             website that do not bear the Apple brand
              name are serviced and supported exclusively
               by their manufacturers in accordance with 
               terms and conditions packaged with the 
               products. Apple’s Limited Warranty does 
               not apply to products that are not Apple 
               branded, even if packaged or sold with 
               Apple products. Please contact the 
               manufacturer directly for technical 
               support and customer service.
              Warranty: Limited lifetime warranty</Text>
             </Text>
             <Box mt='34px' border={'1px solid #d2d2d7'} ></Box>
           </Box>
          </Box>

         
         
         </Box>
        </details>
       </Tooltip>
      </Box>

      <Box className='data-information'>
       <Tooltip hasArrow label='Compatibility' bg='whitesmoke' color='black'>
        <details>
          <summary> <Text fontSize='32px' fontWeight='600' letterSpacing='0.004em' fontFamily='SF Pro Icons'> Compatibility </Text> </summary>
         <Box className='data-details' pt='40px'>
          <Box  mt='19px' >
           <Box  textAlign='center'>
           <Text  fontSize='17px' textAlign={'center'} fontFamily={'SF Pro Text'} color='#1d1d1f'>
            Apple Products
            <Text>iphone 14</Text>
             </Text>
           </Box>
          </Box>

          <Box mt='34px' border={'1px solid #d2d2d7'} ></Box>

         

         
         
         </Box>
        </details>
       </Tooltip>
      </Box>

      <Box className='data-video'>
      <Box className='data-videos'>
          <video muted playsInline autoPlay loop src='https://www.apple.com/105/media/us/tv-home/2023/725d90d2-b7c8-4ac4-9df9-35a7ca008428/anim/hero/large_2x.mp4#t=3.755114' ></video>
      </Box>
   
      </Box>
      
      <Box className='data-like'>
        <Text as='h2'>You may also like</Text>
        </Box>
        <Box className='data-slider'>


        <Swiper
            slidesPerView={!mediumScreen ? 1 : 3}
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
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQE22?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1672297328790" />
                <Text className='data-slider-text' color={'#1d1d1f'}>Otter Lumen Series Case With MagSafe for iphone14</Text>
                <Text className='data-slider-price' >$49.95</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://media.giphy.com/media/7qMDcTKhOfC22K4Rf1/giphy-downsized-large.gif" />
                <Text className='data-slider-text'>OtterBox Core Series iPhone 14 Pro Clear Case with MagSafe</Text>
                <Text className='data-slider-price'>$49.95</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRW62?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1569617849402" />
                <Text className='data-slider-text'>OtterBox Figura Series Case with MagSafe for iPhone 13 Pro Max- Black</Text>
                <Text className='data-slider-price'>$39.00</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HNS32?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1590108489000" />
                <Text className='data-slider-text'>Decoded Leather Wallet Case for iPhone SE / 8 / 7</Text>
                <Text className='data-slider-price'>$69.95</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU63?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1661471392701" />
                <Text className='data-slider-text'>Belkin InvisiGlass Ultra Privacy Screen Protection for iPhone 11 / XR</Text>
                <Text>$49.00</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK023?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1623349306000" />
                <Text className='data-slider-text'>iPhone 12 | 12 Pro Silicone Case with MagSafe - Cantaloupe</Text>
                <Text className='data-slider-price'>$42.35</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUJP2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1543449124294" />
                <Text className='data-slider-text'>iPhone XS Max Silicone Case - Hibiscus</Text>
                <Text>$35.00</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://media.giphy.com/media/7qMDcTKhOfC22K4Rf1/giphy-downsized-large.gif" width={'90%'} />
                <Text className='data-slider-text'>iPhone XS Max Silicone Case - Hibiscus</Text>
                <Text className='data-slider-price'>$56.32</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Box  borderRadius={"10px"} className='data-slider-data'>
                <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPU63?wid=532&hei=582&fmt=png-alpha&.v=1661471392701" />
                <Text className='data-slider-text'>iPhone 14</Text>
                <Text>$49.20</Text>{" "}
              </Box>{" "}
            </SwiperSlide>
          </Swiper>


        </Box>

    </div>
  )
}

export default BottomData