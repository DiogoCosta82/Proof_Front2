import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import forgot from "../Components/img/forgot.png";
import Footer from "../models/Footer";

const ForgetPWD = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://127.0.0.1:8000/api/forget-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    if (response.ok) {
      const data = await response.json();
      setStatus(data.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      const errorText = await response.text();
      console.error("Error:", response.status, errorText);
      swal(
        "Error",
        "Quelque chose c'est mal passé, veuillez réessayer plus tard!",
        "error"
      );
    }
  };

  return (
    <div className="container3">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card_2">
            <div className="card-body">
              <h5 className="card-title text-center text-white">
                Mot de Passe Oublié
              </h5>
              <img
                src={forgot}
                className="card-img-top mx-auto"
                alt="Forgot Password"
              />
              <div className="form-group">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Saisissez votre email"
                    className="form-control"
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-warning fw-bold mt-2"
                  >
                    Envoyez-moi un email
                  </button>
                  {status && <div className="mt-2 text-white">{status}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPWD;
