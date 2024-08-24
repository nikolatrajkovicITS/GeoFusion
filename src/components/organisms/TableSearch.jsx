import React, { useMemo, useCallback } from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import Search from '@/components/molecules/Search';
import useAppState from '@/hooks/useAppState';
import { POLYGON } from '@/constants';

const TableSearch = () => {
  const { polygons, markers, editingMode, setSelectedItem, searchTerm } =
    useAppState();

  const dataToSearch = useMemo(() => {
    return editingMode === POLYGON ? polygons : markers;
  }, [editingMode, polygons, markers]);

  const filteredResults = useMemo(() => {
    return dataToSearch.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [dataToSearch, searchTerm]);

  const handleSelectItem = useCallback(
    item => {
      setSelectedItem(item);
    },
    [setSelectedItem]
  );

  return (
    <Box>
      <Box sx={{ bgcolor: 'secondary.main' }} p={2}>
        <Search />
      </Box>
      <List>
        {filteredResults.map(item => (
          <ListItem key={item.id} onClick={() => handleSelectItem(item)}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TableSearch;
