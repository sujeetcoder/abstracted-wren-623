import { Button, Select } from "@chakra-ui/react"
import { Box, Heading, Input  } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router"
import { Otp } from "./Otp"

import "./Payment.css"
export const PaymentForm=()=>{
const [pin,setPin]=useState(false)
const navigate = useNavigate('')
  const [number,setNumber] = useState(false)
  const [text,setText] = useState('')
  const [otp,setOtp] = useState('')
  const [otpalert,setAlert] = useState('')
  const [errorv,setErrorv]=useState(false)
  const isError = text.length<9 || text.length==0
 
  
  var random
  const change=()=>{
    random = 9999-Math.ceil(Math.random()*1000)
    random=String(random)
    setAlert(random)
    console.log('ins',random)
    alert(`Your OTP is'${random}`)
    !isError&&setNumber(!number)
  }
  console.log('state',otpalert)
  const check=()=>{
   console.log(typeof(otpalert))
    if(otp!==otpalert){
      setErrorv(true)

     console.log("hello")
    }
    else{
      navigate('/')
    }
  }




const handleSubmit=()=>{
change()
    setPin(true)
}


return(<Box boxSize={"60%"} margin={"auto"}>

<Box className="row">
  <Box className="col-75">
    <Box className="container">
      <form action="/action_page.php">

        <Box className="row">
          <Box className="col-50">
            <h3>Billing Address</h3>
            <label > Full Name</label>
            <Input type="text" id="fname" name="firstname" placeholder="Enter Name" />
            <label >Email</label>
            <Input type="text" id="email" name="email" placeholder="Enter email" />
            <label > Address</label>
            <Input type="text" id="adr" name="address" placeholder="Enter Address" />
            <label > City</label>
            <Input type="text" id="city" name="city" placeholder="City" />

            <Box className="row">
              <Box className="col-50">
                <label >State</label>
                <Input type="text" id="state" name="state" placeholder="Enter State" />
              </Box>
              <Box className="col-50">
                <label >Zip</label>
                <Input type="text" id="zip" name="zip" placeholder="Enter PinCode" />
              </Box>
            </Box>
          </Box>

          <Box className="col-50">
            <h3>Payment</h3>
            <label >Accepted Cards</label>
            <Box className="icon-container">
            </Box>
            <label >Name on Card</label>
            <Input type="text" id="cname" name="cardname" placeholder="Enter card holder name" />
            <label >Credit card number</label>
            <Input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
            <label >Exp Month</label>
            <Input type="text" id="expmonth" name="expmonth" placeholder="September" />

            <Box className="row">
              <Box className="col-50">
                <label >Exp Year</label>
                <Input type="text" id="expyear" name="expyear" placeholder="2018" />
              </Box>
              <Box className="col-50">
                <label >CVV</label>
                <Input type="text" id="cvv" name="cvv" placeholder="352" />
              </Box>
            </Box>
          </Box>

        </Box>
        
        
        <Button backgroundColor={"green"} margin="5px" justifyContent={"center"} onClick={handleSubmit}>Submit</Button>
        {pin?<Box><Otp  /></Box>:<Box></Box>}
      </form>
    </Box>
  </Box>

   
</Box>


    </Box>)
}