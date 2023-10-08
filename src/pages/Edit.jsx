import { Card, Col, Form, Row } from "react-bootstrap";
import Footer from "../models/Footer";
import Header_Admin from "../models/Header_Admin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";

function EditProfil() {
  const navigate = useNavigate();

  const firstname = JSON.parse(sessionStorage.getItem("firstname"));
  const lastname = JSON.parse(sessionStorage.getItem("lastname"));
  const email = JSON.parse(sessionStorage.getItem("email"));
  const enterprise = JSON.parse(sessionStorage.getItem("enterprise"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userId = JSON.parse(sessionStorage.getItem("user_id")); // Ajoutez ceci pour récupérer l'ID de l'utilisateur

  const [userData, setUserData] = useState({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: "", // Vous pouvez ajouter le champ du mot de passe si nécessaire
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
    <div className="container-fluid">
      <Header_Admin name="Edit Your Profile" />
      <div className="row mb-5 pt-2"></div>
      <div className="row wrap">
        <Card>
          <Form className="colorBisque">
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Firstname:</Form.Label>
                <Form.Control
                  name="firstname"
                  defaultValue={firstname}
                  onChange={handleChange}
                  type="text"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Lastname:</Form.Label>
                <Form.Control
                  name="lastname"
                  defaultValue={lastname}
                  onChange={handleChange}
                  type="text"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Enterprise</Form.Label>
                <Form.Control
                  name="enterprise"
                  value={enterprise}
                  type="text"
                  disabled
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  name="email"
                  defaultValue={email}
                  onChange={handleChange}
                  type="email"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>password:</Form.Label>
                <Form.Control
                  name="password"
                  onChange={handleChange}
                  type="password"
                />
              </Form.Group>
            </Row>
            <button
              className="btn btn-dark border border-warning"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Form>
          <div>
            <button
              onClick={() => swalDelete()}
              className="btn btn-dark border border-danger mt-2 mb-2"
            >
              Delete User
            </button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfil;
