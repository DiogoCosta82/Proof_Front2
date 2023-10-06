import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header_User from "../models/Header_User";
import Footer from "../models/Footer";
import "../Components/style/home.css";
import swal from "sweetalert";
import reset from "../Components/img/reset.jpg";

const ResetPWD = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const token = path.split("/")[2];
  console.log(token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://127.0.0.1:8000/api/reset-password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
        token: token,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("body", data);
      navigate("/login");
    } else {
      const errorText = await response.text();
      console.error("Error:", response.status, errorText);
      swal(
        "Error",
        "Quelque chose c'est mal passé, veuillez réessayer plus tard",
        "error"
      );
    }
  };

  return (
    <div className="container4">
      <Header_User />
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card_2">
            <div className="card-body">
              <h5 className="card-title text-center text-white">
                Réinitialiser votre mot de passe
              </h5>
              <img src={reset} className="card-img-top mx-auto" alt="Reset" />
              <div className="form-group">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Saisissez votre email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Saisissez votre nouveau mot de passe"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  required
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Confirmez votre nouveau mot de passe"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-outline-success fw-bold">
                Réinitialiser le mot de passe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPWD;
