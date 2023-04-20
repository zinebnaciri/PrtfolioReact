import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import profile from './img/profile.jpg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Img = styled('img')({
  
    marginLeft:'25px',
    marginTop:'20px',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%',

});

export default function Profile() {
    return (
        <Paper
            sx={{
                p: 2,
                marginTop:'10px',
             
                maxWidth: '100%',
                height: '370px',
                flexGrow: 1,
                backgroundColor: 'black',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 300, height: 300 }}>
                        <Img alt="Profile" src={profile} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2} sx={{marginLeft:'50px'}}>
                        <Grid item xs >
                            <Typography variant="h3" sx={{ color: 'WHITE', fontWeight: 'normal', mb: 3 }} >I'm</Typography>
                            <Typography variant="h1" component="h2" sx={{ color: 'primary.contrastText', textTransform: 'uppercase', mb: 2, WebkitTextStroke: '2px #ffffff' }}>Zineb Naciri</Typography>
                            <Typography variant="h1" component="h2" className="typed-text-output d-inline font-weight-lighter text-black"></Typography>
                            <h2 style={{ color: 'white' }}>Full-Stack Developer</h2>

                        </Grid>
                        <Grid item>
                            <Button href="Zineb-Naciri-CV.pdf" download variant="outlined" sx={{ color: 'white', borderColor: 'white', mr: 5 }}>Download CV</Button>
                            <Link to="/contact">
                                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>Contact Me</Button>
                            </Link>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Paper>
    );
}