import { useNavigate } from "react-router-dom";

function BoardingPass() {

  const navigate = useNavigate();

  const flight =
    JSON.parse(localStorage.getItem("selectedFlight")) || {};

  const seats =
    JSON.parse(localStorage.getItem("selectedSeats")) || [];

  const passenger =
    JSON.parse(localStorage.getItem("passenger")) || {};

  const pnr =
    "PNR" +
    Math.floor(Math.random() * 1000000);

  return (
    <div className="boarding-page">

      <div className="boarding-pass">

        <div className="boarding-header">

          <h1>✈ BOARDING PASS</h1>

          <h2>{flight.airline}</h2>

        </div>

        <div className="boarding-grid">

          <div>
            <label>Passenger</label>
            <h3>{passenger.name}</h3>
          </div>

          <div>
            <label>Flight</label>
            <h3>{flight.flightNo}</h3>
          </div>

          <div>
            <label>From</label>
            <h3>{flight.from}</h3>
          </div>

          <div>
            <label>To</label>
            <h3>{flight.to}</h3>
          </div>

          <div>
            <label>Departure</label>
            <h3>{flight.departure}</h3>
          </div>

          <div>
            <label>Arrival</label>
            <h3>{flight.arrival}</h3>
          </div>

          <div>
            <label>Seats</label>
            <h3>{seats.join(", ")}</h3>
          </div>

          <div>
            <label>Gate</label>
            <h3>A12</h3>
          </div>

        </div>

        <div className="pnr-box">

          <h2>PNR: {pnr}</h2>

        </div>

        <div className="qr-box">

          QR CODE

        </div>

        <button
          className="print-btn"
          onClick={() => window.print()}
        >
          🖨 Print Boarding Pass
        </button>

        <button
          className="confirm-btn"
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>

      </div>

    </div>
  );
}

export default BoardingPass;