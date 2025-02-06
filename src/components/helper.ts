interface Itinerary {
  id: string;
  price: {
    raw: number;
    formatted: string;
    pricingOptionId: string;
  };
  legs: {
    id: string;
    origin: {
      id: string;
      name: string;
      displayCode: string;
      city: string;
      country: string;
    };
    destination: {
      id: string;
      name: string;
      displayCode: string;
      city: string;
      country: string;
    };
    durationInMinutes: number;
    stopCount: number;
    departure: string;
    arrival: string;
    carriers: {
      marketing: {
        id: number;
        alternateId: string;
        logoUrl: string;
        name: string;
      }[];
    };
  }[];
}

const transformItineraries = (itineraries: Itinerary[]) => {
  return itineraries.map((itinerary) => {
    const leg = itinerary.legs[0];
    return {
      airlineLogo: leg.carriers.marketing[0]?.logoUrl || "",
      airlineName: leg.carriers.marketing[0]?.name || "Unknown Airline",
      departureTime: new Date(leg.departure).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      arrivalTime: new Date(leg.arrival).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      duration: `${Math.floor(leg.durationInMinutes / 60)} hr ${
        leg.durationInMinutes % 60
      } min`,
      stops: leg.stopCount,
      stopLocations: leg.stopCount > 0 ? "Via Stopover" : "Non-Stop",
      co2Emissions: "N/A",
      emissionImpact: "N/A",
      price: itinerary.price.formatted.replace("$", ""),
      currency: "USD",
    };
  });
};
export default transformItineraries;
