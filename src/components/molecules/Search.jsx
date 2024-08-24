import React, { useState, useCallback } from 'react';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import debounce from 'lodash.debounce';

const Search = React.memo(({ placeholder = 'Search...', onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback(
    debounce(value => {
      if (onSearch) {
        onSearch(value);
      }
    }, 300),
    [onSearch]
  );

  const handleSearch = useCallback(
    event => {
      const newValue = event.target.value;
      setSearchTerm(newValue);
      debouncedSearch(newValue);
    },
    [debouncedSearch]
  );

  const handleClear = useCallback(() => {
    setSearchTerm('');
    if (onSearch) {
      onSearch('');
    }
  }, [onSearch]);

  return (
    <TextField
      fullWidth
      variant="outlined"
      value={searchTerm}
      onChange={handleSearch}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon aria-label="search icon" color="action" />
          </InputAdornment>
        ),
        endAdornment: searchTerm && (
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
