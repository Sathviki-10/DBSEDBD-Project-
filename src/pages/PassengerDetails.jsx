import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PassengerDetails() {

  const navigate = useNavigate();

  const [passenger, setPassenger] = useState({
    fullName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    passport: "",
    nationality: "",
    meal: "Veg",
    assistance: false
  });

  const handleSubmit = () => {

    if (
      !passenger.fullName ||
      !passenger.email ||
      !passenger.phone
    ) {
      alert("Please fill required fields");
      return;
    }

    localStorage.setItem(
      "passengerData",
      JSON.stringify(passenger)
    );

    navigate("/payment");
  };

  return (
    <div className="passenger-page">

      <div className="passenger-card">

        <h1>Passenger Information</h1>

        <input
          placeholder="Full Name"
          onChange={(e)=>
            setPassenger({
              ...passenger,
              fullName:e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Age"
          onChange={(e)=>
            setPassenger({
              ...passenger,
              age:e.target.value
            })
          }
        />

        <select
          onChange={(e)=>
            setPassenger({
              ...passenger,
              gender:e.target.value
            })
          }
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          placeholder="Email"
          onChange={(e)=>
            setPassenger({
              ...passenger,
              email:e.target.value
            })
          }
        />

        <input
          placeholder="Phone Number"
          onChange={(e)=>
            setPassenger({
              ...passenger,
              phone:e.target.value
            })
          }
        />

        <input
          placeholder="Passport Number"
          onChange={(e)=>
            setPassenger({
              ...passenger,
              passport:e.target.value
            })
          }
        />

        <input
          placeholder="Nationality"
          onChange={(e)=>
            setPassenger({
              ...passenger,
              nationality:e.target.value
            })
          }
        />

        <select
          onChange={(e)=>
            setPassenger({
              ...passenger,
              meal:e.target.value
            })
          }
        >
          <option>Veg</option>
          <option>Non Veg</option>
          <option>Vegan</option>
        </select>

        <label>
          <input
            type="checkbox"
            onChange={(e)=>
              setPassenger({
                ...passenger,
                assistance:e.target.checked
              })
            }
          />
          Need Special Assistance
        </label>

        <button
          className="confirm-btn"
          onClick={handleSubmit}
        >
          Continue to Payment
        </button>

      </div>

    </div>
  );
}

export default PassengerDetails;