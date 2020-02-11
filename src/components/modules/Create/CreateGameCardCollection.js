import React from "react";
import CreateCard from "./CreateCard.js";
import { isPropertySignature } from "typescript";

// Get content data
let projectTemplates = require("../../../content/collections/projectTemplates.json")
  .data;

export default function CreateGameCardCollection() {
  return (
    <div className="collection collection--small-cards">
      {projectTemplates.games.map((entry, i) => {
        return <CreateCard entry={entry} key={i} />;
      })}
    </div>
  );
}
