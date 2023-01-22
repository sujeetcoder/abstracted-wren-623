import React, { useContext, useEffect, useState } from 'react';
import "../../App.css";
import "../../Styles/SingleProduct.css";
import {Box,Text,Image,Select,useToast, Container,Spinner, UnorderedList, ListItem, Button,Input, Tooltip, background} from "@chakra-ui/react";
import Delivery from './Delivery.Svg';
import Pickup from './Pickup.Svg';
import BottomData from './BottomData';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import {addProductToCart,getProducts} from "../../Redux/CartData/Cart.Action"


// let token=localStorage.getItem("Token")
// const  addToCartData=async(data)=>{
//    const res= await axios.post(`http://localhost:8080/carts`,data,{
//     headers:{
//       "Content-Type":"application/json",
//       "Authorization":token
//     }
//    })
//    console.log(res.data)
// }


const SingleProduct = () => {
// const [userData,setuserData]=useState([])
const [isLoading,setIsLoading]=useState(true)
const [isBtnLoading,setIsBtnLoading]=useState(false)
const [data,setData]=useState(null)
const {id}=useParams()
const [DefaultImg,setImage]=useState()
console.log(DefaultImg)
console.log(id)
const getData=()=>{
  axios.get(`https://apple0.cyclic.app/products/${id}`,{withCredentials:true})
  .then((res) =>setData(res.data))
      .catch((error) => console.log(error));
}
useEffect(()=>{
  getData()
 
},[])

let token=localStorage.getItem("Token")
const  addToCartData=async(_id)=>{
   const res= await axios.post(`https://apple0.cyclic.app/carts`,{product:_id},{withCredentials:true})
   console.log(res.data)
}


const handleCart=(_id)=>{
  setIsBtnLoading(true)
  setTimeout(()=>{
    alert("added to your cart")
    addToCartData(_id)
    setIsBtnLoading(false)
  })
  // alert("data is added in your cart")
}

// const addToCart = (name, price,qty, image) => {
//   setuserData([ ...userData, { name: name, price: price,qty:qty, image: image }]);
//   console.log(userData);
// }

setTimeout(()=>{
  setIsLoading(false)
},1000)

// add to cart function

// const addToCart=()=>{
// setIsBtnLoading(true)
// setTimeout(()=>{
//   alert("added to cart")
//   setIsBtnLoading(false)
  
//  console.log(data)
// },1500)
// }

// let token=localStorage.getItem("Token")
// const  addToCartData=async(data)=>{
//    const res= await axios.post(`http://localhost:8080/carts`,data,{
//     headers:{
//       "Content-Type":"application/json",
//       "Authorization":token
//     }
//    })
//    console.log(res.data)
// }

// const addToCart=({name,price,qty,image})=>{
//   const payload={name,price,qty,image}
//   console.log(payload)
//   fetch(`http://localhost:8080/carts`,{
//       method:"POST",
//       body:JSON.stringify(payload),
//       headers:{
//           "Content-type":"application/json",
//           "Authorization":localStorage.getItem("token")
//       }
//   }).then((res)=>res.json())
//   .then((res)=>{console.log(res)})
//   .catch((err)=>{console.log(err)})
  
//   }


const handleClick=(index)=>{
const slider =data.image[index]
console.log(slider)
setImage(slider)
}

// hi

// const token=useSelector((el)=>el.Auth.token)
// const dispatch=useDispatch()
//   const toast=useToast()
// const url=`https://rose-glamorous-katydid.cyclic.app/products/${_id}`

// let getData = async () => {
//   let res = await fetch(url);
//   let res_data = await res.json();
//   setData(res_data);
//    console.log(res_data)
// };

// const handleADD=(data,token)=>{
//   dispatch(postData(token, data))
//   toast({
//     title: 'Item added to cart',
//     status: 'success',
//     duration: 5000,
//     isClosable: true,
//   })
//   dispatch(getCartData(token));
// }

// useEffect(() => {
//   getData();
// }, [id]);
// console.log("all",data.image)


// const photos=[
//   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1672297329482',
//   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1672297307202',
//   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2_AV2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1672297395245',
//   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQDZ2_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1672297394743'
// ]
// const [photo,setPhoto]=useState(photos[0])

  return (
    <div>
    {data && <div className='data'>

     
      <Box className='data-column' key={data.id}>
        <span className='validator'>Only at Apple </span>
        <Text as='h1' className='data-title'>{data.name} </Text>
        <Box className='data-price'>${data.price} </Box>
        <Box className='data-select'>
          <Box className='data-dropdown'>
              <Select className='data-dropdown-select' placeholder={data.category}>
                 {/* <option color='#1d1d1f' value='iphone14'>iPhone 14</option> */}
                  <option color='#1d1d1f' value='iphone14plus'>{data.category}</option>
                 <option color='#1d1d1f' value='iphone14pro'>{data.category}</option>
                 {/* <option color='#1d1d1f' value='iphone14promax'>{data.category}</option> */}
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
            <Tooltip hasArrow label='Add to Bag' bg='whitesmoke' color='black'>
            <Button   onClick={()=>handleCart(data._id)}  mt='20px' background={''} className='button data-add-button'  >
        {!isBtnLoading  && "ADD TO BAG" }
            {isBtnLoading && (
              <Spinner
                thickness="2px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
      
            
            </Button></Tooltip>
          </Box>
          <Box className='data-still' borderBottom={"1px solid #d2d2d7"}>
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
          <Box className='data-still' mt='20px' borderBottom={"1px solid #d2d2d7"}>
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
                   <Box textAlign={'center'} className='data-image-show-big' cursor='pointer' width='100%' overflow={'hidden'}>
                       <Image src={DefaultImg} alt={data.name} />
                     </Box>
                  </Box>
            </Box> 

               <Box className='data-gallery' >
                  <UnorderedList m='0' display={'inline-flex'} listStyleType='none'
                 position='relative' flexWrap={'wrap'} maxWidth='515px' className='data-gallery-ul'>
                 <ListItem m='0' p='0'>
                <Box display={'flex'} pl='10px' objectFit={'cover'} cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                {  data && data.image.map((data,i)=>(
                    <Image key={data.id} alt={data.name} height={'38px'} width='38px' src={data}
                    onClick={()=>handleClick(i)}  />
                    
                  ))}
                </Box>
                 </ListItem>
                    {/* <ListItem m='0' p='0'>
                   
                      <Box onClick={()=>setPhoto(photos[0])} cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image height={'38px'} width='38px'
                         src={data.image[0]} p='4px' alt='image1' />
                      </Box>
                    </ListItem>
                    <ListItem m='0' p='0'>
                      <Box onClick={()=>setPhoto(photos[1])} cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image height={'38px'} width='38px'
                         src={data.image[1]} p='4px' alt='image2' />
                      </Box>
                    </ListItem>
                    <ListItem m='0' p='0'>
                      <Box onClick={()=>setPhoto(photos[2])} cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image height={'38px'} width='38px'
                         src={data.image[2]} p='4px' alt='image3' />
                      </Box>
                    </ListItem>
                    <ListItem m='0' p='0'>
                      <Box onClick={()=>setPhoto(photos[3])} cursor={'pointer'} pt='16px' mr='16px' boxSizing='border-box' borderBottom={'2px solid hsal(0,0%,100%,0)'} background='#fff'>
                        <Image height={'38px'} width='38px'
                         src={data.image[3]} p='4px' alt='image4' />
                      </Box>
                    </ListItem>    */}
            
                 </UnorderedList>

          

               
              </Box>
          </Box>
        
       </Box>


    

    
     </div> }
    

      {/* <Box> */}
        <BottomData/>
      {/* </Box> */}
      
    



    

    </div>
  )
}

export default SingleProduct