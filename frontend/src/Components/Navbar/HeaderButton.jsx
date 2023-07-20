import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import {ShoppingCart} from '@mui/icons-material';

const Wrapper= styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > button , & > p, & > div {
  margin-right: 40px;
  font-size: 16px;
  align-items:center
}
`

const Contaner= styled(Box)`
display: flex;
`
const LoginButton= styled(Button)`
color: #2874f0;
background: #fff;
text-transform: none;
padding: 5px 40px;
border-radius: 2px;
box-shadow: none;
font-weight: 600;
height: 32px;

`

const HeaderButton = () => {
  return (
    <Wrapper>
        <LoginButton variant='contained'>Login</LoginButton>

        <Typography style={{marginTop:3, width:135}} >Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>

        <Contaner>
          <ShoppingCart/>
        <Typography>Card</Typography>
        </Contaner>
    </Wrapper>
  )
}

export default HeaderButton