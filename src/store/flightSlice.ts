import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Flight {
  id: string;
  price: number;
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  itineraries: any[];
}

interface FlightSearchResponse {
  status: boolean;
  data: Flight[];
}

interface FlightSearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  date: string;
  returnDate?: string;
  cabinClass: "economy" | "business" | "first";
  adults: number;
  sortBy: "best" | "cheapest" | "fastest";
  currency: string;
  market: string;
  countryCode: string;
}

export const flightsApi = createApi({
  reducerPath: "flightsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_FLIGHTS_URL_V2,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", "sky-scrapper.p.rapidapi.com");
      headers.set("x-rapidapi-key", import.meta.env.VITE_FLIGHTS_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchFlights: builder.query<FlightSearchResponse, FlightSearchParams>({
      query: ({
        originSkyId,
        destinationSkyId,
        originEntityId,
        destinationEntityId,
        date,
        returnDate,
        cabinClass,
        adults,
        sortBy,
        currency,
        market,
        countryCode,
      }) => {
        const params = new URLSearchParams({
          originSkyId,
          destinationSkyId,
          originEntityId,
          destinationEntityId,
          date,
          cabinClass,
          adults: adults.toString(),
          sortBy,
          currency,
          market,
          countryCode,
          ...(returnDate ? { returnDate } : {}),
        });

        return `searchFlights?${params.toString()}`;
      },
    }),
  }),
});

export const { useSearchFlightsQuery } = flightsApi;
