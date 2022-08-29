import React, { Component } from "react";

export default class PasteField extends Component {
  // Creates a list of pokemon matches in that string, and their (pre)evolutions too
  readInput(){
    const readInput = function () {
      // 
      // These pokemon will now be considered caught
      // There is a state object in Redux with a dedicated KVP for all the pokemon available in-game
      // Update it after reading the input from
    };
  }
  render() {
    return (
      <section className="content">
        <h4 style={s.h4}>
          STEP 2 (optional)
          <br />
          Use EKHex to copy all pokémon you've caught to your clipboard
        </h4>
        <textarea
          className="textarea"
          placeholder="PASTE TEAM HERE"
          rows={5}
        ></textarea>
        <h4 style={s.h4}>
          STEP 3 (mandatory)
          <br />
          To update your run data, click the blue button
          <br />
          To reset your run data, hit the red button
        </h4>
        <button
          style={{ marginTop: "0.5rem" }}
          className="button is-info is-link"
        >
          SUBMIT ALL CHANGES
        </button>
        <button
          style={{ marginTop: "0.5rem", marginLeft: "1rem" }}
          className="button is-info is-danger"
        >
          RESET RUN DATA
        </button>
      </section>
    );
  }
}

const s = {
  h4: { marginTop: "1rem" },
};

// Scans the text input the user pastes


