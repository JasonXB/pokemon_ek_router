import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand" style={{ marginTop: 0 }}>
          <h1 className="navbar-item" style={s.title}>
            EK&nbsp; Encounters
          </h1>

          <a
            href="adjust-later" //! fix every instance of this href value
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-end">
          <div className="navbar-start">
            <a className="navbar-item" href="adjust-later" style={s.navItems}>
              Poké-Search
            </a>
            <a className="navbar-item" href="adjust-later" style={s.navItems}>
              Route Data
            </a>
            <a className="navbar-item" href="adjust-later" style={s.navItems}>
              Record Encounters
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

// JSX INLINE STYLING
const s = {
  title: {
    fontFamily: `'Bungee', cursive`,
    fontSize: "1.75rem",
    paddingLeft: 0,
  },
  navItems: { paddingInline: "1.5rem" },
};
