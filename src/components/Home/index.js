import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from "../Login"
import SignUp from "../SignUp"
import SignOut from "../SignOut"

import STORE from '../../store'

import './style.css'


class Home extends Component {
  render() {
    return (
      <div>
      { window.localStorage.length > 0 &&
        <div className="log-out">
          <Link to="/signOut"><button>Log Out</button></Link>
        </div>
      }
        <div className="login">
          <Login/>
        </div>
      </div>
    )
  }
}

export default Home