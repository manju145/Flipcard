import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Header = styled(Box)`
padding: 15px 24px;
background: #fff;
border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
color: #878787;
`;

const Container = styled(Box)`
padding: 15px 24px;
background: #fff;
& > p{
    margin-bottom:20px;
    font-size:14px;
}
& > h6{
    margin-bottom:20px;
}`;

const Price = styled(Box)`
float: right;
`;

const Discount = styled(Typography)`
color: green;
font-weight:500;
`;


const TotalView = ({ cartItems }) => {
   
   const [productprice, setProductprice] = useState(0);
   const [productdiscount, setProductdiscount] = useState(0);
   

useEffect(()=>{
   totalAmount() ;
},[cartItems])

   const totalAmount =()=>{
    let price = 0, discount=0;
    cartItems.map(item =>{
        price += item.price.mrp * item.quantity;
        discount += (item.price.mrp - item.price.cost)* item.quantity;
    });
    setProductprice(price);
    setProductdiscount(discount);
   }

console.log(cartItems);


    return (
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems?.length}item)
                    <Price component='span'> ₹{productprice}</Price>
                </Typography>

                <Typography>Discount
                    <Price component='span'>-₹{productdiscount}</Price>
                </Typography>

                <Typography>Delivery Charges
                    <Price component='span'>₹40</Price>
                </Typography>

                <Typography variant='h6'>Total Amount
                    <Price component='span'> ₹{productprice-productdiscount+40}</Price>
                </Typography>

                <Discount>You will save ₹{productdiscount-40} on this order</Discount>
            </Container>
        </Box>
    )
}

export default TotalView;