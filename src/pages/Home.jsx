import Navbar from "../components/Navbar";
import FlightSearch from "../components/FlightSearch";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          Fly Smarter with SkyAir ✈
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "30px",
          }}
        >
          Book flights worldwide at the best prices
        </p>

        <FlightSearch />
      </section>

      {/* POPULAR DESTINATIONS */}

      <section
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2>Popular Destinations</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div className="city-card">Hyderabad</div>
          <div className="city-card">Delhi</div>
          <div className="city-card">Mumbai</div>
          <div className="city-card">Dubai</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section
        style={{
          padding: "50px",
          background: "#f4f6f8",
          textAlign: "center",
        }}
      >
        <h2>Why Choose SkyAir?</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div>✈ Best Airlines</div>
          <div>💰 Lowest Fares</div>
          <div>🕒 24/7 Support</div>
          <div>🌍 Global Routes</div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;