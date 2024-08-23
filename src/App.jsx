import React from 'react';
import { Button, Container,  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ThemeRegistry from '@styles/ThemeRegistry';

function App() {
  return (
    <ThemeRegistry>
      <Container>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Item
        </Button>
      </Container>
      </ThemeRegistry>
  );
}

export default App;
