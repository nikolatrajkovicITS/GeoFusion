import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import ThemeRegistry from './styles/ThemeRegistry';

function App() {
  return (
    <ThemeRegistry>
      <Container>
        <Typography variant="h4" gutterBottom>
          Welcome to MUI with Styled Components
        </Typography>

        <Typography variant="bodyS">This is Body S</Typography>
        <br />
        <Typography variant="bodyXS">This is Body XS</Typography>
        <br />
        <Typography variant="robotoBold">This is Roboto Bold</Typography>
        <br />
        <Typography variant="headingXXS">This is Heading XXS</Typography>
        <br />
        <Typography variant="bodySSemibold">This is Body S Semibold</Typography>
        <br />
        <Typography variant="bodyXSSemibold">This is Body XS Semibold</Typography>
        <br />
        <Typography variant="bodyL">This is Body L</Typography>
        <br />

        <Button variant="contained" color="primary">
          Styled Button
        </Button>
      </Container>
    </ThemeRegistry>
  );
}

export default App;
