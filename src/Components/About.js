import { Box, Button, Grid, Typography } from '@mui/material';
import about from './img/about.jpg';
import React from 'react';
const About = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'white' }} id="about">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
           
            <Typography variant="h1" component="h1" sx={{ position: 'absolute', color: 'primary.main', textTransform: 'uppercase' }}>
              About Me
            </Typography>
          </Box>
          <Grid container alignItems="center" mt={8}>
            <Grid item xs={12} sm={6} mb={4} mb-sm={0}>
              <Box sx={{ maxWidth: '100%', height: 'auto' }}>
                <img src={about} alt="about" style={{ maxWidth: '470px', height: 'auto' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h3" mb={4}>
                Full Stack Engineer
              </Typography>
              <Typography variant="body1" mb={4}>
                I am highly motivated and ambitious. I possess a strong understanding of programming concepts and front-end and back-end technologies. I have demonstrated the ability to work independently or as part of a team to design, develop, and maintain websites and applications.
              </Typography>
              <Grid container spacing={2}>
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
              <Button variant="outlined" color="primary" mr={2} href="#contact" style={{ marginRight: ' 50px' }}>
                Hire Me
              </Button>
              <Button variant="outlined" color="primary" href="Zineb-Naciri-CV.pdf" download>
                Download CV
              </Button>
            </Grid>
          </Grid>
       
</Grid>
</Grid>
</Box>
  );
}
export default About;