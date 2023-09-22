import React, { useState } from "react";
import "../components/style/tbord.css";
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Indicateur from "../models/Indicateur";

function TableauBord() {
  const [critere1, setCritere1] = useState(false);
  // const [critere1, setCritere1] = useState(false); // Suppression car il y a une déclaration en double.
  const [critere2, setCritere2] = useState(false);

  const commentairesIndicateur1 = [];
  const commentairesIndicateur2 = [];
  const commentairesIndicateur3 = [];
  const commentairesIndicateur4 = [];
  const commentairesIndicateur5 = [];
  const commentairesIndicateur6 = [];
  const commentairesIndicateur7 = [];
  const commentairesIndicateur8 = [];

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
                  CRITÈRE 1
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
            <div>
              <br />
              {/* Indicateur 1 */}
              <Indicateur
                titre="Indicateur 1 | Indicateur Commun d'Appréciation"
                description="Le prestataire diffuse une information accessible au public, détaillée et vérifiable sur les prestations proposées : prérequis, objectifs, durée, modalités et délais d'accès, tarifs, contacts, méthodes mobilisées et modalités d'évaluation, accessibilité aux personnes handicapées."
                niveauAttendu="Niveau Attendu: Donner une information accessible, exhaustive datée et actualisée."
                commentaires={commentairesIndicateur1}
              />

              {/* Indicateur 2 */}
              <Indicateur
                titre="Indicateur 2 | Indicateur Commun d'Appréciation"
                description="Le prestataire diffuse des indicateurs de résultats adaptés à la nature des prestations mises en œuvre et des publics accueillis."
                niveauAttendu="Niveau Attendu: Le prestataire diffuse des indicateurs de résultats adaptés à la nature des prestations mises en œuvre et des publics accueillis."
                commentaires={commentairesIndicateur2}
              />
              {/* Indicateur 3 */}
              <Indicateur
                titre="Indicateur 3 - Indicateur Spécifique d'appréciation (OF, CFA, VAE)"
                description="Lorsque le prestataire met en œuvre des prestations conduisant à une certification professionnelle, il informe sur les taux d'obtention des certifications préparées, les possibilités de valider un/ou des blocs de compétences, ainsi que sur les équivalences, passerelles, suites de parcours et les débouchés."
                niveauAttendu="Niveau Attendu: Donner au public une information accessible, exhaustive et actualisée."
                commentaires={commentairesIndicateur3}
              />
            </div>
          )}
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
                    CRITÈRE 2
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
              <div>
                <br />
                {/* Indicateur 4 */}
                <Indicateur
                  titre="Indicateur 4 | Indicateur Commun d'Appréciation"
                  description="L'identification précise des objectifs des prestations proposées et l'adaptation de ces prestations aux publics bénéficiaires lors de la conception des prestations"
                  niveauAttendu="Niveau Attendu: Démontrer comment le besoin du bénéficiaire est analysé en fonction de la finalité de la prestation."
                  commentaires={commentairesIndicateur4}
                />

                {/* Indicateur 5 */}
                <Indicateur
                  titre="Indicateur 5 | Indicateur Commun d'Appréciation"
                  description="Le prestataire définit les objectifs opérationnels et évaluables de la prestation."
                  niveauAttendu=" Niveau Attendu: Démontrer que les objectifs sont opérationnels et évaluables."
                  commentaires={commentairesIndicateur5}
                />
                {/* Indicateur 6 */}
                <Indicateur
                  titre="Indicateur 6 - Indicateur Commun d'Appréciation"
                  description=" Le prestataire établit les contenus et les modalités de mise en œuvre de la prestation, adaptés aux objectifs définis et aux publics bénéficiaires."
                  niveauAttendu="Niveau Attendu: Démontrer que les contenus et modalités de mise en œuvre des prestations sont adaptés aux objectifs définis en fonction des bénéficiaires."
                  commentaires={commentairesIndicateur6}
                />
                {/* Indicateur 7 */}
                <Indicateur
                  titre="Indicateur 7 - Indicateur Spécifique d'appréciation (OF, CFA)"
                  description="Lorsque le prestataire met en œuvre des prestations conduisant à une certification professionnelle, il s'assure de l'adéquation du ou des contenus de la prestation aux exigences de la certification visée."
                  niveauAttendu="Niveau Attendu: Démontrer l'adéquation du contenu aux compétences ciblées et aux épreuves d'évaluation de la certification."
                />
                {/* Indicateur 8 */}
                <Indicateur
                  titre="Indicateur 8 - Indicateur Spécifique d'appréciation (OF, CFA)s"
                  description="Le prestataire détermine les procédures de positionnement et d'évaluation des acquis à l'entrée de la prestation."
                  niveauAttendu="Niveau Attendu: Démontrer la mise en œuvre des procédures de positionnement et d'évaluation des acquis à l'entrée de la prestation adaptée aux publics et
                  modalités de formations."
                  commentaires={commentairesIndicateur8}
                />
              </div>
            )}
          </div>
        </div>

        {/* Ajoutez plus de critères et indicateurs ici comme le critère 1 ci-dessus */}
      </div>
      <Footer />
    </div>
  );
}

export default TableauBord;
