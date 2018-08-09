import React, { Component } from 'react'
import STORE from '../../store'

import Navigation from '../../components/Navigation'

// import '../../css/skeleton.css'
import './App.css'

class AppLayout extends Component {

    render() {
      return (
        <div className="App">
          <Navigation isAuth={!!STORE.token}/>
          <div className="main-content">
            { this.props.children }
          </div>
        </div>
      )
    }
  }

export default AppLayout
