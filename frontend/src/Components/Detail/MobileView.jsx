import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled, Box,Grid } from '@mui/material';
import { getmobileProducts } from '../../Redux/action/mobileAction';


const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left:25px;
    & > p {
        margin-top: 10px;
    }
`;


const MobileView = () => {
   
        // const { id } = useParams();

    const {  mobiles } = useSelector(state => state.getmobileProducts);

console.log(mobiles);

    const dispatch = useDispatch();
    
    useEffect(() => {
        // if(product && id !== product.id)   
            dispatch(getmobileProducts());
    }, [dispatch]);
  return (
    <div>MobileView</div>
  )
}

export default MobileView