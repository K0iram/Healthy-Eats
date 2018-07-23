import React, { Component } from 'react'

import Navigation from '../../components/Navigation'

import '../../css/skeleton.css'
import './App.css'

class AppLayout extends Component {

    render() {
      return (
        <div className="App">
          <Navigation/>
          <div className="main-content">
            { this.props.children }
          </div>
        </div>
      )
    }
  }

export default AppLayout
