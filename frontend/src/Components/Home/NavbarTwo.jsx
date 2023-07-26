import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { navData } from '../../contants/data'


const Components = styled(Box)(({theme})=>({
    display: 'flex',
    margin: '55px 130px 0 130px',
    justifyContent: 'space-between',
    // overflow:'overlay',
    overflow:"hidden",
     [theme.breakpoints.down('lg')]:{
        margin: 0,

    }
}
))



const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`

 const Text =styled(Typography)`
 font-sizw: 14px;
 font-weight: 600;
 font-family: inherit;
 `

const NavbarTwo = () => {

    return (
        <Box style={{background:"#fff"}} >
        <Components>
            {
                navData.map(data => (
                    <Container>
                        <img src={data.url} alt='nav'
                            style={{ width: 64 }} />

                        <Text>{data.text}</Text>
                    </Container>

                ))

            }
        </Components>
        </Box>
    )
}

export default NavbarTwo;