import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import profile from './img/profile.jpg';

function Profile(props) {


    const Img = styled('img')({
        borderRadius: '50%',
        display: 'inline-block',
        maxWidth: '30%',
        height: 'auto',
    });


    return (
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
                            <Typography variant="h5" color="white" paragraph>
                                Full-Stack Developer
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Paper>
    );
}



export default Profile;