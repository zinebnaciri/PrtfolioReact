import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
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

    height: '400px',
    width: '600px',

});

const Experience = () => {
    return (
        <div>
             <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center',marginTop:'40px' }}>
            <Typography variant="h1" component="h1" sx={{
              color: 'primary.main',
              textTransform: 'uppercase',
              textAlign: 'center',
              fontSize: ['32px', '48px', '64px']
            }}>
             Experience
            </Typography></Box>
            <Container>
                <CardContainer>
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Propriétaire d'un Small business.
                        </Typography>

                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Création des produits faits main uniques et les promouvoir
                                    sur les réseaux sociaux.
                                </li>
                                <li>
                                    Création du contenu visuel de haute qualité, y compris des
                                    photos, des vidéos, des stories et des reels pour susciter
                                    l'intérêt des clients.
                                </li>
                                <li>
                                    Gestion de tous les aspects opérationnels de mon business,
                                    notamment la production, l'emballage, l'expédition, la
                                    gestion des stocks et le service client.
                                </li>
                                <li>
                                    Interaction régulière avec mes clients, en répondant à leurs
                                    questions et en fournissant un excellent service client.
                                </li>
                            </ul>
                        </Typography>
                        <Typography variant="footer" component="p" >
                            Aout 2021 à ce jour @pristinegiftshop
                        </Typography>
                    </CardContent>
                </CardContainer>
                <CardContainer >
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Stage conventionné

                        </Typography>

                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Développement d'un site e-commerce en PHP
                                </li>
                                <li>
                                    La détection et la correction des erreurs dans les sites web
                                    et les applications web

                                </li>

                            </ul>
                        </Typography>
                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Juillet 2022- Septembre 2022
                            H2O Digital

                        </Typography>
                    </CardContent>
                </CardContainer>
                <CardContainer >
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Stage conventionné

                        </Typography>

                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Le développement d'une application web de gestiondes
                                    "records" en PHP avec une base de donnéeMySQL.

                                </li>
                                <li>
                                    Le développement du front end avec le Framework frontal
                                    Bootstrap. L'hébergement de cette application web sur un
                                    serveur de l'entreprise.


                                </li>

                            </ul>
                        </Typography>
                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Août 2021
                            Moogle Marketing
                        </Typography>
                    </CardContent>
                </CardContainer>
                <CardContainer>
                    <CardContent>
                        <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Représentante commerciale pour des marques de
                            vêtements en ligne

                        </Typography>

                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            <ul>
                                <li>
                                    Recherche et conversion des clients potentiels en
                                    acheteurs fidèles
                                </li>
                                <li>
                                    Gestion de la présence de la marque sur les réseaux
                                    sociaux en créant des contenus engageants pour
                                    maintenir l'interaction des followers et augmenter la
                                    notoriété de la marque.

                                </li>
                                <li>
                                    Un excellent service client.

                                </li>

                            </ul>
                        </Typography>
                        <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
                            Mars 2020 - Octobre 2021

                        </Typography>
                    </CardContent>
                </CardContainer>
            </Container>
        </div>
    );
};

export default Experience;
