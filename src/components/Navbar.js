import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-4">
          <a href="#!" className="brand-logo">Logo</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Post's<i class="material-icons right">arrow_drop_down</i></a></li>
            <li><a href="badges.html">Contato</a></li>
            <li><a href="badges.html">Quem somos?</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
