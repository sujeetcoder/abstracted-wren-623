import { Select } from "@chakra-ui/react"
import { Box, Heading, Input type="text" } from "@chakra-ui/react"

export const CustomerForm=()=>{


    return(<div>

<Box>
    <Heading>Where should we send your order</Heading>
<form>
<Input type="text" placeholder="First name" />
<Input type="text" placeholder="Last name" />
<Input type="text" placeholder="Address line 1" />
<Input type="text" placeholder="Address line 2" />
<Input type="text" placeholder="Landmak"/>
<Input type="number" placeholder="pincode"/>
<Select><option>India</option></Select>

</form>

</Box>

    </div>)
}