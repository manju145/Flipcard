import React, { useEffect } from 'react';
import Banner from './Banner';
import NavbarTwo from "./NavbarTwo";
import { Box, styled } from '@mui/material';
import {getProducts} from "../../Redux/action/productAction"
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';




const Components= styled(Box)`
padding :10px;
background: #F2F2F2;
`

const Home = () => {


  const {pruducts} = useSelector(state => state.getProducts);
 

// console.log(pruducts);


const dispatch = useDispatch();



useEffect (()=>{
  dispatch(getProducts());

  },[dispatch]);


  return (
    <>
       <NavbarTwo></NavbarTwo>
       <Components>
       <Banner></Banner>
       <MidSlide products={pruducts} title="Deal of the Day" timer={true}></MidSlide>
       <MidSection/>
       <Slide products={pruducts}title="Discounts for You"timer={false} ></Slide>
       <Slide products={pruducts}title="Suggesting Items"timer={false}  ></Slide>
       <Slide products={pruducts}title="Top Selection"timer={false} ></Slide>
       <Slide products={pruducts}title="Recommended Items"timer={false} ></Slide>
       <Slide products={pruducts}title="Treding Offers"timer={false} ></Slide>
       <Slide products={pruducts}title="Season's top picks"timer={false} ></Slide>
       <Slide products={pruducts}title="Top Deals on Accessories"timer={false} ></Slide>
       </Components>
    </>

  )
}

export default Home;