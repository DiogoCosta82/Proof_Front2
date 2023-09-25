// Indicateur.js
import React, { useState } from "react";

function Indicateur({ titre, description, niveauAttendu, commentaires }) {
  const [inputFields, setInputFields] = useState([{ id: 0, value: "" }]);
  const [showCommentaires, setShowCommentaires] = useState(false);

  const addInputField = () => {
    setInputFields([...inputFields, { id: inputFields.length, value: "" }]);
  };

  const removeInputField = (id) => {
    if (id === 0) return;
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const updateInputValue = (id, newValue) => {
    setInputFields(
      inputFields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };

  return (
    <div className="custom-card">
      <div className="custom-card-header">
        <h5 className="custom-card-title text-center">{titre}</h5>
      </div>
      <div className="custom-card-body">
        <div className="left-column">
          <p className="large-paragraph">{description}</p>
        </div>
        <div className="right-column">
          <p className="small-paragraph">{niveauAttendu}</p>
        </div>

        <div>
          <br />
          <textarea
            className="text_indicateur"
            placeholder="Écrivez votre texte ici...."
            rows="3"
            cols="30"
          ></textarea>
          <br />
          {inputFields.map((field, index) => (
            <div key={field.id} className="input-container">
              <div className="input-field">
                <input
                  type="text"
                  className="lien_indicateur"
                  placeholder="Ajouter lien de preuve ici..."
                  value={field.value}
                  onChange={(e) => updateInputValue(field.id, e.target.value)}
                />
                {index !== 0 && (
                  <button
                    type="button"
                    onClick={() => removeInputField(field.id)}
                    className="btn btn-danger btn-sm text-black inside-input-button"
                  >
                    -
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="left-buttons">
            <button
              type="button"
              onClick={addInputField}
              className="btn btn-success btn-sm text-black"
            >
              +
            </button>
          </div>
        </div>
        <br />
        <div className="button-group">
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => setShowCommentaires(!showCommentaires)}
          >
            Voir commentaires
          </button>
          <button type="button" className="btn btn-danger btn-sm text-black">
            Non concerné
          </button>
          <button type="button" className="btn btn-success btn-sm text-black">
            Valider
          </button>
        </div>
        {showCommentaires && (
          <div className="titreCommentaires">
            <h5>Commentaires d'amélioration :</h5>
            <div className="commentaires-container">
              {commentaires.length > 0 ? (
                <ul>
                  {commentaires.map((commentaire, index) => (
                    <li key={index}>{commentaire}</li>
                  ))}
                </ul>
              ) : (
                <p>Pas de commentaires</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Indicateur;
