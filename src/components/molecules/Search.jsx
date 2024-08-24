import React, { useCallback, useState } from 'react';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import debounce from 'lodash.debounce';
import useAppState from '@/hooks/useAppState';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.action.hover,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: theme.spacing(1.25, 0),
    minHeight: '56px',
    boxSizing: 'border-box',
  },
  '& .MuiOutlinedInput-adornedEnd': {
    paddingRight: 0,
  },
}));

const Search = React.memo(({ placeholder = 'Search...' }) => {
  const { setSearchTerm } = useAppState();
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    debounce(term => setSearchTerm(term), 300),
    [setSearchTerm]
  );

  const handleSearch = useCallback(
    event => {
      const newValue = event.target.value;
      setLocalSearchTerm(newValue);
      debouncedSearch(newValue);
    },
    [debouncedSearch]
  );

  const handleClear = useCallback(() => {
    setLocalSearchTerm('');
    debouncedSearch('');
  }, [debouncedSearch]);

  return (
    <StyledTextField
      fullWidth
      variant="outlined"
      value={localSearchTerm}
      onChange={handleSearch}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'text.secondary' }} />
          </InputAdornment>
        ),
        endAdornment: localSearchTerm && (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClear}
              edge="end"
              size="small"
              aria-label="clear search"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});

export default Search;
