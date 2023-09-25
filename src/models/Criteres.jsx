import React, { useState } from "react";
import Indicateur from "./Indicateur";
import "../components/style/tbord.css";

const critereData = [
  {
    id: 1,
    titre: "CRITÈRE 1",
    description:
      "Les conditions d'information du public sur les prestations proposées, les délais pour y accéder et les résultats obtenus",
    indicateurs: [
      {
        id: 1,
        titre: "Indicateur 1 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire diffuse une information accessible au public, détaillée et vérifiable sur les prestations proposées : prérequis, objectifs, durée, modalités et délais d'accès, tarifs, contacts, méthodes mobilisées et modalités d'évaluation, accessibilité aux personnes handicapées.",
        niveauAttendu:
          "Niveau Attendu: Donner une information accessible, exhaustive datée et actualisée.",
      },
      {
        id: 2,
        titre: "Indicateur 2 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire diffuse des indicateurs de résultats adaptés à la nature des prestations mises en œuvre et des publics accueillis.",
        niveauAttendu:
          "Niveau Attendu: Le prestataire diffuse des indicateurs de résultats adaptés à la nature des prestations mises en œuvre et des publics accueillis.",
      },
      {
        id: 3,
        titre:
          "Indicateur 3 - Indicateur Spécifique d'appréciation (OF, CFA, VAE)",
        description:
          "Lorsque le prestataire met en œuvre des prestations conduisant à une certification professionnelle, il informe sur les taux d'obtention des certifications préparées, les possibilités de valider un/ou des blocs de compétences, ainsi que sur les équivalences, passerelles, suites de parcours et les débouchés.",
        niveauAttendu:
          "Niveau Attendu: Donner au public une information accessible, exhaustive et actualisée.",
      },
    ],
  },
  {
    id: 2,
    titre: "CRITÈRE 2",
    description:
      "L'identification précise des objectifs des prestations proposées et l'adaptation de ces prestations aux publics bénéficiaires lors de la conception des prestations",
    indicateurs: [
      {
        id: 4,
        titre: "Indicateur 4 | Indicateur Commun d'Appréciation",
        description:
          "L'identification précise des objectifs des prestations proposées et l'adaptation de ces prestations aux publics bénéficiaires lors de la conception des prestations",
        niveauAttendu:
          "Niveau Attendu: Démontrer comment le besoin du bénéficiaire est analysé en fonction de la finalité de la prestation.",
      },
      {
        id: 5,
        titre: "Indicateur 5 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire définit les objectifs opérationnels et évaluables de la prestation.",
        niveauAttendu:
          "Niveau Attendu: Démontrer que les objectifs sont opérationnels et évaluables.",
      },
      {
        id: 6,
        titre: "Indicateur 6 - Indicateur Commun d'Appréciation",
        description:
          "Le prestataire établit les contenus et les modalités de mise en œuvre de la prestation, adaptés aux objectifs définis et aux publics bénéficiaires.",
        niveauAttendu:
          "Niveau Attendu: Démontrer que les contenus et modalités de mise en œuvre des prestations sont adaptés aux objectifs définis en fonction des bénéficiaires.",
      },
      {
        id: 7,
        titre: "Indicateur 7 - Indicateur Spécifique d'appréciation (OF, CFA)",
        description:
          "Lorsque le prestataire met en œuvre des prestations conduisant à une certification professionnelle, il s'assure de l'adéquation du ou des contenus de la prestation aux exigences de la certification visée.",
        niveauAttendu:
          "Niveau Attendu: Démontrer l'adéquation du contenu aux compétences ciblées et aux épreuves d'évaluation de la certification.",
      },
      {
        id: 8,
        titre: "Indicateur 8 - Indicateur Spécifique d'appréciation (OF, CFA)",
        description:
          "Le prestataire détermine les procédures de positionnement et d'évaluation des acquis à l'entrée de la prestation.",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en œuvre des procédures de positionnement et d'évaluation des acquis à l'entrée de la prestation adaptée aux publics et modalités de formations.",
      },
    ],
  },
  {
    id: 3,
    titre: "CRITÈRE 3",
    description:
      "L'adaptation aux publics bénéficiaires des prestations et des modalités d'accueil, d'accompagnement, de suivi et d'évaluation mises en œuvre",
    indicateurs: [
      {
        id: 9,
        titre: "Indicateur9 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire informe les publics bénéficiaires des conditions de déroulement de la prestation.",
        niveauAttendu:
          "Niveau Attendu: Les modalités d'accueil et les conditions de déroulement de la prestation sont formalisées et diffusées.",
      },
      {
        id: 10,
        titre: "Indicateur 10 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire met en œuvre et adapte la prestation, l'accompagnement et le suivi aux publics bénéficiaires.",
        niveauAttendu:
          "Niveau Attendu: La prestation est adaptée aux situations et profils des bénéficiaires : contenus (outils et méthodes), accompagnement, suivi (durées, emplois du temps, adaptation des rythmes).",
      },
      {
        id: 11,
        titre: "Indicateur 11 - Indicateur Commun d'Appréciation",
        description:
          "Le prestataire évalue l'atteinte par les publics bénéficiaires des objectifs de la prestation.",
        niveauAttendu:
          "Niveau Attendu: Démontrer qu'un processus d'évaluation existe, est formalisé et mis en œuvre. Il permet d'apprécier l'atteinte des objectifs.",
      },
      {
        id: 12,
        titre: "Indicateur 12 - Indicateur Commun d'Appréciation",
        description:
          "Le prestataire décrit et met en œuvre les mesures pour favoriser l'engagement des bénéficiaires et prévenir les ruptures de parcours.",
        niveauAttendu:
          "Niveau Attendu: Démontrer que des mesures formalisées existent et sont mises en œuvre.",
      },
      {
        id: 13,
        titre:
          "Indicateur 13 - Indicateur Spécifique d'appréciation (OF, CFA, VAE)",
        description:
          "Lorsque le prestataire met en œuvre des formations conduisant à une certification professionnelle, il s'assure que les conditions de présentation des bénéficiaires à la certification respectent les exigences formelles de l'autorité de certification.",
        niveauAttendu:
          "Niveau Attendu: Le prestataire respecte les exigences formelles de l'autorité de certification lorsqu'il présente des candidats à la certification qu'il propose.",
      },
    ],
  },
  {
    id: 4,
    titre: "CRITÈRE 4",
    description:
      "L'adéquation des moyens pédagogiques, techniques et d'encadrement aux prestations mises en œuvre",
    indicateurs: [
      {
        id: 17,
        titre: "Indicateur 17 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire met à disposition ou s'assure de la mise à disposition des moyens humains et techniques adaptés et d'un environnement approprié (conditions, locaux, équipements, plateaux techniques…).",
        niveauAttendu:
          "Niveau Attendu: Démontrer que les locaux, les équipements, les moyens humains sont en adéquation avec la ou les prestation(s).",
      },
      {
        id: 18,
        titre: "Indicateur 18 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire mobilise et coordonne les différents intervenants internes et/ou externes (pédagogiques, administratifs, logistiques, commerciaux…).",
        niveauAttendu:
          "Niveau Attendu: Démontrer l'existence d'une coordination des fonctions nécessaires à la prestation.",
      },
      {
        id: 19,
        titre: "Indicateur 19 - Indicateur Commun d'Appréciation",
        description:
          "Le prestataire met à disposition du bénéficiaire des ressources pédagogiques et permet à celui-ci de se les approprier.",
        niveauAttendu:
          "Niveau Attendu: Démontrer que les ressources pédagogiques existent, sont actualisées et disponibles et démontrer que des dispositions sont mises en place afin de permettre aux bénéficiaires de se les approprier.",
      },
      {
        id: 20,
        titre: "Indicateur 20 - Indicateur Spécifique d'appréciation (CFA)",
        description:
          "Le prestataire dispose d'un personnel dédié à l'appui à la mobilité nationale et internationale, d'un référent handicap et d'un conseil de perfectionnement.",
        niveauAttendu:
          "Niveau Attendu: Le prestataire présente :\n - la liste des membres du conseil de perfectionnement, le dernier compte-rendu et/ou procès-verbal ;\n - la liste des personnes dédiées à la mobilité (nationale et internationale) ;\n - le nom et le contact du référent handicap.",
      },
    ],
  },
  {
    id: 5,
    titre: "CRITÈRE 5",
    description:
      "La qualification et le développement des connaissances et compétences des personnels chargés de mettre en œuvre les prestations",
    indicateurs: [
      {
        id: 21,
        titre: "Indicateur 21 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire détermine, mobilise et évalue les compétences desndifférents intervenants internes et/ou externes, adaptées aux prestations.",
        niveauAttendu:
          "Démontrer que les compétences requises pour réaliser les prestations ont été définies en amont et sont adaptées aux prestations. La maîtrise de ces compétences fait par ailleurs l’objet d’une évaluation par le prestataire.",
      },
      {
        id: 22,
        titre: "Indicateur 22 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire entretient et développe les compétences de ses salariés, adaptées aux prestations qu’il délivre.",
        niveauAttendu:
          "Niveau Attendu: Démontrer l’existence d’un plan de développement des compétences pour l’ensemble de son personnel.",
      },
    ],
  },
  {
    id: 6,
    titre: "CRITÈRE 6",
    description:
      "L’inscription et l’investissement du prestataire dans son environnement professionnel",
    indicateurs: [
      {
        id: 23,
        titre: "Indicateur 23 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire réalise une veille légale et réglementaire sur le champ de la formation professionnelle et en exploite les enseignements..",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en place d’une veille légale et réglementaire et son exploitation.",
      },
      {
        id: 24,
        titre: "Indicateur 24 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire réalise une veille sur les évolutions des compétences, des métiers et des emplois dans ses secteurs  d’intervention et en exploite les enseignements.",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en place d’une veille sur les thèmes de l’indicateur et son impact éventuel sur les prestations.",
      },
      {
        id: 25,
        titre: "Indicateur 25 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire réalise une veille sur les innovations pédagogiques et technologiques permettant une évolution  de ses prestations et en exploite les enseignements.",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en place d’une veille sur les thèmes de l’indicateur et son impact éventuel sur les prestations.",
      },
      {
        id: 26,
        titre: "Indicateur 26 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire mobilise les expertises, outils et réseaux nécessaires pour accueillir, accompagner/former ou orienter les publics en situation de handicap",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en place d’un réseau de partenaires/experts/acteurs du champ du handicap, mobilisable par les personnels et dans le cas d’accueil de personnes en situation de handicap, préciser les mesures spécifiques mises en œuvre.",
      },
      {
        id: 27,
        titre: "Indicateur 27 | Indicateur Commun d'Appréciation",
        description:
          "Lorsque le prestataire fait appel à la sous-traitance ou au portage salarial, il s’assure du respect de la conformité au présent référentiel.",
        niveauAttendu:
          "Niveau Attendu: Démontrer les dispositions mises en place pour vérifier le respect de la conformité au présent référentiel par le sous-traitant ou le salarié porté.",
      },
      {
        id: 28,
        titre: "Indicateur 28 | Indicateur Spécifique d'Appréciation (OF, CFA)",
        description:
          "Lorsque les prestations dispensées au bénéficiaire comprennent des périodes de formation en situation de travail, le prestataire mobilise son réseau de partenaires socio-économiques pour co-construire l’ingénierie de formation et favoriser l’accueil en entreprise.",
        niveauAttendu:
          "Niveau Attendu: Démontrer l’existence d’un réseau de partenaires socio-économiques mobilisé tout au long de la prestation.",
      },
      {
        id: 29,
        titre: "Indicateur 29 | Indicateur Spécifique d'Appréciation (CFA)",
        description:
          "Le prestataire développe des actions qui concourent à l’insertion professionnelle ou la poursuite d’étude par la voie de l’apprentissage ou par toute autre voie permettant de développer leurs connaissances et leurs compétences.",
        niveauAttendu:
          "Niveau Attendu: Démontrer l’existence d’actions qui concourent à l’insertion professionnelle ou la poursuite d’études.",
      },
    ],
  },
  {
    id: 7,
    titre: "CRITÈRE 1",
    description:
      "Le recueil et la prise en compte des appréciations et des réclamations formulées par les parties prenantes aux prestations délivrées",
    indicateurs: [
      {
        id: 30,
        titre: "Indicateur 30 | Indicateur Commun d'Appréciation",
        description:
          "Le prestataire recueille les appréciations des parties prenantes: bénéficiaires, financeurs, équipes pédagogiques et entreprises concernées..",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en place d’un système de collecte des appréciations à une fréquence pertinente, incluant des dispositifs de relance et permettant une libre expression.",
      },
      {
        id: 31,
        titre: "Indicateur 31 | Indicateur Commun d'Appréciation",
        description:
          " Le prestataire met en œuvre des modalités de traitement des difficultés rencontrées par les parties prenantes, des réclamations exprimées par ces dernières,des aléas survenus en cours de prestation..",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en place de modalités de traitement des aléas, difficultés et réclamations.",
      },
      {
        id: 32,
        titre:
          "Indicateur 32 - Indicateur Commun d'Appréciation",
        description:
          "Le prestataire met en œuvre des mesures d’amélioration à partir de l’analyse des appréciations et des réclamations.",
        niveauAttendu:
          "Niveau Attendu: Démontrer la mise en place d’une démarche d’amélioration continue.",
      },
    ],
  },
  // Ajoutez d'autres critères et indicateurs ici comme les critères 1 et 2 ci-dessus
];

function Critere() {
  const [openAccordion, setOpenAccordion] = useState(null); // Aucun accordéon n'est ouvert par défaut

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
                  className={`accordion-button ${openAccordion === critere.id ? "active" : ""
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
