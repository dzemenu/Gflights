import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "../App.css";
import CustomDatePicker from "./datePicker";
import { Dayjs } from "dayjs";
import AirPortAutoComplete from "./AirPortAutoComplete";
import { useSearchFlightsQuery } from "../store/flightSlice";
import FlightCard from "./FlightCard";
import transformItineraries from "./helper";

const Home = () => {
  const [from, setFrom] = useState<any | null>(null);
  const [to, setTo] = useState<any | null>(null);
  const [departure, setDeparture] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [tripType, setTripType] = useState("round-trip");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("economy");
  const [searchParams, setSearchParams] = useState<any | null>(null);

  const { data, error, isLoading } = useSearchFlightsQuery(searchParams, {
    skip: !searchParams, // Prevents query execution until search is clicked
  });
  const handleSearch = () => {
    if (!from || !to || !departure) {
      alert("Please fill in all required fields.");
      return;
    }

    setSearchParams({
      originSkyId: from.id,
      destinationSkyId: to.id,
      originEntityId: from.entityId,
      destinationEntityId: to.entityId,
      date: departure.format("YYYY-MM-DD"),
      returnDate: returnDate ? returnDate.format("YYYY-MM-DD") : undefined,
      cabinClass: classType,
      adults: passengers,
      sortBy: "best",
      currency: "USD",
      market: "en-US",
      countryCode: "US",
    });
  };
  useEffect(() => {}, [data, searchParams]);
  const transformedFlights = data?.data.itineraries
    ? transformItineraries(data.data.itineraries)
    : [];

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
          <Select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <MenuItem value="round-trip">Round trip</MenuItem>
            <MenuItem value="one-way">One way</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Passengers</InputLabel>
          <Select
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <Select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          >
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first">First Class</MenuItem>
          </Select>
        </FormControl>

        {/* Form Inputs Section */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AirPortAutoComplete
              label="From"
              selectedAirport={from}
              setSelectedAirport={setFrom}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AirPortAutoComplete
              label="Where to"
              selectedAirport={to}
              setSelectedAirport={setTo}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CustomDatePicker
              label="Departure date"
              value={departure}
              onChange={setDeparture}
            />
          </Grid>

          {tripType === "round-trip" && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CustomDatePicker
                label="Return date"
                value={returnDate}
                onChange={setReturnDate}
              />
            </Grid>
          )}
        </Grid>

        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* Search Results */}
      <Box mt={4} width="80%">
        {isLoading && <CircularProgress />}
        {error && <p style={{ color: "red" }}>Error fetching flights.</p>}
        {transformedFlights.length > 0 ? (
          transformedFlights.map((flight, index) => (
            <FlightCard key={index} {...flight} />
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </Box>
    </Box>
  );
};

export default Home;
