import { Box, MenuItem, Menu,Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component= styled(Menu)`
margin-top:5px;
`
const Logoutb = styled(Typography)`
font-size:14px;
margin-left: 20px;
`


const Profile = ({ contexted,setContexted }) => {

    const [open, setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false);
    }

    const Logout = () => {
        setContexted('');
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2, cursor:'pointer' }} >{contexted}</Typography>
            </Box>


            <Component

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                >

                <MenuItem onClick={()=>{handleClose(); Logout();}}>
                  <PowerSettingsNewIcon color='primary' fontSize='small'></PowerSettingsNewIcon>
                    <Logoutb>Logout</Logoutb>
                </MenuItem>
            </Component>
        </>


    )
}

export default Profile;