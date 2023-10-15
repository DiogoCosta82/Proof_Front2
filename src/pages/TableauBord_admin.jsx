import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/tbord_admin.css";
import Header_Admin from "../models/Header_Admin";
import Footer from "../models/Footer";
import Critere from "../models/Criteres";

function TableauBord_admin({ critereData }) {
  const [dossiers, setDossiers] = useState([]);
  const [typeUser, setTypeUser] = useState(null);
  const [openDossiers, setOpenDossiers] = useState([]);
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
          // Initialiser l'état des dossiers ouverts à false pour chaque dossier
          setOpenDossiers(new Array(data.length).fill(false));
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

  const toggleDossier = (index) => {
    const newOpenDossiers = [...openDossiers];
    newOpenDossiers[index] = !newOpenDossiers[index];
    setOpenDossiers(newOpenDossiers);
  };

  return (
    <div className="tableau-bord">
      {/* Afficher Header si user_Type est "admin", sinon Header2 */}
      {typeUser === "admin" ? <Header_Admin /> : null}

      {typeUser === "admin" && (
        <div className="colonne-droite">
          {dossiers.map((dossier, index) => (
            <div key={index} className="dossier-accordion">
              <div
                className={`accordion-header ${
                  openDossiers[index] ? "open" : ""
                }`}
                onClick={() => toggleDossier(index)}
              >
                <h3 className="header_dossier">
                  Enterprise: {dossier.enterprise} - Dossier:{" "}
                  {dossier.n_dossier}
                </h3>
              </div>
              {openDossiers[index] && (
                <div className="criteres">
                  <Critere critereData={critereData} />
                </div>
              )}
              <Footer />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TableauBord_admin;
