import React, { Component } from 'react'
import API from '../../API'
import STORE from '../../store'

import './style.css'


class Login extends Component {
  state = {
    email: '',
    password: '',
    loggedIn: !!STORE.token
  }

  onEmailChange = e => {
    this.setState({email: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  handleLogin = (e) => {
    e.preventDefault()
        let data = {credentials: {email: this.state.email, password: this.state.password}}
        API.signIn(data).then((res) => {
          STORE.user = res.data.user
          STORE.token = res.data.user.token
          window.localStorage.setItem('user', JSON.stringify(res.data.user))
          this.setState({loggedIn: true})
        })
        .catch((err) => {
          console.error(err)
        })
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <input type="text" placeholder="Your Email" onChange={this.onEmailChange} value={username}/>
        <input type="password" placeholder="Your Password" onChange={this.onPasswordChange} value = {password}/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default Login