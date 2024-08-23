import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import ThemeRegistry from './styles/ThemeRegistry';

const CustomButton = styled(Button)({
  backgroundColor: 'teal',
  '&:hover': {
    backgroundColor: 'darkslategray',
  },
});

function App() {
  return (
    <ThemeRegistry>
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to MUI with Styled Components
      </Typography>
      <CustomButton variant="contained">Styled Button</CustomButton>
    </Container>
    </ThemeRegistry>
  );
}

export default App;
