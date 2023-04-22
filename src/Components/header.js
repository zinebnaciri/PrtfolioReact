import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Face3Icon from '@mui/icons-material/Face3';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import BasicModal from './Modal';
import profile from './img/profile.jpg';

import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';
const pageLinks = {
  Accueil: '/',
  Experiences: '/Experience',
  Formations: '/Education',
  Certificats: '/Certifications',
  Projects: '/Projects',
};

const pages = ['Acceuil', 'Experiences', 'Formations', 'Certificats', 'Projects'];
const Img = styled('img')({
  borderRadius: '50%',
  display: 'inline-block',
  maxWidth: '30%',
  height: 'auto',
});

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>

          <Face3Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            {pages.map((page) => (
  <MenuItem key={page} onClick={handleCloseNavMenu}>
    <Link to={pageLinks[page]} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography textAlign="center">{page}</Typography>
    </Link>
  </MenuItem>
))}

            </Menu>
          </Box>
          <Face3Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
          {pages.map((page) => (
  <MenuItem key={page} onClick={handleCloseNavMenu}>
    <Link to={pageLinks[page]} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography textAlign="center">{page}</Typography>
    </Link>
  </MenuItem>
))}

          </Box>
          <Box sx={{ flexGrow: 0 }}>
           <Button>
              <BasicModal/>
            </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      <Paper
      sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',

      }}
  >

      <Box
          sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',

          }}
      />

      <Grid container>
          <Grid item md={6}>
              <Box
                  sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: 'center',
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },
                  }}
              >
                  <Img alt="Profile" src={profile} />
                  <Box sx={{ ml: { xs: 0, sm: 3 } }}>
                      <Typography component="h1" variant="h3" color="white" gutterBottom>
                          Zineb Naciri
                      </Typography>
                    <Typography component="h2" variant="h4" color="white" gutterBottom>
                 Full-Stack Developper
                    </Typography>
              
      
                  </Box>
              </Box>
          </Grid>
      </Grid>

  </Paper>
 
  </>
  );
}
export default ResponsiveAppBar;
