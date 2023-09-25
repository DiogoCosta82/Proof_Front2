import React, { useState, useEffect } from "react";
import "../components/style/tbord.css";
import Critere from "../models/Criteres";
import Header from "../models/ModelsHeader";

function TableauBord({ critereData }) {
  const [dossierNumero, setDossierNumero] = useState(null);
  const [accordionsVisible, setAccordionsVisible] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    // Vérifier si un dossier existe pour l'utilisateur actuel
    fetch("http://127.0.0.1:8000/api/checkDossier", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.numero) {
          setDossierNumero(data.numero);
          setAccordionsVisible(true);
        }
      });
  }, []);

  const createDossier = () => {
    const randomNumero = Math.floor(Math.random() * 10000);
    const dossier = `proof-qual-${randomNumero}`;

    // Envoyer le nouveau dossier au backend pour le sauvegarder
    fetch("http://127.0.0.1:8000/api/createDossier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ numero: dossier }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDossierNumero(dossier);
          setAccordionsVisible(true);
        }
      });
  };

  return (
    <div className="tableau-bord">
      <Header />
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
        </div>
      )}
    </div>
  );
}

export default TableauBord;
