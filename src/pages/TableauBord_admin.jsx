import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/tbord.css";
import Critere from "../models/Criteres";
import Header_Admin from "../models/Header_Admin";
import Header_User from "../models/Header_User";
import Footer from "../models/Footer";

function TableauBord({ critereData }) {
  const [dossierNumero, setDossierNumero] = useState(null);
  const [accordionsVisible, setAccordionsVisible] = useState(false);
  const [typeUser, settypeUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    // Récupérer le user_type du sessionStorage
    const type = sessionStorage.getItem("type_user");
    settypeUser(type);
  }, []);

  const createDossier = () => {
    // Générer un numéro de dossier aléatoire
    const randomNumero = Math.floor(Math.random() * 10000);
    const dossier = `proof-qual-${randomNumero}`;

    // Afficher le numéro de dossier et les accordions
    setDossierNumero(dossier);
    setAccordionsVisible(true);
  };

  return (
    <div className="tableau-bord">
      {/* Afficher Header si user_Type est "admin", sinon Header2 */}
      {typeUser === "admin" ? <Header_Admin /> : <Header_User />}
      <div className="colonne-gauche">
        {dossierNumero && (
          <div className="numero-dossier">
            <h3>
              Dossier : <h5>{dossierNumero}</h5>
            </h3>
          </div>
        )}
        {!dossierNumero && (
          <button className="btn btn-success fw-bold" onClick={createDossier}>
            Créer Dossier
          </button>
        )}
      </div>

      {accordionsVisible && (
        <div className="colonne-droite">
          <Critere critereData={critereData} />
          <div style={{ height: "100px" }}></div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default TableauBord;
