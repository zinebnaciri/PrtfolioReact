import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';


function Copyright() {
    return (
        <Typography variant="body2" color="black" align="center" fontSize="1rem" >
            {'Copyright © '}

            Made by Zineb Naciri

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            sx={{

                display: 'flex',
                flexDirection: 'column',
                minHeight: '35vh',

            }}
        >
            <CssBaseline />

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: '#d8bfd8',
                }}
            >


                <Container maxWidth="sm">
                    <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: '1rem' }}>
                        <IconButton
                            href="https://github.com/zinebnaciri"
                            target="_blank"
                            rel="noopener"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/zineb-naciri-4b88a2218/"
                            target="_blank"
                            rel="noopener"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener"
                        >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton
                            href="https://pristinegiftshop.vercel.app/"
                            target="_blank"
                            rel="noopener"
                        >
                            <LocalMallRoundedIcon />
                        </IconButton>
                    </Box>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}                                                                                           
