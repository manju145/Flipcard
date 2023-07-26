import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, Typography, styled } from "@mui/material"
import Search from './Search'
import HeaderButton from './HeaderButton'
import { Link } from 'react-router-dom'
import {Menu} from '@mui/icons-material';

const StyledNavbar = styled(AppBar)`
background: #2874f0;
height:55px;
`
const Components = styled(Link)`
margin-left: 12%;
line-height: 0;
text-decoration:none;
color: inherit;
`
const Subheading = styled(Typography)`
font-size: 10px;
font-style: intalic;
`

const PlusImage = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 4,
})

const HeaderButtonrapper= styled(Box)(({theme})=>({
    margin: '0 5% 0 auto',

[theme.breakpoints.down('md')]:{
   display:'none' 
}
}))

const MenuButton = styled(IconButton)(({theme})=>({
    display:'none' ,
    [theme.breakpoints.down('md')]:{
        display:'block' 
    }
}))


const Navbar = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open ,setOpen] = useState(false);

const handleOpen =()=>{
setOpen(true);
}

const handleClose =()=>{
    setOpen(false);
}

const list =()=>(
    <Box style={{width:200}} onClick={handleClose} >
        <List>
            <ListItem button >
                <HeaderButton />
            </ListItem>
        </List>
    </Box>
)

    return (
        <StyledNavbar>
            <Toolbar style={{minHeight:55}}>
            <MenuButton color='inherit' onClick={handleOpen} >
            <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} >
          {list()}
            </Drawer>
               
                <Components to='/'>
                    <img src={logoURL} alt='logo' style={{ width: 75 }} />
                    {/* <h1 style={{fontSize:"10px"}}>MyCard</h1> */}
                    <Box style={{ display: "flex" }}>
                        <Subheading>Explore&nbsp;
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>

                        </Subheading>
                        <PlusImage src={subURL} alt='sub-logo' />
                    </Box>
                 
                </Components>
       
                <Search></Search>
                
                <HeaderButtonrapper>
                  <HeaderButton></HeaderButton>
                </HeaderButtonrapper>

            </Toolbar>
        </StyledNavbar>


    )
}

export default Navbar;