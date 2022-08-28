import React, { Component } from "react";
import { connect } from "react-redux";

class ToggleButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, route: 6 }; // all state variables go here
  }

  // Toggle the state variable telling the button whether to appear selected or not
  // "this" IS UNDEFINED BY DEFAULT IN CUSTOM METHODS (REQUIRES REBIND FOR EACH METHOD CALL)
  toggleButton() {
    this.setState({ selected: !this.state.selected });
  }
  // "this" REFERS TO THE CURRENT CLASS IN THE RENDER METHOD (NO REBIND NEEDED)
  render() {
    // Clicking on a button should toggle whether that button has a certain class or not
    let conditionalClass = this.state.selected === false ? "" : "is-light";
    return (
      <button
        onClick={this.toggleButton.bind(this)} // must set value of "this" inside toggleButton method
        className={`button is-small ${conditionalClass}`}
        style={s.button}
      >
        {this.props.areaName}
      </button>
    );
  }
}
// STYLING JSX
const s = {
  button: {
    margin: 0,
    marginRight: "0.35rem",
    marginBottom: "0.35rem",
    fontSize: "1rem",
    width: "10rem",
  },
};

function mapStateToProps(state) {
  const route = state.route;
  return { route };
}
export default connect(mapStateToProps)(ToggleButtons);
