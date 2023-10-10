import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/tbord.css";
import critereData from "../models/critereData.json";
import Header_Admin from "../models/Header_Admin";
import Footer from "../models/Footer";

function TableauBord_admin() {
  const [dossiers, setDossiers] = useState([]);
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

    // Charger tous les dossiers depuis l'API
    const loadDossiers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/getDossiers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDossiers(data); // Définir la liste des dossiers
        } else {
          console.error("Erreur lors du chargement des dossiers");
        }
      } catch (error) {
        console.error("Erreur lors du chargement des dossiers", error);
      }
    };

    if (typeUser === "admin") {
      loadDossiers(); // Charger les dossiers pour les administrateurs
    }
  }, [typeUser]);

  return (
    <div className="tableau-bord">
      {/* Afficher Header si user_Type est "admin", sinon Header2 */}
      {typeUser === "admin" ? <Header_Admin /> : null}

      {typeUser === "admin" && (
        <div className="colonne-droite">
          {dossiers.map((dossier) => (
            <DossierAccordion
              key={dossier.id}
              dossier={dossier}
              critere={critereData}
            />
          ))}
          <div style={{ height: "100px" }}></div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function DossierAccordion({ dossier }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dossier-accordion">
      <div
        className={`accordion-header ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <h3>
          Enterprise: {dossier.enterprise} - Numéro de Dossier:{" "}
          {dossier.n_dossier}
        </h3>
      </div>
      {open && (
        <div className="criteres">
          {critereData.map((critere, index) => (
            <div key={index}>{critere}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TableauBord_admin;
