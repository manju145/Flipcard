import React from 'react'
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"
import Search from './Search'
import HeaderButton from './HeaderButton'


const StyledNavbar = styled(AppBar)`
background: #2874f0;
height:55px;
`
const Components = styled(Box)`
margin-left: 12%;
line-height: 0;
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

const HeaderButtonrapper= styled(Box)`
margin: 0 5% 0 auto;
`


const Navbar = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyledNavbar>
            <Toolbar style={{minHeight:55}}>
                <Components>
                    <img src={logoURL} alt='logo' style={{ width: 75 }} />
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

export default Navbar