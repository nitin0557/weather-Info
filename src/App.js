import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Home from './pages/Home';
import BackgroundImage from './assets/1.jpg'; 
import { theme } from './styling/weather.style';

function App() {
  console.log('HELLO');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
