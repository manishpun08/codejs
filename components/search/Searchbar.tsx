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
          placeholder="Search Courses..."
          className="bg-white rounded-2xl lg:w-[500px] h-16"
        />
      </FormControl>
    </div>
  );
};

export default SearchBar;
