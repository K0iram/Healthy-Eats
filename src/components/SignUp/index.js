import React, { Component } from 'react'
import API from '../../API'
import STORE from '../../store'

import './style.css'


class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  onUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  onEmailChange = e => {
    this.setState({email: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  isDisabled = () => {
    const {username, email, password} = this.state
    if(username === "" || email === "" || password === "") {
      return true
    } else {
      return false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.state

    API.signUp(data).then(this.handleLogin)
      .catch((err) => {
        console.error(err)
      })
  }

  handleLogin = () => {
    let data = {username: this.state.username, password: this.state.password}
    API.signIn(data).then((res) => {
      STORE.user = res.data.userId
      STORE.token = res.data.id
      window.localStorage.setItem('user', JSON.stringify(res.data))
      this.setState({registered: true})
    })
  }

  render() {
    const {username, email, password} = this.state
    return (
      <div>
        <input type="text" placeholder="Your Username" onChange={this.onUsernameChange} value={username}/>
        <input type="email" placeholder="Your Email" onChange={this.onEmailChange} value={email}/>
        <input type="password" placeholder="Choose a Password" onChange={this.onPasswordChange} value={password}/>
        <button disabled={this.isDisabled()} onClick={this.handleSubmit}>Sign Up</button>
      </div>
    )
  }
}

export default SignUp