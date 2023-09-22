import { useState } from "react";
import swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importez les icônes des yeux
import "../components/style/register.css";
import regi from "../Components/img/regi.jpg";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    type_user: "",
    enterprise: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/register",
        options
      );
      console.log(response);

      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        swal.fire(
          "Inscription réussie !",
          "Nouvel utilisateur créé",
          "success"
        );

        navigate("/");
      } else {
        swal.fire("L'enregistrement n'a pas réussi!", data.message, "error");
      }
    } catch (error) {
      if (error.response) {
        // Le serveur a répondu avec un code d'erreur HTTP
        swal.fire(
          "Erreur",
          "Une erreur s'est produite lors de l'enregistrement",
          "error"
        );
      } else {
        // Une erreur s'est produite lors de la requête
        swal.fire(
          "Erreur",
          "Une erreur s'est produite lors de la requête",
          "error"
        );
      }
    }
  };

  return (
    <div className="container2">
      <div className="row mb-5 pt-2">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card p-3 mb-4 text-white">
              <h5 className="card-title text-center">
                Création compte utilisateur
              </h5>
              <img src={regi} className="card-img-top mx-auto" alt="Login" />
              <div className="form-group mb-3">
                <label>Profil utilisateur</label>
                <select
                  name="type_user"
                  className="form-select"
                  value={userData.type_user}
                  onChange={handleChange}
                >
                  <option value="Selection du profil"></option>
                  <option value="Admin">Administrateur</option>
                  <option value="User">Utilisateur</option>
                </select>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Prénom</label>
                    <input
                      name="firstname"
                      value={userData.firstname}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Nom</label>
                    <input
                      name="lastname"
                      value={userData.lastname}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Entreprise</label>
                    <input
                      name="enterprise"
                      value={userData.enterprise}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      className="form-control mb-3"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Mot de Passe</label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span
                        className="input-group-text"
                        onClick={toggleShowPassword}
                        style={{ cursor: "pointer" }}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirmez le Mot de Passe</label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span
                        className="input-group-text"
                        onClick={toggleShowConfirmPassword}
                        style={{ cursor: "pointer" }}
                      >
                        {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-warning fw-bold"
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
