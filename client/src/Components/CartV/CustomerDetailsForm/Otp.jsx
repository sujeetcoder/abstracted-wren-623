import { Box, Button, HStack, PinInput, PinInputField } from '@chakra-ui/react'

export const Otp=()=>{

const handleSubmit=()=>{
  console.log("done")
}


    return (
<HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
  <Button onClick={handleSubmit}>Verify</Button>
</HStack>
 )
}