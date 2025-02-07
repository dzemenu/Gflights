import React from "react";
import { render, screen } from "@testing-library/react";
import FlightCard from "./FlightCard";

describe("FlightCard Component", () => {
  const mockProps = {
    airlineLogo: "https://example.com/logo.png",
    airlineName: "Mock Airlines",
    departureTime: "10:00 AM",
    arrivalTime: "1:00 PM",
    duration: "3h 0m",
    stops: 1,
    stopLocations: "London",
    co2Emissions: "120",
    emissionImpact: "-10%",
    price: "250",
    currency: "$",
  };

  it("renders without crashing", () => {
    render(<FlightCard {...mockProps} />);
    expect(screen.getByText(/Mock Airlines/i)).toBeInTheDocument();
  });

  it("displays flight details correctly", () => {
    render(<FlightCard {...mockProps} />);

    expect(screen.getByText("10:00 AM - 1:00 PM")).toBeInTheDocument();
    expect(screen.getByText("3h 0m")).toBeInTheDocument();
    expect(screen.getByText("1 stop")).toBeInTheDocument();
    expect(screen.getByText("London")).toBeInTheDocument();
    expect(screen.getByText("120 kg CO₂")).toBeInTheDocument();
    expect(screen.getByText("-10%")).toBeInTheDocument();
    expect(screen.getByText("$ 250")).toBeInTheDocument();
  });

  it("applies correct color to emission impact", () => {
    render(<FlightCard {...mockProps} />);

    const emissionImpact = screen.getByText("-10%");
    expect(emissionImpact).toHaveStyle("color: rgb(0, 128, 0)");
  });
});
