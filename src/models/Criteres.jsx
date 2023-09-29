import React, { useState, useEffect } from "react";
import Indicateur from "./Indicateur";
import "../components/style/tbord.css";

function Critere() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [critereData, setCritereData] = useState([]);

  useEffect(() => {
    fetch("/src/models/critereData.json")
      .then((response) => response.json())
      .then((data) => setCritereData(data));
  }, []);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div>
      {critereData.map((critere) => (
        <div className="accordion" key={critere.id}>
          {/* Critère */}
          <div className="accordion-item">
            <div className="criteria-content">
              <h2 className="accordion-header text-center">
                <button
                  className={`accordion-button ${
                    openAccordion === critere.id ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(critere.id)}
                >
                  <h5>
                    {critere.titre}
                    <br />
                    <small>{critere.description}</small>
                  </h5>
                </button>
              </h2>
            </div>
            <div
              className={
                openAccordion === critere.id ? "content-open" : "content-closed"
              }
            >
              <br />
              {/* Indicateurs */}
              {critere.indicateurs.map((indicateur) => (
                <Indicateur
                  key={indicateur.id}
                  titre={indicateur.titre}
                  description={indicateur.description}
                  niveauAttendu={indicateur.niveauAttendu}
                  commentaires={[]}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Critere;
