import './App.css';
import StickyFooter from './Components/Footer';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import About from './Components/About';
import MediaCard from './Components/Certifications';
import Projects from './Components/Projects';

import Navbar from './Components/navbar';
import Education from './Components/Eductation';
import Experience from './Components/Experience';


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

        <Navbar />
        <Routes>

          <Route exact path="/" element={<About />} />
          <Route exact path="/formations" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
         
          <Route exact path="/certifs" element={<MediaCard />} />
          <Route exact path="/projets" element={<Projects />} />
        </Routes>
        <StickyFooter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
