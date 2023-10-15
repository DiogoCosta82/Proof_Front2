import { Card, Col, Form, Row } from "react-bootstrap";
import Footer from "../models/Footer";
import Header_Admin from "../models/Header_Admin";
import Header_User from "../models/Header_User";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importez les icônes des yeux

function EditProfil() {
  const navigate = useNavigate();

  const firstname = sessionStorage.getItem("firstname");
  const lastname = sessionStorage.getItem("lastname");
  const email = sessionStorage.getItem("email");
  const enterprise = sessionStorage.getItem("enterprise");
  const token = sessionStorage.getItem("token");
  const type_user = sessionStorage.getItem("type_user");
  const userId = sessionStorage.getItem("user_id"); // Ajoutez ceci pour récupérer l'ID de l'utilisateur

  const [userData, setUserData] = useState({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: "",
    type_user: "",
    enterprise: enterprise,
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
      var myHeaders = new Headers();
      myHeaders.append("token", token);

      // Mettez à jour le formulaire pour inclure l'ID de l'utilisateur
      var formdata = new FormData();
      formdata.append("user_id", userId); // Ajoutez l'ID de l'utilisateur
      formdata.append("token", token);
      formdata.append("firstname", userData.firstname);
      formdata.append("lastname", userData.lastname);
      formdata.append("email", userData.email);
      formdata.append("password", userData.password);
      formdata.append("enterprise", userData.enterprise);

      var requestOptions = {
        method: "POST", // Assurez-vous que votre backend gère correctement la mise à jour (POST)
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/update",
        requestOptions
      );
      const data = await response.json();
      console.log("data", data);
      if (data.status === "success") {
        sessionStorage.clear();
        sessionStorage.setItem("token", JSON.stringify(data.token));
        sessionStorage.setItem("user_id", JSON.stringify(data.user_id));
        sessionStorage.setItem("firstname", JSON.stringify(data.firstname));
        sessionStorage.setItem("lastname", JSON.stringify(data.lastname));
        sessionStorage.setItem("email", JSON.stringify(data.email));
        sessionStorage.setItem("enterprise", JSON.stringify(data.enterprise));

        swal(
          "Edition successful!",
          `Votre profil a été mis à jour !`,
          "success"
        );
        navigate("/");
      } else {
        swal("Edition failed!", data.message, "error");
      }
    } catch (error) {
      console.error("Error during Edition:", error);
      swal("Error", "Une erreur s'est produite lors de l'édition", "error");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleDelete = () => {
    // Utilisez Swal pour demander confirmation à l'utilisateur
    swalDelete();
  };

  function swalDelete() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Vous êtes sur?",
        text: "Vous ne pourrez pas revenir en arrière !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui, supprime-le !",
        cancelButtonText: "Non, annulez !",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire("Supprimé !", "A bientôt !", "success");

          const token = JSON.parse(sessionStorage.getItem("token"));

          var myHeaders = new Headers();
          myHeaders.append("token", token);

          var requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",
          };

          fetch("http://127.0.0.1:8000/api/delete", requestOptions)
            .then((status) => {
              console.log("status", status);
              if (status.success) {
                navigate("/");
                Swal.fire("A bientôt !", "Utilisateur supprimé !", "success");
                sessionStorage.clear();
              } else {
                Swal.fire(
                  "Error",
                  "Une erreur inattendue s'est produite",
                  "error"
                );
              }
            })
            .catch((error) => {
              console.error(error);

              Swal.fire(
                "Error",
                "Une erreur inattendue s'est produite",
                "error"
              );
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Annulé",
            "Votre utilisateur est encore activé",
            "error"
          );
        }
      });
  }

  return (
    <div className="container2">
      {type_user === "admin" ? <Header_Admin /> : <Header_User />}
      <div className="row mb-5 pt-2">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card p-3 mb-4 text-white">
              <h5 className="card-title text-center">
                Edition du profil utilisateur
              </h5>
              {/* ... (Vous pouvez ajouter une image ici comme dans le fichier Register) */}

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
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label>Mot de passe</label>
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
                </div>
              </div>

              <button
                className="btn btn-outline-warning fw-bold"
                onClick={handleSubmit}
              >
                Mettre à jour
              </button>

              <button
                onClick={() => swalDelete()}
                className="btn btn-outline-danger fw-bold mt-2 mb-2"
              >
                Supprimer l'utilisateur
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfil;
