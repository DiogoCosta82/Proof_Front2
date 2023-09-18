import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Disconnect() {
  const navigate = useNavigate();

  const token = JSON.parse(sessionStorage.getItem("token"));

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token} `);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/logout", requestOptions)
    .then((response) => {
      if (response.ok) {
        navigate("/");
        Swal.fire("Vous êtes déconnecté !", "success");
        sessionStorage.clear();
      } else {
        sessionStorage.clear();
        navigate("/");
      }
    })
    .catch((error) => {
      console.error(error);

      Swal.fire("Erreur", "Une erreur inattendue s'est produite", "error");
    });
}

export default Disconnect;
