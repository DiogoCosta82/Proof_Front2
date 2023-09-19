import { useState } from "react";
import swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importez les icônes des yeux
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
    confirmPassword: ""
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
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/register",
        options
      );
      console.log(response);

      const data = await response.json();
      console.log(data)
      if (data.status === "success") {
        swal.fire("Inscription réussie !", "Nouvel utilisateur créé","success");

        navigate("/");
      } else {
        swal.fire("L'enregistrement n'a pas réussi!", data.message, "error");
      }
    } catch (error) {
      if (error.response) {
        // Le serveur a répondu avec un code d'erreur HTTP
        swal.fire("Erreur", "Une erreur s'est produite lors de l'enregistrement", "error");
      } else {
        // Une erreur s'est produite lors de la requête
        swal.fire("Erreur", "Une erreur s'est produite lors de la requête", "error");
      }
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
                  <option value="Selection du profil">
                    Sélection du profil
                  </option>
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
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Mot de Passe"
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
              <div className="form-group">
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Confirmez le Mot de Passe"
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
