import React, { useContext, useEffect, useState } from 'react';
import "../../App.css";
import "../../Styles/SingleProduct.css";
import {Box,Text,Image,Select, Container, UnorderedList, ListItem, Button,Input, Tooltip, background} from "@chakra-ui/react";
import Delivery from './Delivery.Svg';
import Pickup from './Pickup.Svg';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useMedia } from "../../MediaQuery/UseMedia";
const SingleProduct = () => {
  const { mediumScreen, smallScreen } = useMedia();
// const data={

//             id:1,
//             name:"iPhone 14 Pro Clear Case with MagSafe",
//             category:"iphone 14 pro case",
//             image:["https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU63?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1661471392701",
//                     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU63_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1661471392647",
//                     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU63_AV4?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1661471383456",
//                     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPU63_AV5_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1661608645708"
//                     ],
//             price:49.00   
// }
// console.log(data.iphone

  return (
    <div>
    <Box className='data container-data data-row'> 
      <Box className='data-column data-large data-small'>
        <span className='validator'>Only at Apple </span>
        <Text as='h1' className='data-title'>OtterBox Lumen Series Case with MagSafe for iPhone 14 - Red CNY Limited Edition </Text>
        <Box className='data-price'>$49.95 </Box>
        <Box className='data-select'>
          <Box className='data-dropdown'>
              <Select className='data-dropdown-select' placeholder='iPhone 14'>
                 {/* <option color='#1d1d1f' value='iphone14'>iPhone 14</option> */}
                 <option color='#1d1d1f' value='iphone14plus'>iPhone 14 Plus</option>
                 <option color='#1d1d1f' value='iphone14pro'>iPhone 14 Pro</option>
                 <option color='#1d1d1f' value='iphone14promax'>iPhone 14 Pro Max</option>
                </Select>
                <span color='#6e6e73' className='data-size-text'>
                 Size
                </span>
            </Box>
           </Box>
           <Box className='row' >
              <Container  className='data-delivery'  >
           <Container width={"14%"}> <Delivery /></Container>   
          <Container className='data-delivery-data'>
           <Text fontWeight={'600'} as='span'>Delivery:</Text>
           <UnorderedList className='data-ul'>
            <ListItem>In Stock</ListItem>
            <ListItem>Free Shipping</ListItem>
            <ListItem color='#06c' fontWeight={"lighter"} cursor="pointer">Get delivery dates</ListItem>
           </UnorderedList>
          </Container>
              </Container>

              <Container  className='data-delivery'  >
           <Container width={"14%"}> <Pickup /> </Container>   
          <Container className='data-delivery-data'>
           <Text fontWeight={'600'} as='span'>Pickup:</Text>
           <UnorderedList className='data-ul' >
            <ListItem color='#06c' fontWeight={"lighter"} cursor="pointer">Get delivery dates</ListItem>
           </UnorderedList>
          </Container>
              </Container>
           </Box>
          <Box>
          {/* <Input type='submit'mt='20px' background={''} className='button data-add-button' placeholder='Add to Bag' /> */}
           <Tooltip hasArrow label='Add to Bag' bg='whitesmoke' color='black'><Button mt='20px' background={''} className='button data-add-button'  >Add to Bag</Button></Tooltip>
          </Box>
          <Box borderBottom={"1px solid #d2d2d7"}>
            <Container display={'flex'} pt='31px'>
                <Box>
                    <Text as='h2' fontSize='14px' >Still deciding? </Text>
                    <Text className='data-deciding'>
                        Add this item to a list and easily come back to it later.
                    </Text>
                </Box>
                <Box className='data-save' pt='8px' cursor={'pointer'}>
                <svg width="35" height="35" 
                class="as-svgicon as-svgicon-bookmark
                 as-svgicon-base as-svgicon-bookmarkbase"
                  role="img" aria-hidden="true">
                  <path fill="none" d="M0 0h35v35H0z">
                  </path><path d="M21.952 6.433a2.157 
                  2.157 0 011.567.481A2.228 2.228 0
                   0124 8.516v19.866a.709.709 0 01-.018.178.7.7 
                   0 01-.058-.013 8.985 8.985 0 01-.757-.674l-4.866-4.901a1.111 1.111 0 00-1.602 0l-4.857 4.891a7.25 7.25 0 01-.754.676.145.145 0
                 01-.053.028h-.015a.681.681 0 01-.02-.185V8.516a2.228 2.228 0 01.48-1.602 2.158 2.158 0 011.568-.48h8.904m0-1h-8.904a3.077 3.077 0 00-2.278.776A3.144 3.144 0 0010 8.516v19.866a1.276 1.276 0 00.276.868.956.956 0 00.76.317 1.073 1.073 0 00.632-.213 8.377 8.377 0 00.874-.776l4.866-4.9a.115.115 0 01.184 0l4.866 4.9a10.454 10.454 0 00.868.77 1.048 1.048 0 00.639.219.956.956 0 00.76-.317 1.276 1.276 0 00.275-.868V8.516a3.144 3.144 0 00-.77-2.306 3.077 3.077 0 00-2.278-.776z">
                </path></svg>
                </Box>
            </Container>
          </Box>
          <Box mt='20px' borderBottom={"1px solid #d2d2d7"}>
            <Container display={'flex'}>
                <Box pr='10px'>
                <svg viewBox="0 0 23 25"
                 class="as-svgicon as-svgicon-chat as-svgicon-reduced as-svgicon-chatreduced" 
                 role="img" aria-hidden="true"
                  width="25px" height="25px">
                  <path fill="none" d="M0 0h23v25H0z">
                  </path>
                  <path d="M22.71 15.441c0-2.849-2.846-5.154-6.417-5.154h-.076a8.059
                   8.059 0 00-1.035.078c-2.72.377-4.823
                    2.112-5.228 4.3a4.218 4.218 0
                     00-.078.768c0 .089.011.175.016.262.169 
                     2.84 3.035 4.885 6.538 4.885.179
                      0 .36-.005.541-.016A8.149 8.149 0 
                      0020.278 22c.517 0 .667-.413.374-.78a10.986
                       10.986 0 01-.96-1.4 4.937 4.937
                        0 003.018-4.379zm-3.446 3.471l-.942.446.484.923c.046.088.1.178.151.268a11.49 11.49 0 01-1.431-.809l-.279-.185-.334.02c-.162.01-.323.014-.482.014-3.094 0-5.52-1.8-5.551-4.1v-.044a3.237 3.237 0 01.183-1.053 4.923 4.923 0 013.729-2.935 6.889 6.889 0 011.169-.153c.112-.005.222-.013.336-.013 2.987 0 5.417 1.864 5.417 4.154a3.957 3.957 0 01-2.45 3.467z"></path><path d="M8.915 14.819a9.88 9.88 0 01-.794.033q-.305 0-.616-.018l-.334-.02-.279.186a13.767 13.767 0 01-2.578 1.356 9.545 9.545 0 00.626-1l.484-.922-.941-.446A5.18 5.18 0 011.29 9.43c0-2.994 3.141-5.43 7-5.43 3.826 0 6.941 2.393 7 5.351a8.9 8.9 0 011-.063C16.19 5.8 12.684 3 8.292 3c-4.453 0-8 2.875-8 6.43a6.159 6.159 0 003.764 5.457 13.707 13.707 0 01-1.2 1.752c-.366.458-.179.973.466.973a10.16 10.16 0 004.123-1.781q.34.02.675.02c.263 0 .522-.011.779-.029-.009-.127-.023-.253-.023-.381a5.154 5.154 
                0 01.039-.622z">
                </path></svg>
                </Box>
                <Box>
                    <Text fontSize={'14px'} display={'flex'}>Need some help? <Text pt='1px' pl='2px' fontSize={'12px'} color='#06c'>Contact us.</Text></Text>
                </Box>
            </Container>
          </Box>

       </Box>
       
       <Box className='data-images'>
          <Box className='data-image'>
             
          <Box overflow={'hidden'} position='relative' minHeight={'100px'}>
                   <Box transform='translateX(0px)' left='0px' transition='none 0s ease 0s' whiteSpace={'nowrap'} display='flex' position={'relative'}>
                      <Box textAlign={'center'} cursor='pointer' width='100%' overflow={'hidden'}>
                        <Image src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1672297329482' alt='iphone images' />
                      </Box>
                   </Box>
              </Box>

              <Box className='data-gallery'>
                  <UnorderedList m='0' display={'inline-flex'} listStyleType='none'
                 position='relative' flexWrap={'wrap'} maxWidth='515px'>
                    <ListItem m='0' p='0'>
                      <Box cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image 
                         src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2?wid=38&hei=38&fmt=jpeg&qlt=95&.v=1672297329482' p='4px' alt='image1' />
                      </Box>
                    </ListItem>
                    <ListItem m='0' p='0'>
                      <Box cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image 
                         src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2_AV1?wid=38&hei=38&fmt=jpeg&qlt=95&.v=1672297307202' p='4px' alt='image2' />
                      </Box>
                    </ListItem>
                    <ListItem m='0' p='0'>
                      <Box cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image 
                         src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2_AV2?wid=38&hei=38&fmt=jpeg&qlt=95&.v=1672297395245' p='4px' alt='image3' />
                      </Box>
                    </ListItem>
                    <ListItem m='0' p='0'>
                      <Box cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image
                         src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2_AV3?wid=38&hei=38&fmt=jpeg&qlt=95&.v=1672297394743' p='4px' alt='image4' />
                      </Box>
                    </ListItem> 
                    {/* <ListItem transition={'none 0s ease 0s'} transform='translate(0px,68px)' width={'46px'} position='absolute' borderBottom={'2px solid #d2d2d7'}></ListItem> */}
                 </UnorderedList>


                 {/* <UnorderedList m='0' display={'inline-flex'} listStyleType='none'
                 position='relative' flexWrap={'wrap'} maxWidth='515px'>
                 {data?.map((el)=>(
                  <ListItem m='0' p='0' key={el.id}>
                      <Box cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image src={el.image[0]} p='4px' alt='image4' />
                      </Box>
                    </ListItem>
                 ))}
                 </UnorderedList> */}
                
              </Box>
          </Box>
        
       </Box>


      </Box>

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
      {/* </Box> */}
      
    </div>
  )
}

export default SingleProduct