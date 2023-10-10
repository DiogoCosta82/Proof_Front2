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
  const [typeUser, setTypeUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    // Récupérer le user_type du sessionStorage
    const type = sessionStorage.getItem("type_user");
    setTypeUser(type);

    // Vérifier si l'utilisateur a un dossier existant
    const checkDossier = async () => {
      const userId = sessionStorage.getItem("user_id"); // Récupérer le user_id depuis le sessionStorage
      const token = sessionStorage.getItem("token"); // Utilisez le token pour l'authentification

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/checkDossier?user_id=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Assurez-vous d'inclure le token d'authentification
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.n_dossier) {
            setDossierNumero(data.n_dossier);
            setAccordionsVisible(true); // Afficher les accordions si un dossier existe
          }
        } else {
          console.error("Erreur lors de la vérification du dossier");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du dossier", error);
      }
    };

    checkDossier();
  }, []);

  const createDossier = async () => {
    const randomNumero = Math.floor(Math.random() * 10000);
    const dossier = `proof-qual-${randomNumero}`;
    const userId = sessionStorage.getItem("user_id"); // Récupérer le user_id depuis le sessionStorage

    try {
      const response = await fetch("http://127.0.0.1:8000/api/createDossier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ n_dossier: dossier, user_id: userId }), // Envoyer le n_dossier et le user_id
      });

      if (response.ok) {
        setDossierNumero(dossier);
        setAccordionsVisible(true);
      } else {
        console.error("Erreur lors de la création du dossier");
      }
    } catch (error) {
      console.error("Erreur lors de la création du dossier", error);
    }
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
