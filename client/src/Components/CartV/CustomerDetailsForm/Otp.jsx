import { Box, Button, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import axios from 'axios'
import { dataUrl } from '../../../Utils/AllUrls'

export const Otp=()=>{

const handleSubmit=()=>{
  console.log("done")
  alert("order placed sucessfull")
  axios.patch(`${dataUrl}/carts/payment/done`,{withCredentials:true}).then((res)=>{
    console.log("success",res.data)
    /* window.reload() */
}).catch((err)=>console.log(err))
}


    return (
<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
  <a href="/"><Button onClick={handleSubmit}>Verify</Button></a>
</HStack>
 )
}