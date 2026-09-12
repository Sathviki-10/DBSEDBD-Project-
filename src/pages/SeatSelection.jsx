import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeatSelection() {

  const navigate = useNavigate();

  const passengers =
    Number(localStorage.getItem("passengers")) || 1;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = Array.from(
    { length: 30 },
    (_, i) => i + 1
  );

  const cols = ["A","B","C","D","E","F"];

  const occupiedSeats = [
    "A2","B3","C4",
    "D2","E5","F1",
    "A15","C20","E25"
  ];

  const getSeatClass = (row) => {
    if(row <= 4) return "First Class";
    if(row <= 10) return "Business Class";
    return "Economy";
  };

  const getSeatPrice = (seat) => {

    const row =
      parseInt(
        seat.replace(/[A-Z]/g,"")
      );

    if(row <= 4) return 15000;
    if(row <= 10) return 9000;
    return 4500;
  };

  const handleSeatClick = (seat) => {

    if(selectedSeats.includes(seat)){

      setSelectedSeats(
        selectedSeats.filter(
          s => s !== seat
        )
      );

      return;
    }

    if(selectedSeats.length >= passengers){

      alert(
        `Only ${passengers} seat(s) can be selected`
      );

      return;
    }

    setSelectedSeats([
      ...selectedSeats,
      seat
    ]);
  };

  const totalPrice =
    selectedSeats.reduce(
      (sum, seat) =>
        sum + getSeatPrice(seat),
      0
    );

  const handleContinue = () => {

    if(
      selectedSeats.length !== passengers
    ){
      alert(
        `Please select ${passengers} seat(s)`
      );
      return;
    }

    localStorage.setItem(
      "selectedSeats",
      JSON.stringify(selectedSeats)
    );

    localStorage.setItem(
      "seatPrice",
      totalPrice
    );

    navigate("/passenger");
  };

  return (
    <div className="seat-page">

      <h1>
        ✈ Aircraft Seat Selection
      </h1>

      <h2>
        Passengers: {passengers}
      </h2>

      <div className="legend">

        <div className="legend-item">
          🟣 First Class
        </div>

        <div className="legend-item">
          🟡 Business
        </div>

        <div className="legend-item">
          🔵 Economy
        </div>

        <div className="legend-item">
          🔴 Occupied
        </div>

        <div className="legend-item">
          🟢 Selected
        </div>

      </div>

      <div className="aircraft">

        <div className="cockpit">
          COCKPIT
        </div>

        <div className="seat-grid">

          {rows.map((row) => (

            cols.map((col,index) => {

              const seat =
                `${col}${row}`;

              const occupied =
                occupiedSeats.includes(seat);

              let seatClass = "";

              if(row <= 4)
                seatClass =
                  "first-seat";

              else if(row <= 10)
                seatClass =
                  "business-seat";

              else
                seatClass =
                  "economy-seat";

              let finalClass =
                seatClass;

              if(occupied)
                finalClass =
                  "occupied-seat";

              if(
                selectedSeats.includes(seat)
              )
                finalClass =
                  "selected-seat";

              return (
                <>
                  {index === 3 && (
                    <div
                      className="aisle"
                    ></div>
                  )}

                  <button
                    key={seat}
                    disabled={occupied}
                    className={finalClass}
                    onClick={() =>
                      handleSeatClick(seat)
                    }
                  >
                    {seat}
                  </button>
                </>
              );
            })

          ))}

        </div>

      </div>

      <div className="selection-card">

        <h2>
          Selected Seats
        </h2>

        <p>
          {
            selectedSeats.length
              ? selectedSeats.join(", ")
              : "-"
          }
        </p>

        <p>
          Seats Selected:
          {" "}
          {selectedSeats.length}
          /
          {passengers}
        </p>

        <div className="price">
          ₹ {totalPrice}
        </div>

        <button
          className="confirm-btn"
          onClick={handleContinue}
        >
          Continue Booking
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;