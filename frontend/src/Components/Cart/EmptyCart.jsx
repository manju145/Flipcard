import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const Component = styled(Box)`
height: 65vh;
width: 80%;
background: #fff;
margin: 80px 140px;
`;

const Container = styled(Box)`
text-align: center;
padding-top: 70px;
`

const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
    <Component>
        <Container>
        <img src={imgurl} alt='empty' style={{width:"15%"}} />
        <Typography>your cart is empty!</Typography>
        <Typography>add items to it now</Typography>
        </Container>
    </Component>
  )
}

export default EmptyCart;