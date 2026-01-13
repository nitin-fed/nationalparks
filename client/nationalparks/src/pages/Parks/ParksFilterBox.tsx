/** @format */

import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchParks } from "../../store/slices/parks";
import { useAppDispatch } from "../../store/hooks";
import type { ParkFilterBoxProps } from "./interfaces";

const ParkFilterBox: React.FC<ParkFilterBoxProps> = ({ states, onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const dispatch = useAppDispatch();

  const handleSearch = () => {
    onSearch(searchText, selectedState);
  };

  useEffect(() => {
    dispatch(fetchParks({ page: 1, pageSize: 10, stateCode: selectedState }));
  }, [dispatch, selectedState]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        mb: 3,
      }}
    >
      {/* Left column: Search input + button */}
      <Box sx={{ flex: 1, display: "flex" }}>
        <TextField
          fullWidth
          placeholder='Search parks'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleSearch} edge='end'>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Right column: Dropdown for states */}
      <FormControl sx={{ minWidth: 150 }}>
        <Select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          displayEmpty
          variant='outlined'
        >
          <MenuItem value=''>
            <em>All States</em>
          </MenuItem>
          {states.map((state) => (
            <MenuItem key={state["id"]} value={state["code"]}>
              {state["code"]}
              <span style={{ fontSize: "10px" }}> &nbsp;{state["state"]}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ParkFilterBox;
