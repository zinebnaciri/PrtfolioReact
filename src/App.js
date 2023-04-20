
import './App.css';

import StickyFooter from './Components/Footer';
import ResponsiveAppBar from './Components/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import Profile from './Components/profile';
import About from './Components/About';


import Example from './Components/Experience';
import Education from './Components/exp';

import FeaturedPost from './Components/blog';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d8bfd8', 
    },
    secondary: {
      main: '#7e21ce', 
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/** 
   <About/>
  <Education /> */}
        <ResponsiveAppBar/>  
        <Profile />
        <FeaturedPost/>
 
     
        <StickyFooter/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
