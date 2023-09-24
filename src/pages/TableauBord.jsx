import React, { useState } from "react";
import "../components/style/tbord.css";
import Header from "../models/ModelsHeader";
import Footer from "../models/ModelsFooter";
import Indicateur from "../models/Indicateur";

function TableauBord() {
  const [critere1, setCritere1] = useState(false);
  // const [critere1, setCritere1] = useState(false); // Suppression car il y a une déclaration en double.
  const [critere2, setCritere2] = useState(false);
  const [critere3, setCritere3] = useState(false);
  const [critere4, setCritere4] = useState(false);

  const commentairesIndicateur1 = [];
  const commentairesIndicateur2 = [];
  const commentairesIndicateur3 = [];
  const commentairesIndicateur4 = [];
  const commentairesIndicateur5 = [];
  const commentairesIndicateur6 = [];
  const commentairesIndicateur7 = [];
  const commentairesIndicateur8 = [];
  const commentairesIndicateur9 = [];
  const commentairesIndicateur10 = [];
  const commentairesIndicateur11 = [];
  const commentairesIndicateur12 = [];
  const commentairesIndicateur13 = [];
  const commentairesIndicateur14 = [];
  const commentairesIndicateur15 = [];
  const commentairesIndicateur16 = [];
  const commentairesIndicateur17 = [];
  const commentairesIndicateur18 = [];
  const commentairesIndicateur19 = [];
  const commentairesIndicateur20 = [];

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
                  commentaires={commentairesIndicateur7}
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
        <br />
        <div className="accordion">
          {/* Critère 3 */}
          <div className="accordion-item">
            <div className="criteria-content">
              <h2 className="accordion-header text-center">
                <button
                  className={`accordion-button ${critere3 ? "active" : ""}`}
                  onClick={() => setCritere3(!critere3)}
                >
                  <h4>
                    CRITÈRE 3
                    <h5>
                      L'adaptation aux publics bénéficiaires des prestations et
                      des modalités d'accueil, d'accompagnement, de suivi et
                      d'évaluation mises en œuvre
                    </h5>
                  </h4>
                </button>
              </h2>
            </div>
            {critere3 && (
              <div>
                <br />
                {/* Indicateur 9 */}
                <Indicateur
                  titre="Indicateur9 | Indicateur Commun d'Appréciation"
                  description="Le prestataire informe les publics
                  bénéficiaires des conditions de
                  déroulement de la prestation."
                  niveauAttendu="Niveau Attendu: Les modalités d'accueil et les conditions
                  de déroulement de la prestation sont
                  formalisées et diffusées."
                  commentaires={commentairesIndicateur9}
                />

                {/* Indicateur 10 */}
                <Indicateur
                  titre="Indicateur 10 | Indicateur Commun d'Appréciation"
                  description="Le prestataire met en œuvre et adapte
                  la prestation, l'accompagnement et le
                  suivi aux publics bénéficiaires.."
                  niveauAttendu="Niveau Attendu: La prestation est adaptée aux situations et
                  profils des bénéficiaires : contenus (outils
                  et méthodes), accompagnement, suivi
                  (durées, emplois du temps, adaptation des
                  rythmes)."
                  commentaires={commentairesIndicateur10}
                />
                {/* Indicateur 11 */}
                <Indicateur
                  titre="Indicateur 11 - Indicateur Commun d'Appréciation"
                  description="Le prestataire évalue l'atteinte par les
                  publics bénéficiaires des objectifs de
                  la prestation."
                  niveauAttendu="Niveau Attendu: Démontrer qu'un processus d'évaluation
                  existe, est formalisé et mis en œuvre. Il
                  permet d'apprécier l'atteinte des objectifs."
                  commentaires={commentairesIndicateur11}
                />
                {/* Indicateur 12 */}
                <Indicateur
                  titre="Indicateur 12 - Indicateur Commun d'Appréciation"
                  description="Le prestataire décrit et met en œuvre
                  les mesures pour favoriser
                  l'engagement des bénéficiaires et prévenir
                  les ruptures de parcours."
                  niveauAttendu="Niveau Attendu: Démontrer que des mesures formalisées
                  existent et sont mises en œuvre."
                  commentaires={commentairesIndicateur12}
                />
                {/* Indicateur 13*/}
                <Indicateur
                  titre="Indicateur 13 - Indicateur Spécifique d'appréciation (OF, CFA)s"
                  description="Pour les formations en alternance,
                  le prestataire, en lien avec l'entreprise,
                  anticipe avec l'apprenant les missions
                  confiées, à court, moyen et long terme, et
                  assure la coordination
                  et la progressivité des apprentissages
                  réalisés en centre de formation et en
                  entreprise."
                  niveauAttendu="Niveau Attendu: Démontrer qu'un processus formalisé
                  d'articulation des apprentissages en centre
                  et en entreprise est mis en œuvre."
                  commentaires={commentairesIndicateur13}
                />
                {/* Indicateur 14*/}
                <Indicateur
                  titre="Indicateur 14 -  Indicateur Spécifique d'appréciation (CFA)"
                  description="Le prestataire met en œuvre un
                  accompagnement socio-professionnel,
                  éducatif et relatif à l'exercice de la
                  citoyenneté."
                  niveauAttendu="Niveau Attendu: Démontrer que l'accompagnement de
                  l'apprenant est formalisé et mis en œuvre
                  par la mise en place de projets spécifiques."
                  commentaires={commentairesIndicateur14}
                />
                {/* Indicateur 15*/}
                <Indicateur
                  titre="Indicateur 15 - Indicateur Spécifique d'appréciation (CFA)"
                  description="Le prestataire informe les apprentis
                  de leurs droits et devoirs en tant
                  qu'apprentis et salariés ainsi que des règles
                  applicables en matière de santé et de
                  sécurité en milieu professionnel."
                  niveauAttendu="Niveau Attendu: Démontrer que les apprentis sont informés
                  des droits et devoirs des salariés /apprentis
                  et sur les règles applicables en matière de
                  santé et de sécurité en milieu professionnel."
                  commentaires={commentairesIndicateur15}
                />
                {/* Indicateur 16*/}
                <Indicateur
                  titre="Indicateur 16 - Indicateur Spécifique d'appréciation (OF, CFA,VAE)"
                  description="Lorsque le prestataire met en œuvre
                  des formations conduisant à une
                  certification professionnelle, il s'assure
                  que les conditions de présentation des
                  bénéficiaires à la certification respectent
                  les exigences formelles de l'autorité de
                  certification."
                  niveauAttendu="Niveau Attendu: Le prestataire respecte les exigences
                  formelles de l'autorité de certification
                  lorsqu'il présente des candidats à la
                  certification qu'il propose."
                  commentaires={commentairesIndicateur16}
                />
              </div>
            )}
          </div>
          <br />
          {/* Critère 4 */}
          <div className="accordion-item">
            <div className="criteria-content">
              <h2 className="accordion-header text-center">
                <button
                  className={`accordion-button ${critere4 ? "active" : ""}`}
                  onClick={() => setCritere4(!critere4)}
                >
                  <h4>
                    CRITÈRE 4
                    <h5>
                      L'adéquation des moyens pédagogiques, techniques et
                      d'encadrement aux prestations mises en œuvre
                    </h5>
                  </h4>
                </button>
              </h2>
            </div>
            {critere4 && (
              <div>
                <br />
                {/* Indicateur 17 */}
                <Indicateur
                  titre="Indicateur 17 | Indicateur Commun d'Appréciation"
                  description="Le prestataire met à disposition ou
                  s'assure de la mise à disposition des
                  moyens humains et techniques adaptés
                  et d'un environnement approprié
                  (conditions, locaux, équipements, plateaux
                  techniques…)."
                  niveauAttendu="Démontrer que les locaux, les
                  équipements, les moyens humains sont en
                  adéquation avec la ou les prestation(s)."
                  commentaires={commentairesIndicateur17}
                />
                {/* Indicateur 18 */}
                <Indicateur
                  titre="Indicateur 18 | Indicateur Commun d'Appréciation"
                  description="Le prestataire mobilise et coordonne
                  les différents intervenants internes et/ou
                  externes (pédagogiques, administratifs,
                  logistiques, commerciaux…)."
                  niveauAttendu="Niveau Attendu:Démontrer l'existence d'une coordination
                  des fonctions nécessaires à la prestation."
                  commentaires={commentairesIndicateur18}
                />
                {/* Indicateur 19 */}
                <Indicateur
                  titre="Indicateur 19 - Indicateur Commun d'Appréciation"
                  description="Le prestataire met à disposition du
                  bénéficiaire des ressources
                  pédagogiques et permet à celui-ci de se les
                  approprier."
                  niveauAttendu="Niveau Attendu: Démontrer que les ressources
                  pédagogiques existent, sont actualisées
                  et disponibles et démontrer que des
                  dispositions sont mises en place afin de
                  permettre aux bénéficiaires de se les
                  approprier."
                  commentaires={commentairesIndicateur19}
                />
                {/* Indicateur 20 */}
                <Indicateur
                  titre="Indicateur 20 - Indicateur Spécifique d'appréciation (CFA)"
                  description="Le prestataire dispose d'un personnel
                  dédié à l'appui à la mobilité nationale
                  et internationale, d'un référent handicap
                  et d'un conseil de perfectionnement."
                  niveauAttendu={
                    <>
                      Niveau Attendu: Le prestataire présente :
                      <div>
                        - la liste des membres du conseil de perfectionnement,
                        le dernier compterendu et/ou procès-verbal ;
                      </div>
                      <div>
                        - la liste des personnes dédiées à la mobilité
                        (nationale et internationale) ;
                      </div>
                      <div>- le nom et le contact du référent handicap.</div>
                    </>
                  }
                  commentaires={commentairesIndicateur20}
                />
              </div>
            )}
          </div>
          <br />
        </div>

        {/* Ajoutez plus de critères et indicateurs ici comme le critère 1 ci-dessus */}
      </div>
      <Footer />
    </div>
  );
}

export default TableauBord;
