import React from "react";
import "../components/style/tbord.css";
import Critere from "../models/Criteres";

function TableauBord({ critereData }) {
  return (
    <div>
      <h1>Tableau de Bord</h1>
      <Critere critereData={critereData} />
    </div>
  );
}

export default TableauBord;
