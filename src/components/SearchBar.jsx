import React from 'react';
import { FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { Form } from 'react-router-dom';

function SearchBar(props) {
  return (
    <FormControl className="searchBar" style={{ height: '100%', width: '100%' }}>
      <OutlinedInput
        id="search"
        placeholder="搜索..."
        onChange={(e) => props.setSearchKey(e.target.value)}
        variant="outlined"
        value={props.searchKey}
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#232324',
          color: '#FFF',
          borderRadius: '1.042vw',
          '& .MuiFormControl-root': {
            width: '100%',
            height: '100%',
            borderRadius: '1.042vw',
          },
          '& .MuiInputBase-input': {
            height: '100%',
            borderRadius: '1.042vw',
            color: '#FFF',
            paddingLeft: '1vw',
            paddingRight: '1vw',
          },
        }}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              onClick={() => props.handleSearch()}
              aria-label="click to search"
              sx={{ backgroundColor: 'transparent' }}
            >
              <SearchIcon style={{ fill: '#6BACA4' }} />
            </IconButton>
          </InputAdornment>
        )}
      />
    </FormControl>
  );
}

export default SearchBar;
