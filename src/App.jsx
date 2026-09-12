import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FlightResults from "./pages/FlightResults";
import SeatSelection from "./pages/SeatSelection";
import PassengerDetails from "./pages/PassengerDetails";
import Payment from "./pages/Payment";
import BoardingPass from "./pages/BoardingPass";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<FlightResults />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/passenger" element={<PassengerDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/boarding-pass" element={<BoardingPass />} />

        
      </Routes>
    </BrowserRouter>
  );
}


export default App;