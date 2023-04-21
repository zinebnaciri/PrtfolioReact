import './App.css';
import StickyFooter from './Components/Footer';
import ResponsiveAppBar from './Components/header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import About from './Components/About';
import MediaCard from './Components/Certifications';

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

        <ResponsiveAppBar />
      
        <About/>
       <MediaCard/>
        <StickyFooter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
