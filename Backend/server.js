const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Apple@#$12345!",
  database: "flight_booking"
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    return;
  }

  console.log("MySQL connected successfully!");
});

// GET ALL FLIGHTS
app.get("/api/flights", (req, res) => {
  db.query("SELECT * FROM flights", (err, results) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json(results);
  });
});

// SAVE BOOKING
app.post("/api/bookings", (req, res) => {
  const {
    flight_id,
    passenger_name,
    seat_number
  } = req.body;

  db.query(
    "INSERT INTO bookings (flight_id, passenger_name, seat_number) VALUES (?, ?, ?)",
    [flight_id, passenger_name, seat_number],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json({
        success: true,
        bookingId: result.insertId
      });
    }
  );
});

// START SERVER
app.listen(5000, () => {
  console.log(
    "Backend running on http://localhost:5000"
  );
});