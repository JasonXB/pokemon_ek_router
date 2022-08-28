import React, { Component } from "react";
import RouteButton from "./RouteButton";
import { routesList } from "../../../game_data/routes/list";

export default class VisitedRoutes extends Component {
  render() {
    return (
      <section className="content">
        <h4 style={{ marginTop: "1rem" }}>
          STEP 1 (optional)
          <br />
          Click on each route where you've already caught a pokémon
        </h4>
        {routesList.map((el) => {
          return <RouteButton areaName={el} />;
        })}
      </section>
    );
  }
}
