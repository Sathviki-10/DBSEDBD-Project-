import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    passengerName: "",
    flightNumber: "",
    from: "",
    to: "",
    date: "",
    seat: "",
    classType: "Economy",
    price: 0,
  });

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
};