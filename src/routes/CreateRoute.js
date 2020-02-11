import React from "react";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";
import CreateGameCardCollection from "../components/modules/Create/CreateGameCardCollection";
import CreateAppCardCollection from "../components/modules/Create/CreateAppCardCollection";

// Get content data
let projectTemplates = require("../content/collections/projectTemplates.json")
  .data;

export default function CreateRoute() {
  return (
    <div>
      <Header />
      <PageBody>
        <br />
        <h1 id="title">Create Games and Apps</h1>
        <div className="page-description">
          These templates are where projects begin. They provide the generic
          structure and base logic, so you can focus on what makes your app
          special!
        </div>
        <hr />
        <div className="games-area">
          <h2>Game Templates</h2>
          <CreateGameCardCollection />
        </div>
        <hr />
        <div className="apps-area">
          <h2>App Templates</h2>
          <CreateAppCardCollection />
        </div>
      </PageBody>
      <Footer />
    </div>
  );
}
