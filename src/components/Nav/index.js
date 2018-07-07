import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'


class Nav extends Component {

  burgerToggle = () => {
    let linksEl = document.querySelector('.narrowLinks');

    linksEl.style.display === 'block' ? (
      linksEl.style.display = 'none'
    ) : (
      linksEl.style.display = 'block'
    )
  }

  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <NavLink to="/home" className="nav-link" activeClassName="active"><p>Home</p></NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active"><p>About</p></NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active"><p>Contact</p></NavLink>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrowLinks">
            <NavLink to="/home" onClick={this.burgerToggle} className="nav-link" activeClassName="active"><p>Home</p></NavLink>
            <NavLink to="/about" onClick={this.burgerToggle} className="nav-link" activeClassName="active"><p>About</p></NavLink>
            <NavLink to="/contact" onClick={this.burgerToggle} className="nav-link" activeClassName="active"><p>Contact</p></NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav