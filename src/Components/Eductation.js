import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
});

const CardContainer = styled(Card)({
    display: 'flex',
    flexDirection: 'column',

    height: '200px',
    width: '90%',

});

const Education = () => {
    return (
        <div>
            <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h1" component="h1" sx={{
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    fontSize: ['32px', '48px', '64px']
                }}>
                    Formations
                </Typography>
            </Box>
            <Container>
                <CardContainer>
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Bac + 4 en ingénierie informatique et réseau
                        </Typography>

                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            EMSI- Ecole marocaine des sciences de l'ingénieur,
                            Marrakech
                        </Typography>
                        <Typography variant="body2" component="h7" sx={{ color: 'grey' }} >
                            de 2022 à ce jour
                        </Typography>
                    </CardContent>
                </CardContainer>
                <CardContainer >
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Bac+3 en Génie informatique


                        </Typography>

                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            ESMA- Ecole supérieure de management et de technologies
                            appliqués, Marrakech
                        </Typography>
                        <Typography variant="body2" component="p" sx={{ color: 'grey', marginBottom: '5px' }}>
                            de 2019 à 2022


                        </Typography>
                    </CardContent>
                </CardContainer>
                <CardContainer >
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Bac scientifique option physique et chimie

                        </Typography>

                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Massar Al Omam, Marrakech
                        </Typography>
                        <Typography variant="body2" component="p" sx={{ color: 'grey', marginBottom: '5px' }}>
                            de 2018 à 2019
                        </Typography>
                    </CardContent>
                </CardContainer>
            </Container>
        </div>
    );
};

export default Education;
