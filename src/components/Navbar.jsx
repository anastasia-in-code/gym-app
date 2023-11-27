import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import fitLogo from '../assets/imgs/logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent='space-between' sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent:'none'}} px="20px">
    <Link to="/">
      <img src={fitLogo} alt="logo" style={{ height: '100px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: `3px solid #c60000` }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar