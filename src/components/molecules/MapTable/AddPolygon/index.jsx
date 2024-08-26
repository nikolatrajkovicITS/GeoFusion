import React, { useState, useRef } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  styled,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import CoordinateDropdown from './CoordinateDropdown';

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E0E0',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: '#AEAEAE',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  marginRight: theme.spacing(2),
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E0E0',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      borderColor: '#AEAEAE',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  marginRight: theme.spacing(2),
}));

const AddPolygon = ({ onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [numPoints, setNumPoints] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const handleNumPointsChange = event => {
    const points = parseInt(event.target.value, 10);
    setNumPoints(points);
    setCoordinates(Array(points).fill({ lat: '', lng: '' }));

    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left,
      });
    }
  };

  const handleCoordinateChange = (index, coord, value) => {
    const newCoordinates = coordinates.map((coordinate, i) =>
      i === index ? { ...coordinate, [coord]: value } : coordinate
    );
    setCoordinates(newCoordinates);
  };

  const handleRemovePoint = index => {
    setCoordinates(coordinates.filter((_, i) => i !== index));
  };

  const handleAddPoint = () => {
    setCoordinates([...coordinates, { lat: '', lng: '' }]);
  };

  const handleSave = () => {
    onSave({ name, coordinates });
  };

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'background.lightPurple',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box display="flex" alignItems="center">
        <StyledTextField
          label="Polygon Name"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
        />

        <StyledFormControl fullWidth>
          <InputLabel>Add Point</InputLabel>
          <Select
            value={numPoints}
            onChange={handleNumPointsChange}
            label="Add Point"
            ref={dropdownRef}
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: 'white',
                },
              },
            }}
          >
            {[3, 4, 5, 6].map(point => (
              <MenuItem
                key={point}
                value={point}
                sx={{
                  pt: 1,
                  pb: 1,
                  borderBottom: '1px solid #D5D6E3',
                  '&:last-child': {
                    borderBottom: 'none',
                  },
                }}
              >
                {point} Points
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{ minWidth: 0, ml: 0.5 }}
        >
          <CheckIcon />
        </Button>
        <Button
          variant="outlined"
          onClick={onCancel}
          sx={{ minWidth: 0, ml: 2 }}
        >
          <ClearIcon />
        </Button>
      </Box>

      {numPoints && (
        <CoordinateDropdown
          coordinates={coordinates}
          handleCoordinateChange={handleCoordinateChange}
          handleRemovePoint={handleRemovePoint}
          handleAddPoint={handleAddPoint}
          handleSave={handleSave}
          handleCancel={onCancel}
          dropdownPosition={dropdownPosition}
        />
      )}
    </Box>
  );
};

export default AddPolygon;
