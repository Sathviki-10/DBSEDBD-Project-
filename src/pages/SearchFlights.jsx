import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchFlights() {

  const navigate = useNavigate();

  const [flight, setFlight] = useState({
    from: "",
    to: "",
    date: "",
    classType: "Economy",
  });

  const handleSearch = () => {

    if (
      !flight.from ||
      !flight.to ||
      !flight.date
    ) {
      alert("Fill all details");
      return;
    }

    localStorage.setItem(
      "flight",
      JSON.stringify(flight)
    );

    navigate("/results");
  };

  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <h1>Search Flights</h1>

      <input
        placeholder="From"
        onChange={(e) =>
          setFlight({
            ...flight,
            from: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        placeholder="To"
        onChange={(e) =>
          setFlight({
            ...flight,
            to: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="date"
        onChange={(e) =>
          setFlight({
            ...flight,
            date: e.target.value,
          })
        }
      />

      <br /><br />

      <select
        onChange={(e) =>
          setFlight({
            ...flight,
            classType: e.target.value,
          })
        }
      >
        <option>Economy</option>
        <option>Business</option>
        <option>First</option>
      </select>

      <br /><br />

      <button onClick={handleSearch}>
        Search Flights
      </button>

    </div>
  );
}

export default SearchFlights;