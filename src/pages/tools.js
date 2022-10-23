import React from "react";
import NotesMain from "../Notes/NotesMain";
import Caluculator from "../Tools/Caluculator";
import CheckList from "../Tools/CheckList";

const Tools = ({ props }) => {
  return (
    <div>
      <Caluculator />
      <CheckList />
    </div>
  );
};

export default Tools;
