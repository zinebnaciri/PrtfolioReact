import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import bootstrap from './img/bootstrap.PNG';
import react from './img/react.PNG';
import email from './img/email.PNG';
import devops from './img/devops.PNG';
import nodejs from './img/nodejs.PNG';
import cloud from './img/Capturescloud.PNG'
import { styled } from '@mui/material/styles';
export default function MediaCard() {
    const Container = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
    });
    return (
        <div>
            <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center',marginTop:'40px' }}>
                <Typography variant="h1" component="h1" sx={{
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    fontSize: ['32px', '48px', '64px']
                }}>
                    Certificats
                </Typography>
            </Box>

            <Container>
            <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={cloud}
                        title="cloud"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Building Scalable Java Microservices with Spring
Boot and Spring Cloud
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Coursera
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={bootstrap}
                        title="bootstrap"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Front-End Web UI Frameworksand Tools : Bootstrap4

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Coursera
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={react}
                        title="react"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Front-End Web Development with React
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            Coursera
                        </Typography>
                    </CardContent>

                </Card>
               

            </Container>
            <Container>
            <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={nodejs}
                        title="nodejs"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Server-side Development with NodeJS, Express and MongoDB

                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            Coursera
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={email}
                        title="email"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Certification for Email Marketing

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sendinblue Academy
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={devops}
                        title="devops"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            DevOps, Cloud, and Agile Foundations

                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            Coursera
                        </Typography>
                    </CardContent>

                </Card>


            </Container>
        </div>
    );
}