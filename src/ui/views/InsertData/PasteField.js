import React, { Component } from "react";

export default class PasteField extends Component {
  render() {
    return (
      <section className="content">
        <h4 style={{ marginTop: "1rem" }}>
          OPTIONAL STEP 2:
          <br />
          Use EKHex to copy all pokémon you've caught to your clipboard
        </h4>
        <textarea
          className="textarea"
          placeholder="PASTE TEAM HERE"
          rows={7}
        ></textarea>
        <button
          style={{ marginTop: "1rem" }}
          className="button is-info is-link"
        >
          SUBMIT ALL CHANGES
        </button>
        <button
          style={{ marginTop: "1rem", marginLeft: "1rem" }}
          className="button is-info is-danger"
        >
          RESET RUN DATA
        </button>
      </section>
    );
  }
}
