import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const Component = styled(Box)`
height: 70vh;
width: 80%;
background: #fff;
margin: 80px 140px;
`;

const Container = styled(Box)`
text-align: center;
padding-top: 70px;
`

const More = () => {
    const imgurl ="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png";
  return (
    <Component>
    <Container>
    <img src={imgurl} alt='empty' style={{width:"30%"}} />
    <Typography>Unfortunately the page you are looking for has been moved or deleted</Typography>
    </Container>
</Component>
  )
}

export default More;