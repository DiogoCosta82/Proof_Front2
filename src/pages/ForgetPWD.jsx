import { useState } from "react";
import swal from "sweetalert";
import forgot from "../Components/img/forgot.png";
import Header_User from "../models/Header_User";
import Footer from "../models/Footer";

function ForgetPWD() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );

      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      swal(
        "Error",
        "Quelque chose c'est mal passé, veuillez réessayer plus tard!",
        "error"
      );
      setStatus("Veuillez réessayer plus tard!");
    }
  }

  return (
    <div className="container3">
      <Header_User />
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
                </form>
              </div>
              <button
                type="submit"
                className="btn btn-outline-warning fw-bold mt-2"
              >
                Envoyez-moi un email
              </button>
              {status && <div className="mt-2 text-white">{status}</div>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgetPWD;
