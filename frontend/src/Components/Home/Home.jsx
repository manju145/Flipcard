import React from 'react'
import NavbarTwo from './NavbarTwo'
import Banner from './Banner'
import { Box } from '@mui/material'
import { Style } from '@mui/icons-material'

const Components= Style(Box)`
padding :10px;
background: #F2F2F2;
`

const Home = () => {
  return (
    <>
       <NavbarTwo></NavbarTwo>
       <Components>
       <Banner></Banner>
       </Components>

    </>

  )
}

export default Home