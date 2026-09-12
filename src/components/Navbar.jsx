function Navbar() {
  return (
    <nav
      style={{
        background: "#003566",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h2>✈ SkyAir Airlines</h2>

      <div>
        Home | Flights | Bookings
      </div>
    </nav>
  );
}

export default Navbar;