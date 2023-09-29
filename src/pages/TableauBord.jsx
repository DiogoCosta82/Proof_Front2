import React, { useState } from "react";
import "../components/style/tbord.css";
import Critere from "../models/Criteres";
import Header from "../models/ModelsHeader";

function TableauBord({ critereData }) {
  const [dossierNumero, setDossierNumero] = useState(null);
  const [accordionsVisible, setAccordionsVisible] = useState(false);

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
