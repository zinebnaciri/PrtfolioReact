import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from './theme';
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
  alignItems: 'center',
  textAlign: 'center',
  height: '250px',
  width: '250px',
  padding: '20px',
});

const Example = () => {
    
  return (
    <Container sx={{ position: 'relative' }}>
    <Typography
      variant="h1"
      component="h1"
      sx={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'primary.main',
        textTransform: 'uppercase',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
          fontSize: '3rem',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '2rem',
        },
      }}
    >
      About Me
    </Typography>

    <CardContainer>
      <CardContent>
        <Typography variant="h5" component="h2">
          Card 1
        </Typography>
        <Typography variant="body2" component="p">
          This is some text for card 1
        </Typography>
      </CardContent>
    </CardContainer>
    <CardContainer>
      <CardContent>
        <Typography variant="h5" component="h2">
          Card 2
        </Typography>
        <Typography variant="body2" component="p">
          This is some text for card 2
        </Typography>
      </CardContent>
    </CardContainer>
    <CardContainer>
      <CardContent>
        <Typography variant="h5" component="h2">
          Card 3
        </Typography>
        <Typography variant="body2" component="p">
          This is some text for card 3
        </Typography>
      </CardContent>
    </CardContainer>
    <CardContainer>
      <CardContent>
        <Typography variant="h5" component="h2">
          Card 4
        </Typography>
        <Typography variant="body2" component="p">
          This is some text for card 4
        </Typography>
      </CardContent>
    </CardContainer>
  </Container>
);
};

export default Example;
