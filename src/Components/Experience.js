import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
  width: '100%',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',

  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Experience = () => {
  return (
    <div>
      <Box sx={{ maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Typography variant="h1" component="h1" sx={{
          color: 'primary.main',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontSize: ['32px', '48px', '64px'],
        }}>
          Experience
        </Typography>
      </Box>
      <Container>
        <CardContainer>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '10px', color: 'primary.main' }}>
              Propriétaire d'un Small Business
            </Typography>
            <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '10px' }}>
              <ul>
                <li>- Création des produits faits main uniques et promotion sur les réseaux sociaux.</li>
                <li>- Création du contenu visuel de haute qualité, y compris des photos, des vidéos, des stories et des reels pour susciter l'intérêt des clients.</li>
                <li>- Gestion de tous les aspects opérationnels du business, y compris la production, l'emballage, l'expédition, la gestion des stocks et le service client.</li>
                <li>- Interaction régulière avec les clients, en répondant à leurs questions et en fournissant un excellent service client.</li>
              </ul>
            </Typography>
            <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
              Aout 2021 à ce jour <a href='https://www.instagram.com/pristinegiftshop/'>@pristinegiftshop</a>
            </Typography>
          </CardContent>
        </CardContainer>

        <CardContainer>
    <CardContent>
      <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '10px', color: 'primary.main' }}>
        Stage d’approfondissement chez Entomonutris
      </Typography>
      <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '10px' }}>
        <ul>
    Developpement des plateformes de documentation des processus de production
          <li>- Développement backend - express.js</li>
          <li>- Développement frontend - EJS</li>
          <li>- Développement des charts et statistiques - ApexCharts.js</li>
          <li>- Base de données - MongoDB</li>
        </ul>
      </Typography>
      <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
        2023 : Juillet - Septembre
      </Typography>
    </CardContent>
  </CardContainer>

  <CardContainer>
    <CardContent>
      <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '10px', color: 'primary.main' }}>
        Stage conventionné
      </Typography>
      <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '10px' }}>
        <ul>
        Développement d’une application de gestion des employées
          <li>- Développement des fonctionnalités - PHP native</li>
          <li>- Frontend - HTML, CSS, JavaScript</li>
          <li>- Base de données - MySQL</li>
          <li>- Amélioration de l'interactivité et la réactivité - Ajax.js</li>
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
      <Typography variant="h5" component="h2" sx={{ textAlign: 'left', marginBottom: '10px', color: 'primary.main' }}>
        Représentante commerciale pour des marques de vêtements en ligne
      </Typography>
      <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '10px' }}>
        <ul>
          <li>- Recherche et conversion des clients potentiels en acheteurs fidèles</li>
          <li>- Gestion de la présence de la marque sur les réseaux sociaux en créant des contenus engageants pour maintenir l'interaction des followers et augmenter la notoriété de la marque.</li>
          <li>- Un excellent service client.</li>
        </ul>
      </Typography>
      <Typography variant="body2" component="p" sx={{ textAlign: 'left', marginBottom: '5px' }}>
        Mars 2020 - Octobre 2021
      </Typography>
    </CardContent>
  </CardContainer>      </Container>
    </div>
  );
};

export default Experience;
