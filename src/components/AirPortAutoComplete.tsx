import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAirportData,
  selectAirportData,
  selectLoading,
  selectError,
} from "../store/apiSlice";
import { AppDispatch } from "../store/store";
import { Autocomplete, TextField, CircularProgress, Box } from "@mui/material";

interface AirPortAutoCompleteProps {
  selectedAirport: any | null;
  setSelectedAirport: (airport: any | null) => void;
  label: string;
}

const AirPortAutoComplete: React.FC<AirPortAutoCompleteProps> = ({
  selectedAirport,
  setSelectedAirport,
  label,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const airportData = useSelector(selectAirportData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [query, setQuery] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (query.length > 2) {
      dispatch(fetchAirportData(query));
    }
  }, [query, dispatch]);

  const handleInputChange = (
    event: React.ChangeEvent<{}>,
    newValue: string
  ) => {
    setInputValue(newValue);
    setQuery(newValue);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: any | null) => {
    setSelectedAirport(newValue);
    setInputValue(newValue?.presentation?.suggestionTitle || "");
  };

  return (
    <Box>
      <Autocomplete
        value={selectedAirport}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        options={airportData?.data || []}
        getOptionLabel={(option) => option?.presentation?.suggestionTitle || ""}
        loading={loading}
        isOptionEqualToValue={(option, value) => option.skyId === value.skyId}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            fullWidth
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </Box>
  );
};

export default AirPortAutoComplete;
