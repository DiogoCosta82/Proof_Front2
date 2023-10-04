import Footer from "../models/Footer";
import "../Components/style/home.css";
import fleche from "../Components/img/fleche.png";
import fond from "../Components/img/fond.png";
import logo from "../Components/img/logo.png";
import React from "react";

const Home = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div
          className="col-md-6 bg-image text-white text-center p-5 d-flex flex-column justify-content-center align-items-center h-100"
          style={{
            backgroundImage: `url(${fond})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="display-4">Agence</h1>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
            <h2>Votre agence d'accompagnement Qualiopi</h2>
          </div>
        </div>

        <div className="col-md-6 bg-light text-center p-5 d-flex flex-column justify-content-center align-items-center h-100">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h4 className="display-4">Prêt à vous lancer ? </h4>
          </div>
          <br />
          <div className="d-flex flex-row align-items-center">
            <p style={{ fontSize: "20px", margin: "0", marginRight: "10px" }}>
              Commencer
            </p>
            <a href="/login">
              <img
                src={fleche}
                alt="Flèche vers la droite"
                className="fleche"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
