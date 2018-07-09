import React, { Component } from 'react'
import API from '../../API'
import STORE from '../../store'

import './style.css'


class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  onUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  handleLogin = () => {
    let data = {username: this.state.username, password: this.state.password}
    API.signIn(data).then((res) => {
      STORE.user = res.data.userId
      STORE.token = res.data.id
      window.localStorage.setItem('user', JSON.stringify(res.data))
      console.log(STORE)
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <input type="text" placeholder="Your Username" onChange={this.onUsernameChange} value={username}/>
        <input type="password" placeholder="Your Password" onChange={this.onPasswordChange} value = {password}/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login