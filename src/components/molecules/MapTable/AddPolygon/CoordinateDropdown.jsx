import React from 'react';
import ReactDOM from 'react-dom';
import { Box, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import useTranslation from '@/hooks/useTranslation';

const CoordinateDropdown = ({
  coordinates,
  handleCoordinateChange,
  handleRemovePoint,
  handleAddPoint,
  handleSave,
  handleCancel,
  dropdownPosition,
}) => {
  const { t } = useTranslation();

  return ReactDOM.createPortal(
    <Box
      sx={{
        p: 2,
        bgcolor: 'white',
        borderRadius: 2,
        width: '390px',
        boxShadow: 3,
        position: 'absolute',
        top: dropdownPosition.top + 5,
        left: dropdownPosition.left,
        maxHeight: '380px',
        overflowY: 'auto',
      }}
    >
      {coordinates.map((coord, index) => (
        <Box key={index} display="flex" alignItems="center" sx={{ mb: 2 }}>
          <TextField
            label="Latitude"
            value={coord.lat}
            onChange={e => handleCoordinateChange(index, 'lat', e.target.value)}
            fullWidth
            sx={{ mr: 1, backgroundColor: 'white' }}
          />
          <TextField
            label="Longitude"
            value={coord.lng}
            onChange={e => handleCoordinateChange(index, 'lng', e.target.value)}
            fullWidth
            sx={{ mr: 1, backgroundColor: 'white' }}
          />

          <Button
            variant="outlined"
            onClick={() => handleRemovePoint(index)}
            sx={{ minWidth: 0, ml: 1 }}
            size="small"
          >
            <ClearIcon fontSize="small" />
          </Button>
        </Box>
      ))}
      <Button
        variant="text"
        startIcon={<AddIcon />}
        onClick={handleAddPoint}
        sx={{ mb: 2 }}
      >
        {t('addPoint')}
      </Button>
      <Box display="flex" justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={handleCancel}
          startIcon={<ClearIcon />}
        >
          {t('cancel')}
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          startIcon={<CheckIcon />}
        >
          {t('saveAndApply')}
        </Button>
      </Box>
    </Box>,
    document.body
  );
};

export default CoordinateDropdown;
