import { Box, Button, Grid, Typography } from '@mui/material';
import about from './img/profile.jpg';
import React from 'react';
import BasicModal from './Modal';
import resume from './pdf/ZinebNaciri.pdf'

const About = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'white', margin: '20px' }} id="about">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h1" component="h1" sx={{
              color: 'primary.main',
              textTransform: 'uppercase',
              textAlign: 'center',
              fontSize: ['32px', '48px', '64px']
            }}>
              About Me
            </Typography>
          </Box>
          <Grid container alignItems="center" mt={8}>
            <Grid item xs={12} sm={6} mb={4} mb-sm={0}>
              <Box sx={{ maxWidth: '100%', height: 'auto' }}>
                <img src={about} alt="about" style={{ width: '100%', maxWidth: '470px', height: 'auto', borderRadius: '50%' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h3" mb={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  Full Stack Engineer
                </Typography>
                <Typography variant="body1" mb={2} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  I am highly motivated and ambitious. I possess a strong understanding of programming concepts and front-end and back-end technologies. I have demonstrated the ability to work independently or as part of a team to design, develop, and maintain websites and applications.
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', sm: 'left' } }}>
                <Grid item xs={12} sm={6} mb={2}>
                  <Typography variant="h6" component="h6">
                    Name: <span style={{ color: '#6c757d' }}>Zineb Naciri</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} mb={2}>
                  <Typography variant="h6" component="h6">
                    Degree: <span style={{ color: '#6c757d' }}>Master</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} mb={2}>
                  <Typography variant="h6" component="h6">
                    Email: <span style={{ color: '#6c757d' }}>zineb.naciri02@gmail.com</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} mb={2}>
                  <Typography variant="h6" component="h6">
                    Freelance: <span style={{ color: '#6c757d' }}>Available</span>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} textAlign="center">
                  <BasicModal />
                </Grid>
                <Grid item xs={12} sm={6} textAlign="center">
                  <a href={resume} download="cv">
                <Button sx={{color:'black', borderWidth:'1px', borderColor:'black', borderRadius: '15px', borderStyle: 'solid'}} >Download CV</Button>
                </a>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
