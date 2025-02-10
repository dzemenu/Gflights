# **Responsive Google Flights Clone (React)**

This project is a responsive version of Google Flights built using **React**, **Material-UI (MUI)**, and powered by the **Sky Scrapper API** from RapidAPI. The app allows users to search for flights.

## **Features**
- **Flight Search**: Search for flights by entering departure and destination locations, travel dates, and the number of passengers.
- **Responsive Design**: Fully responsive interface that adjusts seamlessly across all device sizes (mobile, tablet, desktop).
- **Flight Listings**: Displays flight results with details such as airline, price, departure time, and travel duration.
- **Material UI (MUI)**: Designed using Material UI components for a sleek and modern look.

## **Technologies Used**
- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React components that implement Google's Material Design.
- **Sky Scrapper API**: Provides flight data via RapidAPI.
- **Redux RTK**: For making HTTP requests to the Sky Scrapper API.

## **Setup & Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dzemenu/Gflights.git
1. **Add env file**:
     Add 
     VITE_FLIGHTS_URL=https://sky-scrapper.p.rapidapi.com/api/v1/flights
     VITE_FLIGHTS_URL_V2=https://sky-scrapper.p.rapidapi.com/api/v2/flights
     VITE_FLIGHTS_API_KEY=
