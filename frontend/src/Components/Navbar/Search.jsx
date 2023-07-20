import { Box, InputBase, styled } from '@mui/material';
import React from 'react';
import SearchIcon from "@mui/icons-material/Search";



const SearchContainer= styled(Box)`
background: #fff;
width:38%;
border-radius:2px;
margin-left: 10px;
display: flex;
`

const InputSearchbase= styled(InputBase)`
padding-left: 20px;
width:100%;
font-size: unset;
`
const SearchIconrapper= styled(Box)`
color: blue;
padding: 5px;
display: flex;
`

const Search = () => {
  return (
    <SearchContainer>
        <InputSearchbase 
        placeholder='Search for Products, brand and more'
        />
        <SearchIconrapper>
            <SearchIcon/>
        </SearchIconrapper>
    </SearchContainer>

  )
}

export default Search