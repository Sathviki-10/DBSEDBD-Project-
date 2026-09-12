import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";

function FlightSearch() {

  const navigate = useNavigate();

  const cities = [
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Pune", label: "Pune" },
    { value: "Dubai", label: "Dubai" },
    { value: "Singapore", label: "Singapore" },
    { value: "London", label: "London" }
  ];

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      minHeight: "55px",
      borderRadius: "12px",
      border: "2px solid #3b82f6"
    }),

    option: (provided, state) => ({
      ...provided,
      color: "#000",
      backgroundColor: state.isFocused
        ? "#dbeafe"
        : "#fff"
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#000"
    }),

    input: (provided) => ({
      ...provided,
      color: "#000"
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#666"
    })
  };

  const [form, setForm] = useState({
    from: "",
    to: "",
    departure: "",
    passengers: 1,
    classType: "Economy"
  });

  const searchFlights = () => {

    if (
      !form.from ||
      !form.to ||
      !form.departure
    ) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "searchData",
      JSON.stringify(form)
    );

    localStorage.setItem(
      "passengers",
      form.passengers
    );

    navigate("/results");
  };

  return (
    <div className="search-card">

      <h2>✈ Search Flights</h2>

      <label>From</label>

      <Select
        options={cities}
        styles={customSelectStyles}
        placeholder="Type city..."
        onChange={(selected) =>
          setForm({
            ...form,
            from: selected.value
          })
        }
      />

      <br />

      <label>To</label>

      <Select
        options={cities}
        styles={customSelectStyles}
        placeholder="Type destination..."
        onChange={(selected) =>
          setForm({
            ...form,
            to: selected.value
          })
        }
      />

      <br />

      <label>Departure Date</label>

      <input
        type="date"
        onChange={(e) =>
          setForm({
            ...form,
            departure: e.target.value
          })
        }
      />

      <br />
      <br />

      <label>Passengers</label>

      <select
        value={form.passengers}
        onChange={(e) =>
          setForm({
            ...form,
            passengers: Number(e.target.value)
          })
        }
      >
        <option value="1">1 Passenger</option>
        <option value="2">2 Passengers</option>
        <option value="3">3 Passengers</option>
        <option value="4">4 Passengers</option>
        <option value="5">5 Passengers</option>
      </select>

      <br />
      <br />

      <label>Travel Class</label>

      <select
        value={form.classType}
        onChange={(e) =>
          setForm({
            ...form,
            classType: e.target.value
          })
        }
      >
        <option value="Economy">Economy</option>
        <option value="Business">Business</option>
        <option value="First">First Class</option>
      </select>

      <br />
      <br />

      <button
        className="confirm-btn"
        onClick={searchFlights}
      >
        Search Flights
      </button>

    </div>
  );
}

export default FlightSearch;