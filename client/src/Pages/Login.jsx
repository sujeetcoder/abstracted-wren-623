import {
  Box,
  Button,
  Checkbox,
  Divider,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { useMedia } from "../MediaQuery/UseMedia";

const Login = () => {
  const {midBr} = useMedia()
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleClick = () => setShow(true);

  const loginFun = () => {
    console.log("yes")

  }

  return (
    <Box>
      {midBr && <Text fontSize={"4xl"} fontWeight="bold" ml="18%" mt="20px">
        Sign in for faster checkout.
      </Text>}
      <Box w={["80%","70%","50%","40%","23%"]} m={"auto"} textAlign="center" mt="60px" >
        <Text fontSize={"xl"} fontWeight="semibold">
          Sign in to Apple Store
        </Text>
        <Box mt="10px">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={"email"}
              placeholder="Apple ID"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputRightElement width="4.5rem">
            {!show &&  <Button
                disabled={email === ""}
                bgColor="transparent"
                onClick={handleClick}
                variant="link"
              >
                <Image
                  w={7}
                  h={7}
                  p={1}
                  border={"1px solid"}
                  borderRadius="50%"
                  bgColor={"none"}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAChCAMAAACYjy+EAAAAZlBMVEX///8AAAD8/PyEhISbm5u0tLTMzMwbGxv5+flQUFDm5ubv7+/29vZAQEAXFxfs7OzU1NQJCQnExMTf39++vr5paWk1NTWsrKxxcXFgYGCioqJ3d3crKytaWloRERFHR0ciIiKQkJBtT3XlAAAC5UlEQVR4nO3c2XKCQBCFYVpxX6LGHQR8/5eMRiMMszC5MOdUqv/7pL6q6DBAT5JE0zRN0zRN0zRN07S/bJgO0YRwGxHZr9CKUKXcG6AZ/mb5t1D6aIi3VfUQyuQTTfE0HD2Fst+iLe5qoch1jta4agrlNEVzHBlCWRAujaZQJB2jRe3aQslmaFIrSygF2QXGFsr63EOrmjmEIjumZccplP0G7apzC2V5QMNeeYQixw807ZlXKCXJd9ovlBHHXzogvG0aGVbvoJBi0xgWMtwedAmlj95KdArhm8ZuoSyxf+kI4W3TiNxKRAnlArzAxAllj7s9iBTK8swuxG0lVtFCKcMXmPEqfUfnfhEtlFFo2Zln8b/ojQUuMAO07dnOe4Ep0bRXvjuYX3xa3tzas+ygXc0uzntVtMqodF1g0Cgz17KDNrWznz+hRVaX9rKDBtnlW3ahiPmIDK1xls3ZhVJN2YXNDyOa4i2lF8pxxi6URY9dKPmQXSj5hl0oxYBdKPknu/C26KAFXS3phQW9cEcv3LALT3Ny4Q3ILfzePKARoVLynUN+YN99rch3sJM5+R67X9/toSnuXjcppMLKeNiJ1jiqzCkDNMfu2Hr6hfZYWW8F0KBWjofZaJJZ7nghgDYZOce30ahmF4cvSdZoVt3V/cK+6v7JP8r39vGEhj3zv6snefO490+2zC5o3L0sNNs5vR777yn+A9Q1CT3uvaXoD9AaNuwXKQSesokTdoxh4IUZcoIuRngF+qKE4LM1ncIFeqi4SziBH6vpEGZoX5fwQHDOIiQsKM6fBYQM49hJSIicLW3mFV7Rk9g/eYS++S5AbmFF8R155BSW8GW6kUu4I/mOPHIIsVsZK0tYcJztqbOE6K2MVUtoDcXhM4XtR6sMGULoOQ9fTSHRMt2oFgKPeAR7CU9Uy3SjHyHd4e9X2+d3BO3wN7xP9Bc8ey272YT9n7MkHynRiW9N0zRN0zRN0zRN+099AVsfNi0J2ru8AAAAAElFTkSuQmCC"
                />
              </Button>}
            </InputRightElement>
          </InputGroup>

          {show && (
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={"password"}
                placeholder="Enter password"
                onChange={(e) => setPass(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                {/* <ArrowForwardIcon border={"1px solid"} borderRadius="50%" w={8} h={8}  onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </ArrowForwardIcon> */}
                <Button
                  disabled={pass === ""}
                  bgColor="transparent"
                  variant="link"
                  onClick={loginFun}
                >
                  <Image
                    w={7}
                    h={7}
                    p={1}
                    border={"1px solid"}
                    borderRadius="50%"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAChCAMAAACYjy+EAAAAZlBMVEX///8AAAD8/PyEhISbm5u0tLTMzMwbGxv5+flQUFDm5ubv7+/29vZAQEAXFxfs7OzU1NQJCQnExMTf39++vr5paWk1NTWsrKxxcXFgYGCioqJ3d3crKytaWloRERFHR0ciIiKQkJBtT3XlAAAC5UlEQVR4nO3c2XKCQBCFYVpxX6LGHQR8/5eMRiMMszC5MOdUqv/7pL6q6DBAT5JE0zRN0zRN0zRN07S/bJgO0YRwGxHZr9CKUKXcG6AZ/mb5t1D6aIi3VfUQyuQTTfE0HD2Fst+iLe5qoch1jta4agrlNEVzHBlCWRAujaZQJB2jRe3aQslmaFIrSygF2QXGFsr63EOrmjmEIjumZccplP0G7apzC2V5QMNeeYQixw807ZlXKCXJd9ovlBHHXzogvG0aGVbvoJBi0xgWMtwedAmlj95KdArhm8ZuoSyxf+kI4W3TiNxKRAnlArzAxAllj7s9iBTK8swuxG0lVtFCKcMXmPEqfUfnfhEtlFFo2Zln8b/ojQUuMAO07dnOe4Ep0bRXvjuYX3xa3tzas+ygXc0uzntVtMqodF1g0Cgz17KDNrWznz+hRVaX9rKDBtnlW3ahiPmIDK1xls3ZhVJN2YXNDyOa4i2lF8pxxi6URY9dKPmQXSj5hl0oxYBdKPknu/C26KAFXS3phQW9cEcv3LALT3Ny4Q3ILfzePKARoVLynUN+YN99rch3sJM5+R67X9/toSnuXjcppMLKeNiJ1jiqzCkDNMfu2Hr6hfZYWW8F0KBWjofZaJJZ7nghgDYZOce30ahmF4cvSdZoVt3V/cK+6v7JP8r39vGEhj3zv6snefO490+2zC5o3L0sNNs5vR777yn+A9Q1CT3uvaXoD9AaNuwXKQSesokTdoxh4IUZcoIuRngF+qKE4LM1ncIFeqi4SziBH6vpEGZoX5fwQHDOIiQsKM6fBYQM49hJSIicLW3mFV7Rk9g/eYS++S5AbmFF8R155BSW8GW6kUu4I/mOPHIIsVsZK0tYcJztqbOE6K2MVUtoDcXhM4XtR6sMGULoOQ9fTSHRMt2oFgKPeAR7CU9Uy3SjHyHd4e9X2+d3BO3wN7xP9Bc8ey272YT9n7MkHynRiW9N0zRN0zRN0zRN+099AVsfNi0J2ru8AAAAAElFTkSuQmCC"
                  />
                </Button>
              </InputRightElement>
            </InputGroup>
          )}
        </Box>
        <Box mt={15} mb={5}>
          <Checkbox defaultChecked>Remember me</Checkbox>
        </Box>
        <Box w="80%" /* borderBottom={"1px solid"} */ m="auto">
          <Divider /* borderBottom={"1px solid"} */ />
        </Box>
        <br />
        <br />
        <Text
        _hover={{ textDecoration: "underline" }}
        color="#4395d7"
        >Forgotten your Apple ID or password?</Text>
        <Box>
          Do not have an Apple ID?<Link to={"/signup"}><Text
          as="span"
          _hover={{ textDecoration: "underline" }}
          color="#4395d7"
        >
           Create yours now.
        </Text> </Link> 
           </Box>
      </Box>
      <Box  mt={260} borderBottom={"1px solid"}></Box>
      <Text fontSize={"xl"} ml="18%" mt={18} mb={18} >Need some help? Chat now or call 000800 040 1966.</Text>
    </Box>
  );
};

export default Login;
