import React, { useState } from 'react';

function TableauBord() {
  const [critere1Open, setCritere1Open] = useState(false);
  const [indicateur1Open, setIndicateur1Open] = useState(false);
  const [indicateur2Open, setIndicateur2Open] = useState(false);
  const [indicateur3Open, setIndicateur3Open] = useState(false);

  return (
    <div>
      <h1>Tableau de Bord</h1>

      <div className="accordion">
        {/* Critère 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${critere1Open ? 'active' : ''}`}
              onClick={() => setCritere1Open(!critere1Open)}
            >
              Critère 1 - Les conditions d’information du public sur les prestations proposées, les délais pour y accéder et les résultats obtenus
            </button>
          </h2>
          {critere1Open && (
            <div className="accordion-collapse collapse show">
              <div className="accordion-body">
                {/* Indicateur 1 */}
                <div>
                  <h3>Indicateur 1 - INDICATEUR COMMUN D’APPRECIATION</h3>
                  <p>Le prestataire diffuse une information accessible au public, détaillée et vérifiable sur les prestations proposées : prérequis, objectifs, durée, modalités et délais d’accès, tarifs, contacts, méthodes mobilisées et modalités d’évaluation, accessibilité aux personnes handicapées.</p>
                  <button onClick={() => setIndicateur1Open(!indicateur1Open)}>Commentaires</button>
                  <button>Non concerné</button>
                  <button>Valider</button>
                  {indicateur1Open && (
                    <div>
                      <label>ELÉMENTS DE PREUVE:</label>
                      <input type="text" />
                      <label>OBLIGATIONS SPÉCIFIQUES:</label>
                      <input type="text" />
                      <label>NON-CONFORMITÉ:</label>
                      <input type="text" />
                    </div>
                  )}
                </div>
                {/* Indicateur 2 */}
                <div>
                  <h3>Indicateur 2 - INDICATEUR COMMUN D’APPRECIATION</h3>
                  <p>Le prestataire diffuse des indicateurs de résultats adaptés à la nature des prestations mises en œuvre et des publics accueillis.</p>
                  <button onClick={() => setIndicateur2Open(!indicateur2Open)}>Commentaires</button>
                  <button>Non concerné</button>
                  <button>Valider</button>
                  {indicateur2Open && (
                    <div>
                      <label>ELÉMENTS DE PREUVE:</label>
                      <input type="text" />
                      <label>OBLIGATIONS SPÉCIFIQUES:</label>
                      <input type="text" />
                      <label>NON-CONFORMITÉ:</label>
                      <input type="text" />
                    </div>
                  )}
                </div>
                {/* Indicateur 3 */}
                <div>
                  <h3>Indicateur 3 - INDICATEUR SPECIFIQUE D’APPRECIATION (OF, CFA, VAE)</h3>
                  <p>Lorsque le prestataire met en œuvre des prestations conduisant à une certification professionnelle, il informe sur les taux d’obtention des certifications préparées, les possibilités de valider un/ou des blocs de compétences, ainsi que sur les équivalences, passerelles, suites de parcours et les débouchés.</p>
                  <button onClick={() => setIndicateur3Open(!indicateur3Open)}>Commentaires</button>
                  <button>Non concerné</button>
                  <button>Valider</button>
                  {indicateur3Open && (
                    <div>
                      <label>ELÉMENTS DE PREUVE:</label>
                      <input type="text" />
                      <label>OBLIGATIONS SPÉCIFIQUES:</label>
                      <input type="text" />
                      <label>NON-CONFORMITÉ:</label>
                      <input type="text" />
                    </div>
                  )}
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
