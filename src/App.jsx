import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

//pages
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetails />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    )
};

export default App;