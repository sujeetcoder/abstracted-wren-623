import {
    Box,
    chakra,
    Divider,
    Grid,
    Image,
    SimpleGrid,
    Text,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
  
  
export default function BasicStatistics() {
    const [data,setData] = useState([]);

    const getData = () => {
      axios
      .get("https://apple0.cyclic.app/products")
      .then(data => setData(data.data))
      .catch(error => console.log(error));
      };
    
    useEffect(() => {
      getData()
    }, []);
  
    console.log(data)

    return (
      <Box maxW="full"  mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        
        <Divider/>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={{ base: 5, lg: 8 }}>
        {data.map((product) => (
            <Link key={product._id} to={`products/${product._id}`} style={{ textDecoration: "none" }}>
            <Grid item xs={2} sm={4} md={4} key={product.id}>
            <Box
                textAlign="center"
                style={{
                padding: "25px 1px",
                }}
            >
                <Image h={{md:'180px'}} w={{md:'180px'}} src={product.image[0]} alt="Products" />
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
                {product.price}
                </Text>
                
            </Box>
            </Grid>
            </Link>
            ))}
        </SimpleGrid>
      </Box>
    );
  }


  