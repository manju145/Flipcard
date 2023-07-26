import { Box, InputBase, List, ListItem, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/action/productAction';
import { Link } from 'react-router-dom';



const SearchContainer = styled(Box)`
background: #fff;
width:38%;
border-radius:2px;
margin-left: 10px;
display: flex;
`

const InputSearchbase = styled(InputBase)`
padding-left: 20px;
width:100%;
font-size: unset;
`
const SearchIconrapper = styled(Box)`
color: blue;
padding: 5px;
display: flex;
`
const ListWrapper = styled(List)`
position: absolute;
background:#FFFFFF;
color: #000;
margin-top:30px;
`


const Search = () => {
  const [text, setText] = useState('');

  const { pruducts } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchbase
        placeholder='Search for Products, brand and more'
        onChange={(e) => getText(e.target.value)}
      value={text}
      />
      <SearchIconrapper>
        <SearchIcon />
      </SearchIconrapper>
      {
        text &&
        <ListWrapper>
          {
            pruducts.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link to={`/product/${product.id}`}
                onClick={()=> setText('')}
              style={{textDecoration: 'none', color:'inherit'}}
              >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContainer>

  )
}

export default Search