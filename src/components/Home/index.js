import React, { Component } from 'react'
import Login from "../Login"
import SignUp from "../SignUp"

import './style.css'


class Home extends Component {

  render() {
    return (
      <div>
        <Login/>
        <SignUp/>
      </div>
    )
  }
}

export default Home