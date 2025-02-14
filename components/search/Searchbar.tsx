'use client';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          sx={{ backgroundColor: '#fff', borderRadius: '14px', height: '4rem' }}
          placeholder="Search Courses..."
        />
      </FormControl>
    </div>
  );
};

export default SearchBar;
