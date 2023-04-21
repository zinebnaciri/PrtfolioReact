import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor:'white'

                    }}
                >
                    <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h3" component="h3" sx={{
                            color: 'primary.main',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            marginTop: 5

                        }}>
                            Contact Me
                        </Typography>
                    </Box>


                    <Box component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1, bgcolor: 'white', p: 3 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            autoComplete="message"
                            autoFocus
                            multiline="true"

                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send Email
                        </Button>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}