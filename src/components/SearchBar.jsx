import React from 'react';
import {
  FormControl, IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props) {
  return (
    <FormControl className="searchBar" style={{ height: '100%' }}>
      <OutlinedInput
        id="search"
        placeholder="搜索..."
        onChange={(e) => props.setSearchKey(e.target.value)}
        variant="outlined"
        value={props.searchKey}
        sx={{
          width: '30rem',
          height: '100%',
          backgroundColor: '#232324',
          color: '#FFF',
          borderRadius: '1.286rem',
          '& .MuiFormControl-root': {
            // width: '100%',
            height: '100%',
            borderRadius: '1.286rem',
          },
          '& .MuiInputBase-input': {
            height: '100%',
            borderRadius: '1.286rem',
            color: '#FFF',
            paddingLeft: '1rem',
            paddingRight: '1rem',
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
