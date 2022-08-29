import React, { Component } from "react";
import { connect } from "react-redux";
import { routeActions } from "../../../store/slices/routeButtons";
class RouteButton extends Component {
  // EDIT REDUX STATE VALUE
  // Routes where you've caught pokemon should have a value of true... and vice versa
  /*
    {
      Littleroot Town: true // means we caught a pokemon here already
      Route 102: false, // means we have not caught anything here yet
    }
  */
  toggleButton() {
    this.props.dispatch(routeActions.toggle(this.props.areaName));
  }
  render() {
    // Assign an "is-light" class, but only for routes where you've caught a pokemon already
    let routeStatus = this.props.route[this.props.areaName]; // ACCESS REDUX STATE VALUE
    let conditionalClass = routeStatus === false ? "" : "is-light";
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

// Feed our class the redux state object via props (helps you view state values)
function mapStateToProps(state) {
  const route = state.route;
  return { route }; // can acces with this.props.route in our class
}
// Let our class dispatch actions to edit Redux state values

export default connect(mapStateToProps)(RouteButton);

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
