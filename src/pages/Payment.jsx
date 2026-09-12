import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment() {

  const navigate = useNavigate();

  const flight =
    JSON.parse(localStorage.getItem("selectedFlight")) || {};

  const seats =
    JSON.parse(localStorage.getItem("selectedSeats")) || [];

  const seatPrice =
    Number(localStorage.getItem("seatPrice")) || 0;

  const totalAmount =
    seatPrice * seats.length;

  const [paymentMethod, setPaymentMethod] =
    useState("Card");

  const handlePayment = () => {

    const bookingData = {
      airline: flight.airline,
      flightNo: flight.flightNo,
      from: flight.from,
      to: flight.to,
      departure: flight.departure,
      arrival: flight.arrival,
      seats: seats,
      amount: totalAmount,
      pnr:
        "PNR" +
        Math.floor(
          100000 + Math.random() * 900000
        )
    };

    localStorage.setItem(
      "boardingPass",
      JSON.stringify(bookingData)
    );

    alert(
      `✅ Payment Successful!

Airline: ${flight.airline}
Seats: ${seats.join(", ")}
Amount Paid: ₹${totalAmount}`
    );

    navigate("/boarding-pass");
  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        <h1>💳 Secure Payment</h1>

        <div className="booking-summary">

          <h2>Booking Summary</h2>

          <p>
            <strong>Airline:</strong>{" "}
            {flight.airline}
          </p>

          <p>
            <strong>Flight No:</strong>{" "}
            {flight.flightNo}
          </p>

          <p>
            <strong>Seats:</strong>{" "}
            {seats.join(", ")}
          </p>

          <p>
            <strong>Passengers:</strong>{" "}
            {seats.length}
          </p>

          <div className="amount-box">
            ₹ {totalAmount}
          </div>

        </div>

        <h2>Select Payment Method</h2>

        <div className="payment-methods">

          <button
            className={
              paymentMethod === "Card"
                ? "method active"
                : "method"
            }
            onClick={() =>
              setPaymentMethod("Card")
            }
          >
            💳 Card
          </button>

          <button
            className={
              paymentMethod === "UPI"
                ? "method active"
                : "method"
            }
            onClick={() =>
              setPaymentMethod("UPI")
            }
          >
            📱 UPI
          </button>

          <button
            className={
              paymentMethod === "NetBanking"
                ? "method active"
                : "method"
            }
            onClick={() =>
              setPaymentMethod("NetBanking")
            }
          >
            🏦 Net Banking
          </button>

        </div>

        {/* UPI SECTION */}

        {paymentMethod === "UPI" && (

          <div className="upi-section">

            <h3>📱 Scan QR & Pay</h3>

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=airlinebooking@upi&pn=AirlineBooking"
              alt="UPI QR"
              className="upi-qr"
            />

            <p>
              UPI ID:
              airlinebooking@upi
            </p>

            <input
              type="text"
              placeholder="Enter UPI ID"
            />

          </div>

        )}

        {/* CARD PAYMENT */}

        {paymentMethod === "Card" && (

          <>
            <input
              type="text"
              placeholder="Card Holder Name"
            />

            <input
              type="text"
              placeholder="Card Number"
            />

            <div className="payment-row">

              <input
                type="text"
                placeholder="MM/YY"
              />

              <input
                type="password"
                placeholder="CVV"
              />

            </div>
          </>

        )}

        {/* NET BANKING */}

        {paymentMethod === "NetBanking" && (

          <select
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "20px",
              borderRadius: "12px"
            }}
          >
            <option>
              Select Bank
            </option>

            <option>
              SBI
            </option>

            <option>
              HDFC
            </option>

            <option>
              ICICI
            </option>

            <option>
              Axis Bank
            </option>

            <option>
              Kotak Mahindra
            </option>

          </select>

        )}

        <button
          className="pay-btn"
          onClick={handlePayment}
        >
          Pay ₹ {totalAmount}
        </button>

      </div>

    </div>
  );
}

export default Payment;