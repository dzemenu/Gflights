import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AirportData {
  data: any[];
}

interface AirportState {
  data: AirportData | null;
  loading: boolean;
  error: string | null;
}

const getDeviceLocale = (): string => {
  const locale = navigator.language || "en-US";
  return locale;
};

export const fetchAirportData = createAsyncThunk<
  AirportData,
  string,
  { rejectValue: string }
>("airport/fetchData", async (query, { rejectWithValue }) => {
  const locale = getDeviceLocale();

  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_FLIGHTS_URL
      }/searchAirport?query=${query}&locale=${locale}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key": `${import.meta.env.VITE_FLIGHTS_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return rejectWithValue("Failed to fetch airport data");
    }

    const data: AirportData = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(
      "Network error occurred while fetching airport data"
    );
  }
});

const airportSlice = createSlice({
  name: "airport",
  initialState: {
    data: null,
    loading: false,
    error: null,
  } as AirportState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirportData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAirportData.fulfilled,
        (state, action: PayloadAction<AirportData>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchAirportData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectAirportData = (state: { airport: AirportState }) =>
  state.airport.data;
export const selectLoading = (state: { airport: AirportState }) =>
  state.airport.loading;
export const selectError = (state: { airport: AirportState }) =>
  state.airport.error;

export default airportSlice.reducer;
