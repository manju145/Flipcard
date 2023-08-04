import {  Button,ButtonGroup, styled } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import toastMessage from '../../utils/toastMessage';
import { updateQty } from '../../Redux/action/cartActions';


const Component = styled(ButtonGroup)`
margin-top:30px;
`

const StyledButton = styled(Button)`
border-radius:50%;
`

const GroupedButton = ({item}) => {

    const [counter, setCounter] = useState(item.quantity);

    const dispatch = useDispatch();
  
    const handleIncrement = () => {
      if (counter + 1 <= 5) {
        setCounter((counter) => counter + 1);
        dispatch(updateQty(item._id, counter + 1));
        toastMessage(`You've changed ${item.title.longTitle} QUANTITY to ${counter + 1}`,"success");
      } else {
        toastMessage("We're sorry! Only 5 unit(s) allowed in each order", "error");
      }
    };
    const handleDecrement = () => {
      setCounter((counter) => counter - 1);
      dispatch(updateQty(item._id, counter - 1));
      toastMessage(`You've changed ${item.title.longTitle} QUANTITY to ${counter -1}`,"success");
    };
  
console.log(counter)
  return (
    <Component>
        <StyledButton
       onClick={() => handleDecrement()}
       disabled={counter == 1}
        >-</StyledButton>
        <StyledButton  disabled>{counter}</StyledButton>
        <StyledButton
        onClick={() => handleIncrement()}
                >+</StyledButton>
    </Component>
  )
}

export default GroupedButton;