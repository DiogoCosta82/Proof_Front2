import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Disconnect() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  fetch("http://127.0.0.1:8000/api/logout", requestOptions)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`Failed to logout: ${response.statusText}`);
      }
    })
    .then((data) => {
      if (data.status === "success") {
        Swal.fire("Succès", "Vous êtes déconnecté !", "success");
        sessionStorage.clear;

        navigate("/");
      } else {
        Swal.fire(
          "Erreur",
          "Une erreur s'est produite lors de la déconnexion",
          "error"
        );
      }
    })
    .catch((error) => {
      Swal.fire(
        "Erreur",
        `Une erreur inattendue s'est produite: ${error}`,
        "error"
      );
    });
}

export default Disconnect;
