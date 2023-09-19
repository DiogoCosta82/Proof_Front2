import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import login from "../Components/img/login.jpg";
import Footer from "../models/ModelsFooter";
import "../Components/style/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log(response);
      if (response.status === 200) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        console.log(data.token);
        sessionStorage.setItem("id", data.user.id);
        sessionStorage.setItem("email", data.user.email);
        sessionStorage.setItem("type_user", data.user.type_user);

        swal.fire("Bienvenue !", "Vous êtes connecté !", "success");
        navigate("/TableauBord");
      } else if (response.status === 401) {
        swal.fire(
          "Échec de la connexion!",
          "Confirmez l'e-mail et/ou le mot de passe",
          "error"
        );
      } else {
        swal.fire(
          "Erreur de connexion!",
          "Une erreur s'est produite lors de la connexion",
          "error"
        );
      }
    } catch (error) {
      swal.fire(
        "Erreur",
        "Une erreur s'est produite lors de la connexion",
        "error"
      );
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card_2">
            <div className="card-body">
              <h5 className="card-title text-center text-white">
                Connexion Utilisateur
              </h5>
              <img src={login} className="card-img-top mx-auto" alt="Login" />
              <div className="form-group">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Adresse email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Mot de passe"
                />
                <br />
                <strong>
                  <a
                    className="linkForget font-weight-bolder font-size-medium text-decoration-none"
                    onClick={() => navigate("/forget-password")}
                    style={{ cursor: "pointer" }}
                  >
                    Mot de passe oublié?
                  </a>
                </strong>
              </div>
              <button
                className="btn btn-outline-warning fw-bold"
                onClick={handleSubmit}
              >
                Connexion
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
