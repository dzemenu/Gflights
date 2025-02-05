import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
  IconButton,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SearchIcon from "@mui/icons-material/Search";

import "../App.css";
import CustomDatePicker from "./datePicker";
import { Dayjs } from "dayjs";

const Home = () => {
  const [from, setFrom] = useState("Addis Ababa");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [tripType, setTripType] = useState("round-trip");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("economy");

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      className="App"
    >
      {/* Select Options Section */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        p={2}
        border={1}
        borderRadius={2}
        borderColor="grey.300"
        boxShadow={1}
      >
        <FormControl>
          <Select value={tripType} onChange={handleChange(setTripType)}>
            <MenuItem value="round-trip">Round trip</MenuItem>
            <MenuItem value="one-way">One way</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Passengers</InputLabel>
          <Select value={passengers} onChange={handleChange(setPassengers)}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select value={classType} onChange={handleChange(setClassType)}>
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first">First Class</MenuItem>
          </Select>
        </FormControl>

        {/* Form Inputs Section */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="From"
              value={from}
              onChange={handleChange(setFrom)}
              variant="outlined"
              fullWidth
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        transform: "translateX(100%)",
                        display: { xs: "none", sm: "inline-flex" },
                      }}
                    >
                      <IconButton>
                        <SwapHorizIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              label="Where to?"
              value={to}
              onChange={handleChange(setTo)}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomDatePicker
              label="Departure date"
              value={departure}
              onChange={setDeparture}
            />
          </Grid>
          {tripType == "round-trip" && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CustomDatePicker
                label="Return date"
                value={returnDate}
                onChange={setReturnDate}
              />
            </Grid>
          )}
        </Grid>

        <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
          Explore
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
