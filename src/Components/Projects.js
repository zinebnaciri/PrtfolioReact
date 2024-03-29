import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import pharmacie from './img/11.png';
import moogle from './img/moogle.png';
import pharm from './img/pharm.PNG';
import exam from './img/exam.PNG';
import restaurant from './img/restaurant.PNG';
import xo from './img/xo.PNG';
import { styled } from '@mui/material/styles';
import { CardActions, Button, Fab } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function handleClick() {
    window.location.href = 'https://github.com/zinebnaciri';
}
export default function Projects() {
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
                    Projets
                </Typography>
            </Box>

            <Container>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={pharmacie}
                        title="pharmacie"
                        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gestion parapharmacie en C#

                        </Typography>

                        <CardActions>
                            <Button href="https://github.com/zinebnaciri/Gestion_Parapharmacie" size="small">Voir le Project</Button>

                        </CardActions>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={moogle}
                        title="records"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gestion des Records en PHP
                        </Typography>
                        <CardActions>
                            <Button href="https://github.com/zinebnaciri/WebApp" size="small">Voir le Project</Button>

                        </CardActions>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={pharm}
                        title="pharm"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Localisation des pharmacies en SpringBoot et React
                        </Typography>
                        <CardActions>
                            <Button href="https://github.com/zinebnaciri/pharmacie-front-end.git" size="small">Voir le Project</Button>

                        </CardActions>
                    </CardContent>

                </Card>

            </Container>
            <Container>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={restaurant}
                        title="restaurant"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gestion d'un restaurant en PHP

                        </Typography>
                        <CardActions>
                            <Button href="https://github.com/zinebnaciri/webAppSystemToManageRestaurant" size="small">Voir le Project</Button>

                        </CardActions>
                    </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={exam}
                        title="exam"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Plannification des examens en SpringBoot et React


                        </Typography>
                        <CardActions>
                            <Button href="https://github.com/zinebnaciri/calendarFrontend.git" size="small">Voir le Project</Button>

                        </CardActions>
                    </CardContent>

                </Card>

                <Card sx={{ maxWidth: 345, height: 400 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={xo}
                        title="game"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jeu de Morpion en React js

                        </Typography>
                        <CardActions>
                            <Button href="https://tic-tac-toe-eta-roan.vercel.app/" size="small">Voir le Project</Button>

                        </CardActions>
                    </CardContent>

                </Card>

            </Container>
            <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
                <Fab variant="extended" onClick={handleClick}>
                    <ArrowDropDownCircleIcon sx={{ mr: 1 }} />
                    Voir Plus
                </Fab>
            </Box>



        </div>
    );
}