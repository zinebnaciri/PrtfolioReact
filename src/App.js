
import './App.css';

import StickyFooter from './Components/Footer';
import ResponsiveAppBar from './Components/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import Profile from './Components/profile';
import About from './Components/About';


import Experience from './Components/Experience';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d8bfd8', // Change the primary color to green
    },
    secondary: {
      main: '#7e21ce', // Change the secondary color to red
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/**  */}
        <ResponsiveAppBar/>  
  
   <Profile />
   <About/>
  
        <Experience />
        <StickyFooter/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
