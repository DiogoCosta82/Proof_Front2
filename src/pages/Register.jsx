import React, { useState } from "react";
import swal from "sweetalert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../components/style/register.css";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    type_user: "",
    enterprise: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem(
          "token",
          JSON.stringify(data.authorisation.token)
        );
        sessionStorage.setItem("id", JSON.stringify(data.user.id));
        sessionStorage.setItem("type", JSON.stringify(data.user.type_user));
        sessionStorage.setItem(
          "entreprise",
          JSON.stringify(data.user.entreprise)
        );
        sessionStorage.setItem("email", JSON.stringify(data.user.email));

        swal("Inscription réussie !", "success");
        navigate("/login");
      } else {
        const errorData = await response.json();
        swal("Erreur d'inscription", errorData.message, "error");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
      swal(
        "Erreur",
        "Une erreur s'est produite lors de l'inscription",
        "error"
      );
    }
  };

  return (
    <div className="container">
      <div className="row mb-5 pt-2">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card p-3 mb-2 text-white">
              <h5 className="card-title text-center">Création du compte</h5>
              <div className="form-group">
                <input
                  name="firstname"
                  value={userData.firstname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Prénom"
                />
              </div>
              <div className="form-group">
                <input
                  name="lastname"
                  value={userData.lastname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nom"
                />
              </div>
              <div className="form-group">
                <select
                  name="type_user"
                  className="form-select"
                  value={userData.type_user}
                  onChange={handleChange}
                >
                  <option value="">Sélection du profil</option>
                  <option value="Admin">Administrateur</option>
                  <option value="User">Utilisateur</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  name="enterprise"
                  value={userData.enterprise}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Entreprise"
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Mot de Passe"
                />
              </div>
              <button
                className="btn btn-warning border text-white fw-bold"
                onClick={handleSubmit}
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
