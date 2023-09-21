import React, { useState } from "react";
import "../components/style/tbord.css";
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";

function TableauBord() {
  const [critere1, setCritere1] = useState(false);
  const [critere2, setCritere2] = useState(false);
  const [indicateur1, setIndicateur1] = useState(false);
  const [indicateur2, setIndicateur2] = useState(false);
  const [indicateur3, setIndicateur3] = useState(false);
  const [indicateur4, setIndicateur4] = useState(false);
  const [indicateur5, setIndicateur5] = useState(false);
  const [indicateur6, setIndicateur6] = useState(false);
  const [indicateur7, setIndicateur7] = useState(false);
  const [indicateur8, setIndicateur8] = useState(false);

  const commentairesIndicateur1 = []; // Remplacez par les commentaires réels
  const commentairesIndicateur2 = []; // Remplacez par les commentaires réels
  const commentairesIndicateur3 = []; // Remplacez par les commentaires réels
  const commentairesIndicateur4 = []; // Remplacez par les commentaires réels
  const commentairesIndicateur5 = []; // Remplacez par les commentaires réels
  const commentairesIndicateur6 = []; // Remplacez par les commentaires réels
  const commentairesIndicateur7 = []; // Remplacez par les commentaires réels
  const commentairesIndicateur8 = []; // Remplacez par les commentaires réels

  return (
    <div className="container">
      <Header />
      <div className="accordion">
        {/* Critère 1 */}
        <div className="accordion-item">
          <div className="criteria-content">
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
                    <div className="left-column">
                      <p class="large-paragraph">
                        Le prestataire diffuse une information accessible au
                        public, détaillée et vérifiable sur les prestations
                        proposées : prérequis, objectifs, durée, modalités et
                        délais d'accès, tarifs, contacts, méthodes mobilisées et
                        modalités d'évaluation, accessibilité aux personnes
                        handicapées.
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Niveau Attendu: Donner une information accessible,
                        exhaustive datée et actualisée.
                      </p>
                    </div>

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
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur1.length > 0 ? (
                              <ul>
                                {commentairesIndicateur1.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
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
                    <div className="left-column">
                      <p class="large-paragraph">
                        Le prestataire diffuse des indicateurs de résultats
                        adaptés à la nature des prestations mises en œuvre et
                        des publics accueillis.
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Le prestataire diffuse des indicateurs de résultats
                        adaptés à la nature des prestations mises en œuvre et
                        des publics accueillis.
                      </p>
                    </div>
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
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur2.length > 0 ? (
                              <ul>
                                {commentairesIndicateur2.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Indicateur 3 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 3 - Indicateur Spécifique d'appréciation (OF,
                      CFA, VAE)
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <div className="left-column">
                      <p class="large-paragraph">
                        Lorsque le prestataire met en œuvre des prestations
                        conduisant à une certification professionnelle, il
                        informe sur les taux d'obtention des certifications
                        préparées, les possibilités de valider un/ou des blocs
                        de compétences, ainsi que sur les équivalences,
                        passerelles, suites de parcours et les débouchés.
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Donner au public une information accessible, exhaustive
                        et actualisée.
                      </p>
                    </div>
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
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur3.length > 0 ? (
                              <ul>
                                {commentairesIndicateur3.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <br />

      <div className="accordion">
        {/* Critère 2 */}
        <div className="accordion-item">
          <div className="criteria-content">
            <h2 className="accordion-header text-center">
              <button
                className={`accordion-button ${critere2 ? "active" : ""}`}
                onClick={() => setCritere2(!critere2)}
              >
                <h4>
                  CRITÈRE 2<br />
                  <h5>
                    L'identification précise des objectifs des prestations
                    proposées et l'adaptation de ces prestations aux publics
                    bénéficiaires lors de la conception des prestations
                  </h5>
                </h4>
              </button>
            </h2>
          </div>
          {critere2 && (
            <div className="accordion-collapse collapse show">
              <div className="accordion-body">
                {/* Indicateur 4 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 4 | Indicateur Commun d'Appréciation
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <div className="left-column">
                      <p class="large-paragraph">
                        L'identification précise des objectifs des prestations
                        proposées et l'adaptation de ces prestations aux publics
                        bénéficiaires lors de la conception des prestations
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Démontrer comment le besoin du bénéficiaire est analysé
                        en fonction de la finalité de la prestation.
                      </p>
                    </div>

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
                      <div className="button-group">
                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
                          onClick={() => setIndicateur4(!indicateur4)}
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
                      {indicateur4 && (
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur4.length > 0 ? (
                              <ul>
                                {commentairesIndicateur4.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Indicateur 5 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 5 | Indicateur Commun d'Appréciation
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <div className="left-column">
                      <p class="large-paragraph">
                        Le prestataire définit les objectifs opérationnels et
                        évaluables de la prestation.
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Démontrer que les objectifs sont opérationnels et
                        évaluables.
                      </p>
                    </div>
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
                      <div className="button-group">
                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
                          onClick={() => setIndicateur5(!indicateur5)}
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
                      {indicateur5 && (
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur5.length > 0 ? (
                              <ul>
                                {commentairesIndicateur5.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Indicateur 6 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 6 - Indicateur Commun d'Appréciation
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <div className="left-column">
                      <p class="large-paragraph">
                        Le prestataire établit les contenus et les modalités de
                        mise en œuvre de la prestation, adaptés aux objectifs
                        définis et aux publics bénéficiaires.
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Démontrer que les contenus et modalités de mise en œuvre
                        des prestations sont adaptés aux objectifs définis en
                        fonction des bénéficiaires.
                      </p>
                    </div>
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
                      <div className="button-group">
                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
                          onClick={() => setIndicateur6(!indicateur6)}
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
                      {indicateur6 && (
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur6.length > 0 ? (
                              <ul>
                                {commentairesIndicateur6.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Indicateur 7 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 7 - Indicateur Spécifique d'appréciation (OF,
                      CFA)
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <div className="left-column">
                      <p class="large-paragraph">
                        Lorsque le prestataire met en œuvre des prestations
                        conduisant à une certification professionnelle, il
                        s'assure de l'adéquation du ou des contenus de la
                        prestation aux exigences de la certification visée.
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Démontrer l'adéquation du contenu aux compétences
                        ciblées et aux épreuves d'évaluation de la
                        certification.
                      </p>
                    </div>
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
                      <div className="button-group">
                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
                          onClick={() => setIndicateur7(!indicateur7)}
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
                      {indicateur7 && (
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur7.length > 0 ? (
                              <ul>
                                {commentairesIndicateur7.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Indicateur 8 */}
                <div className="custom-card">
                  <div className="custom-card-header">
                    <h5 className="custom-card-title text-center">
                      Indicateur 8 - Indicateur Spécifique d'appréciation (OF,
                      CFA)
                    </h5>
                  </div>
                  <div className="custom-card-body">
                    <div className="left-column">
                      <p class="large-paragraph">
                        Le prestataire détermine les procédures de
                        positionnement et d'évaluation des acquis à l'entrée de
                        la prestation.
                      </p>
                    </div>
                    <div className="right-column">
                      <p class="small-paragraph">
                        Démontrer la mise en œuvre des procédures de
                        positionnement et d'évaluation des acquis à l'entrée de
                        la prestation adaptée aux publics et modalités de
                        formations.
                      </p>
                    </div>
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
                      <div className="button-group">
                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
                          onClick={() => setIndicateur8(!indicateur8)}
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
                      {indicateur8 && (
                        <div className="titreCommentaires">
                          <h5>Commentaires d'amélioration :</h5>
                          <div className="commentaires-container">
                            {commentairesIndicateur8.length > 0 ? (
                              <ul>
                                {commentairesIndicateur8.map(
                                  (commentaire, index) => (
                                    <li key={index}>{commentaire}</li>
                                  )
                                )}
                              </ul>
                            ) : (
                              <p>Pas de commentaires</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TableauBord;
