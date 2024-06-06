import React from 'react'

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
// import Sidebar from '../../components/componentsChat/Sidebar';
// import Header from '../../components/componentsChat/Header';
import MyMessages from '../../components/componentsChat/MyMessages';

export default function Chat({id }) {
  return (
    <CssVarsProvider disableTransitionOnChange>
    <CssBaseline />
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      {/* <Sidebar /> */}
      {/* <Header /> */}
      <Box component="main" className="MainContent" sx={{ flex: 1 }}>
        <MyMessages id={id}/>
      </Box>
    </Box>
  </CssVarsProvider>
  )
}
