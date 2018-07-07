import React, { Component } from 'react'

import Nav from '../../components/Nav'

import '../../css/skeleton.css'
import './App.css'

class AppLayout extends Component {

    render() {
      return (
        <div className="App">
          <Nav/>
          <div className="main-content">
            { this.props.children }
          </div>
        </div>
      )
    }
  }

export default AppLayout
