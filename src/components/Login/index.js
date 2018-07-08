import React, { Component } from 'react'

import './style.css'


class Login extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Your Email"/>
        <input type="password" placeholder="Your Password"/>
        <button>Login</button>
      </div>
    )
  }
}

export default Login