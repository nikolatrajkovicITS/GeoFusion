import React, { useMemo, useCallback } from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import Search from '@/components/molecules/Search';
import Tabs from '@/components/molecules/Tabs';
import useAppState from '@/hooks/useAppState';
import { POLYGON } from '@/constants';

const TableSearch = () => {
  const { polygons, markers, selectedTab, setSelectedItem, searchTerm } =
    useAppState();

  const filteredResults = useMemo(() => {
    return selectedTab === POLYGON ? polygons : markers;
  }, [selectedTab, polygons, markers]);

  const handleItemClick = useCallback(
    item => {
      setSelectedItem(item);
    },
    [setSelectedItem]
  );

  const displayedItems = useMemo(() => {
    return filteredResults
      .filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map(item => (
        <ListItem key={item.id} onClick={() => handleItemClick(item)}>
          <ListItemText primary={item.name} />
        </ListItem>
      ));
  }, [filteredResults, searchTerm, handleItemClick]);

  return (
    <>
      <Box sx={{ bgcolor: 'secondary.main' }} p={2} mb={2}>
        <Search />
      </Box>

      <Box>
        <Tabs />
        {/* buttons */}
      </Box>
      {/* table */}
      <List>{displayedItems}</List>
    </>
  );
};

export default React.memo(TableSearch);
