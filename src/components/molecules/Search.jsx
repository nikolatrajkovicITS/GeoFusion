import React, { useCallback, useState } from 'react';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import debounce from 'lodash.debounce';
import useAppState from '@/hooks/useAppState';

const Search = React.memo(({ placeholder = 'Search...' }) => {
  const { setSearchTerm } = useAppState();
  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    debounce(term => {
      setSearchTerm(term);
    }, 300),
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
    <TextField
      fullWidth
      variant="outlined"
      value={localSearchTerm}
      onChange={handleSearch}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon aria-label="search icon" color="action" />
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
