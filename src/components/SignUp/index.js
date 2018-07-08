import React, { Component } from 'react'

import './style.css'


class SignUp extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email"/>
        <input type="password" placeholder="Choose a Password"/>
        <button>Sign Up</button>
      </div>
    )
  }
}

export default SignUp