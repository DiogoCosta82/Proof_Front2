import React, { useState } from "react";
import "../components/style/tbord.css";

function TableauBord() {
  const [critere1, setCritere1] = useState(false);
  const [indicateur1, setIndicateur1] = useState(false);
  const [indicateur2, setIndicateur2] = useState(false);
  const [indicateur3, setIndicateur3] = useState(false);

  return (
    <div className="container">
      <div className="accordion">
        {/* Critère 1 */}
        <div className="accordion-item">
          <div
            className="criteria-content"
            style={{ backgroundColor: "lightgray" }}
          >
            <div className="left-column">
              <h2 className="accordion-header text-center">
                <button
                  className={`accordion-button ${critere1 ? "active" : ""}`}
                  onClick={() => setCritere1(!critere1)}
                >
                  <h4>
                    CRITÈRE 1<br />
                    <h5>
                      Les conditions d'information du public sur les prestations
                      proposées, les délais pour y accéder et les résultats
                      obtenus
                    </h5>
                  </h4>
                </button>
              </h2>
            </div>
            <div className="right-column">
              {/* Ajoutez ici votre texte à droite */}
              <p>
                Niveau Attendu: Donner une information accessible, exhaustive
                (c'est-à-dire sur l'intégralité des items mentionnés) datée et
                actualisée.
              </p>
            </div>
          </div>
          {critere1 && (
            <div className="accordion-collapse collapse show">
              <div className="accordion-body">
                {/* Indicateur 1 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 1 | Indicateur Commun d'Appréciation
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <p>
                      Le prestataire diffuse une information accessible au
                      public, détaillée et vérifiable sur les prestations
                      proposées : prérequis, objectifs, durée, modalités et
                      délais d'accès, tarifs, contacts, méthodes mobilisées et
                      modalités d'évaluation, accessibilité aux personnes
                      handicapées.
                    </p>
                    <div>
                      <label>Eléments de Preuve</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                      <label>Obligations Spécifiques</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                      <label>Non-conformité</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                    </div>
                    <div className="button-group">
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => setIndicateur1(!indicateur1)}
                      >
                        Voir commentaires
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm text-black"
                      >
                        Non concerné
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm text-black"
                      >
                        Valider
                      </button>
                    </div>

                    {indicateur1 && (
                      <div>
                        <label>Eléments de Preuve</label>
                        <br />
                        <textarea
                          className="custom-input"
                          rows="3"
                          cols="30"
                        ></textarea>
                        <label>Obligations Spécifiques</label>
                        <br />
                        <textarea
                          className="custom-input"
                          rows="3"
                          cols="30"
                        ></textarea>
                        <label>Non-conformité</label>
                        <br />
                        <textarea
                          className="custom-input"
                          rows="3"
                          cols="30"
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div>
                {/* Indicateur 2 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 2 | Indicateur Commun d'Appréciation
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <p>
                      Le prestataire diffuse des indicateurs de résultats
                      adaptés à la nature des prestations mises en œuvre et des
                      publics accueillis.
                    </p>
                    <div>
                      <label>Eléments de Preuve</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                      <label>Obligations Spécifiques</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                      <label>Non-conformité</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                    </div>
                    <div className="button-group">
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => setIndicateur2(!indicateur2)}
                      >
                        Voir commentaires
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm text-black"
                      >
                        Non concerné
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm text-black"
                      >
                        Valider
                      </button>
                    </div>

                    {indicateur2 && (
                      <div>
                        <label>Eléments de Preuve</label>
                        <br />
                        <textarea
                          className="custom-input"
                          rows="3"
                          cols="30"
                        ></textarea>
                        <label>Obligations Spécifiques</label>
                        <br />
                        <textarea
                          className="custom-input"
                          rows="3"
                          cols="30"
                        ></textarea>
                        <label>Non-conformité</label>
                        <br />
                        <textarea
                          className="custom-input"
                          rows="3"
                          cols="30"
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div>
                {/* Indicateur 3 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title">
                      Indicateur 3 - Indicateur Spécifique d'appréciation (OF,
                      CFA, VAE)
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <p>
                      Lorsque le prestataire met en œuvre des prestations
                      conduisant à une certification professionnelle, il informe
                      sur les taux d'obtention des certifications préparées, les
                      possibilités de valider un/ou des blocs de compétences,
                      ainsi que sur les équivalences, passerelles, suites de
                      parcours et les débouchés.
                    </p>
                    <div>
                      <label>Eléments de Preuve</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                      <label>Obligations Spécifiques</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                      <label>Non-conformité</label>
                      <br />
                      <textarea
                        className="custom-input"
                        rows="3"
                        cols="30"
                      ></textarea>
                      <br />
                    </div>
                    <div className="button-group">
                      <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => setIndicateur3(!indicateur3)}
                      >
                        Voir commentaires
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm text-black"
                      >
                        Non concerné
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-sm text-black"
                      >
                        Valider
                      </button>
                    </div>

                    {indicateur3 && (
                      <div>
                        <textarea
                          className="custom-input"
                          rows="3"
                          cols="30"
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TableauBord;
