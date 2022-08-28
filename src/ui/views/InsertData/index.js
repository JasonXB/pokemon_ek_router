import React, { Component } from "react";
import VisitedRoutes from "./VisitedRoutes";
import PasteField from "./PasteField";

export default class index extends Component {
  render() {
    return (
      <>
        <VisitedRoutes />
        <PasteField />
      </>
    );
  }
}
