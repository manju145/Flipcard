import { Badge, Box, Button, Typography, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import {ShoppingCart} from '@mui/icons-material';
import Login from '../Login/Login';
import { DataContext } from '../../contex/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper= styled(Box)(({theme})=>({
  display: 'flex',
  margin: '0 3% 0 auto',
  '& > *' :{
    marginRight: '40px !important',
    fontSize: 16,
    alignItems:'center',
  },
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))



const Contaner= styled(Link)(({theme})=>({
  display: 'flex',
  textDecoration: 'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));
const MoreButton= styled(Link)(({theme})=>({
  display: 'flex',
  textDecoration: 'none',
  color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));


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
  const [login,setLogin]= useState(false);

const {contexted,setContexted} = useContext(DataContext);

const {cartItems} = useSelector(state => state.cart);

  const openLogin= ()=>{
    setLogin(true);
  }



  return (
    <Wrapper>
      {
        contexted ?
         <Profile contexted={contexted} setContexted={setContexted} />
         :
         <LoginButton variant='contained'
        onClick={()=>openLogin()}
        >Login</LoginButton>
      }
        

        <Typography style={{marginTop:3, width:135}} >Become a Seller</Typography>
        <MoreButton to='/more'>
        <Typography style={{marginTop:3}}>More</Typography>

        </MoreButton>
      
        <Contaner to='/cart'>
          <Badge badgeContent={cartItems?.length} color='secondary' >
          <ShoppingCart/>
          </Badge>
        <Typography style={{marginLeft:10}} >Card</Typography>
        </Contaner>
        <Login open={login} setLogin={setLogin}></Login>
    </Wrapper>
  )
}

export default HeaderButton