import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

interface FlightCardProps {
  airlineLogo: string;
  airlineName: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopLocations: string;
  co2Emissions: string;
  emissionImpact: string;
  price: string;
  currency: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  airlineLogo,
  airlineName,
  departureTime,
  arrivalTime,
  duration,
  stops,
  stopLocations,
  co2Emissions,
  emissionImpact,
  price,
  currency,
}) => {
  return (
    <Card sx={{ width: "100%", p: 2, mb: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          {/* Airline Logo & Name */}
          <Grid item xs={2} display="flex" alignItems="center">
            <Box
              component="img"
              src={airlineLogo}
              alt={airlineName}
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <Typography variant="body1">{airlineName}</Typography>
          </Grid>

          {/* Flight Time & Duration */}
          <Grid item xs={3}>
            <Typography variant="h6" fontWeight="bold">
              {departureTime} - {arrivalTime}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {duration}
            </Typography>
          </Grid>

          {/* Stops Information */}
          <Grid item xs={2}>
            <Typography variant="body2">
              {stops} {stops === 1 ? "stop" : "stops"}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {stopLocations}
            </Typography>
          </Grid>

          {/* CO2 Emissions */}
          <Grid item xs={2}>
            <Typography variant="body2">{co2Emissions} kg CO₂</Typography>
            <Typography
              variant="caption"
              color={emissionImpact.includes("-") ? "green" : "red"}
            >
              {emissionImpact}
            </Typography>
          </Grid>

          {/* Price */}
          <Grid item xs={3} textAlign="right">
            <Typography variant="h6" fontWeight="bold" color="green">
              {currency} {price}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              round trip
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
