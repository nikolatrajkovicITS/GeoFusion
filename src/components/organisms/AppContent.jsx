import React from 'react';
import { Box } from '@mui/material';
import MapContainer from '@/components/organisms/MapContainer';
import TableSearch from '@/components/organisms/TableSearch';

function AppContent() {
  return (
    <Box display="flex" height="100vh">
      <Box flex={1} paddingRight={1}>
        <MapContainer />
      </Box>
      <Box flex={1}>
        <TableSearch />
      </Box>
    </Box>
  );
}

export default AppContent;
