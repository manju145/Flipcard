import { Button, Box, styled} from '@mui/material';
import React, { useState } from 'react'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../Redux/action/cartActions';




const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px',
    width: '95%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}))


const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyProduct = () => {
          navigate('/buy');
    }


    return (
        <LeftContainer>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0'
            }}>
                <Image src={product.detailUrl} alt='product' /><br />
            </Box>
            <StyledButton onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }} variant="contained"><Cart />Add to Cart</StyledButton>
          
     
            <StyledButton 
            onClick={() => buyProduct()}
             style={{ background: '#fb641b' }}
             variant="contained"><Flash /> Buy Now</StyledButton>
        
           
        </LeftContainer>
    )
}

export default ActionItem;