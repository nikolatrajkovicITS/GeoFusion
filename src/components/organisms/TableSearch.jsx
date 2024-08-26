import React, { useMemo, useCallback, useState } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Search from '@/components/molecules/Search';
import Tabs from '@/components/molecules/Tabs';
import useAppState from '@/hooks/useAppState';
import { POLYGON } from '@/constants';
import useTranslation from '@/hooks/useTranslation';
import MapTable from '@/components/molecules/MapTable';

const TableSearch = () => {
  const { t } = useTranslation();
  const {
    polygons,
    markers,
    selectedTab,
    setSelectedItem,
    searchTerm,
    addPolygon,
  } = useAppState();
  const [isAdding, setIsAdding] = useState(false);

  const filteredResults = useMemo(() => {
    return selectedTab === POLYGON ? polygons : markers;
  }, [selectedTab, polygons, markers]);

  const handleItemClick = useCallback(
    item => {
      setSelectedItem(item);
    },
    [setSelectedItem]
  );

  const filteredTableData = useMemo(() => {
    return filteredResults.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [filteredResults, searchTerm]);

  const handleAddNew = () => {
    setIsAdding(true);
  };

  const handleSaveNewItem = newItem => {
    if (selectedTab === POLYGON) {
      addPolygon(newItem);
    } else {
      addMarker(newItem);
    }
    setIsAdding(false);
  };

  const handleCancelNewItem = () => {
    setIsAdding(false);
  };

  return (
    <>
      <Box sx={{ bgcolor: 'secondary.main' }} p={2} mb={2}>
        <Search />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        pr={2}
        pl={2}
      >
        <Tabs />
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ ml: 2 }}
          onClick={handleAddNew}
        >
          {t(selectedTab === POLYGON ? 'addPolygon' : 'addMarker')}
        </Button>
      </Box>
      <Box pr={2} pl={2}>
        <MapTable
          data={filteredTableData}
          isPolygonMode={selectedTab === POLYGON}
          isAdding={isAdding}
          onSaveNewItem={handleSaveNewItem}
          onCancelNewItem={handleCancelNewItem}
        />
      </Box>
    </>
  );
};

export default React.memo(TableSearch);
