import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FlightResults() {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/flights")
      .then((res) => res.json())
      .then((data) => {
        setFlights(data);
      })
      .catch((err) => {
        console.error("Error fetching flights:", err);
      });
  }, []);

  const getClassName = (airline) => {
    switch (airline) {
      case "IndiGo":
        return "flight-card indigo";
      case "Air India":
        return "flight-card airindia";
      case "SpiceJet":
        return "flight-card spicejet";
      case "Akasa Air":
        return "flight-card akasa";
      case "Vistara":
        return "flight-card vistara";
      case "Qatar Airways":
        return "flight-card qatar";
      case "Emirates":
        return "flight-card emirates";
      case "Singapore Airlines":
        return "flight-card singapore";
      case "British Airways":
        return "flight-card british";
      case "Lufthansa":
        return "flight-card lufthansa";
      default:
        return "flight-card";
    }
  };

  const selectFlight = (flight) => {
    localStorage.setItem(
      "selectedFlight",
      JSON.stringify(flight)
    );

    navigate("/seat-selection");
  };

  return (
    <div className="results-page">
      <h1>✈ Available Flights</h1>

      <div className="flights-container">
        {flights.map((flight) => (
          <div
            className={getClassName(flight.airline)}
            key={flight.flight_id}
          >
            <div className="airline-header">
              <div className="airline-logo">
                ✈
              </div>

              <div>
                <div className="airline-badge">
                  Premium Airline
                </div>

                <h2>{flight.airline}</h2>

                <p>
                  Flight No: {flight.flight_no}
                </p>
              </div>
            </div>

            <div className="flight-row">
              <div>
                <h3>{flight.departure_time}</h3>
                <p>{flight.from_city}</p>
              </div>

              <div className="duration">
                {flight.duration}
              </div>

              <div>
                <h3>{flight.arrival_time}</h3>
                <p>{flight.to_city}</p>
              </div>
            </div>

            <p>🧳 20kg Check-in Baggage Included</p>

            <div className="price">
              ₹ {flight.price}
            </div>

            <button
              className="confirm-btn"
              onClick={() => selectFlight(flight)}
            >
              Select Flight
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightResults;