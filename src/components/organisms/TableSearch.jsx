import React from 'react';
import { Container } from '@mui/material';
import Search from '@/components/molecules/Search';

const TableSearch = () => {
  const handleSearch = searchTerm => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      <Container>
        <Search onSearch={handleSearch} />
      </Container>
    </>
  );
};

export default TableSearch;
