import { useNavigate } from "react-router-dom";

function FlightResults() {

  const navigate = useNavigate();

  const flights = [
    {
      airline: "IndiGo",
      flightNo: "6E-2451",
      from: "Hyderabad",
      to: "Delhi",
      departure: "06:00 AM",
      arrival: "08:20 AM",
      duration: "2h 20m",
      price: 4999,
      refundable: true
    },
    {
      airline: "Air India",
      flightNo: "AI-202",
      from: "Hyderabad",
      to: "Delhi",
      departure: "08:30 AM",
      arrival: "10:50 AM",
      duration: "2h 20m",
      price: 6200,
      refundable: true
    },
    {
      airline: "SpiceJet",
      flightNo: "SG-810",
      from: "Hyderabad",
      to: "Delhi",
      departure: "09:45 AM",
      arrival: "12:05 PM",
      duration: "2h 20m",
      price: 5400,
      refundable: false
    },
    {
      airline: "Akasa Air",
      flightNo: "QP-145",
      from: "Hyderabad",
      to: "Delhi",
      departure: "11:00 AM",
      arrival: "01:15 PM",
      duration: "2h 15m",
      price: 5800,
      refundable: true
    },
    {
      airline: "Vistara",
      flightNo: "UK-987",
      from: "Hyderabad",
      to: "Delhi",
      departure: "01:20 PM",
      arrival: "03:40 PM",
      duration: "2h 20m",
      price: 6900,
      refundable: true
    },
    {
      airline: "Qatar Airways",
      flightNo: "QR-501",
      from: "Hyderabad",
      to: "Dubai",
      departure: "03:00 PM",
      arrival: "05:30 PM",
      duration: "2h 30m",
      price: 15999,
      refundable: true
    },
    {
      airline: "Emirates",
      flightNo: "EK-527",
      from: "Hyderabad",
      to: "Dubai",
      departure: "04:15 PM",
      arrival: "06:40 PM",
      duration: "2h 25m",
      price: 17999,
      refundable: true
    },
    {
      airline: "Singapore Airlines",
      flightNo: "SQ-403",
      from: "Hyderabad",
      to: "Singapore",
      departure: "06:30 PM",
      arrival: "11:20 PM",
      duration: "4h 50m",
      price: 24999,
      refundable: true
    },
    {
      airline: "British Airways",
      flightNo: "BA-276",
      from: "Hyderabad",
      to: "London",
      departure: "09:00 PM",
      arrival: "05:45 AM",
      duration: "9h 45m",
      price: 45999,
      refundable: true
    },
    {
      airline: "Lufthansa",
      flightNo: "LH-761",
      from: "Hyderabad",
      to: "Frankfurt",
      departure: "10:30 PM",
      arrival: "06:10 AM",
      duration: "8h 40m",
      price: 42999,
      refundable: true
    }
  ];

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
            key={flight.flightNo}
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
                  Flight No: {flight.flightNo}
                </p>

              </div>

            </div>

            <div className="flight-row">

              <div>
                <h3>{flight.departure}</h3>
                <p>{flight.from}</p>
              </div>

              <div className="duration">
                {flight.duration}
              </div>

              <div>
                <h3>{flight.arrival}</h3>
                <p>{flight.to}</p>
              </div>

            </div>

            <p
              className={
                flight.refundable
                  ? "refundable"
                  : "non-refundable"
              }
            >
              {flight.refundable
                ? "✅ Refundable Ticket"
                : "❌ Non Refundable"}
            </p>

            <p>
              🧳 20kg Check-in Baggage Included
            </p>

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