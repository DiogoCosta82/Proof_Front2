import React, { useState, useEffect } from "react";
import criteresData from "./critereData.json";
import swal from "sweetalert2";

function Indicateur({ titre, description, niveauAttendu, commentaires }) {
  const [inputFields, setInputFields] = useState([
    { id: 0, texte: "", lienPreuve: "", indicateur_id: null },
  ]);
  const [showCommentaires, setShowCommentaires] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [user_id, setUserId] = useState(null);
  const [dossier_id, setDossierId] = useState(null);

  useEffect(() => {
    const user_id = sessionStorage.getItem("user_id");
    const dossier_id = sessionStorage.getItem("dossier_id");

    const indicateur_id = findIndicateurId(titre);

    setInputFields([
      { id: 0, texte: "", lienPreuve: "", indicateur_id: indicateur_id },
    ]);

    setUserId(user_id);
    setDossierId(dossier_id);
  }, [titre]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length,
        texte: "",
        lienPreuve: "",
        indicateur_id: null,
      },
    ]);
  };

  const removeInputField = (id) => {
    if (id === 0) return;
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const updateInputValue = (id, field, newValue) => {
    setInputFields(
      inputFields.map((inputField) =>
        inputField.id === id ? { ...inputField, [field]: newValue } : inputField
      )
    );
  };

  const findIndicateurId = (titreIndicateur) => {
    for (const critere of criteresData) {
      for (const indicateur of critere.indicateurs) {
        if (indicateur.titre === titreIndicateur) {
          return indicateur.id;
        }
      }
    }
    return 0;
  };

  const handleSubmit = async () => {
    const firstInputField = inputFields[0];

    const formData = {
      user_id: parseInt(user_id, 10),
      dossier_id: parseInt(dossier_id, 10),
      indicateur_id: parseInt(firstInputField.indicateur_id, 10),
      texte_indicateur: firstInputField.texte,
      liens_preuve: firstInputField.lienPreuve,
    };

    console.log(formData);
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/indicateur-data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          setIsEdited(true);
          swal.fire("Succès", "Données enregistrées avec succès", "success");
        } else {
          swal.fire("Erreur", "L'enregistrement n'a pas réussi!", "error");
        }
      } else {
        swal.fire(
          "Erreur",
          "Une erreur s'est produite lors de la requête",
          "error"
        );
      }
    } catch (error) {
      console.error("Erreur lors de la requête HTTP", error);
      swal.fire(
        "Erreur",
        "Une erreur s'est produite lors de la requête",
        "error"
      );
    }
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
          {inputFields.map((field) => (
            <div key={field.id} className="input-container">
              <div className="input-field">
                <textarea
                  className="text_indicateur"
                  placeholder={`Écrivez votre texte ici pour l'indicateur ${field.indicateur_id}...`}
                  rows="3"
                  cols="30"
                  value={field.texte}
                  onChange={(e) =>
                    updateInputValue(field.id, "texte", e.target.value)
                  }
                ></textarea>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className="lien_indicateur"
                  placeholder={`Ajouter lien de preuve ici pour l'indicateur ${field.indicateur_id}...`}
                  value={field.lienPreuve}
                  onChange={(e) =>
                    updateInputValue(field.id, "lienPreuve", e.target.value)
                  }
                />
              </div>
              {field.id !== 0 && (
                <button
                  type="button"
                  onClick={() => removeInputField(field.id)}
                  className="btn btn-danger btn-sm text-black inside-input-button"
                >
                  -
                </button>
              )}
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
            className={`btn btn-warning btn-sm ${
              isEdited ? "btn-disabled" : ""
            }`}
            onClick={() => setShowCommentaires(!showCommentaires)}
          >
            Voir commentaires
          </button>
          <button type="button" className="btn btn-danger btn-sm text-black">
            Non concerné
          </button>
          <button
            type="button"
            className={`btn ${
              isEdited ? "btn-disabled" : "btn-success"
            } btn-sm text-black`}
            onClick={isEdited ? null : handleSubmit}
          >
            {isEdited ? "Éditer" : "Valider"}{" "}
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
