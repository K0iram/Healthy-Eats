import React, { Component } from 'react'
import API from '../../API'
import STORE from '../../store'

import './style.css'


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    registered: !!STORE.token
  }

  onEmailChange = e => {
    this.setState({email: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

   onPasswordConfChange = e => {
    this.setState({password_confirmation: e.target.value})
  }

  isDisabled = () => {
    const {username, email, password} = this.state
    if(username === "" || email === "" || password === "") {
      return true
    } else {
      return false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password, password_confirmation } = this.state
    let data = {credentials: {email: email, password: password, password_confirmation: password_confirmation}}

    API.signUp(data).then(this.handleLogin)
      .catch((err) => {
        console.error(err)
      })
  }

  handleLogin = () => {
    let data = {credentials: {email: this.state.email, password: this.state.password}}
    API.signIn(data).then((res) => {

      STORE.user = res.data.user
      STORE.token = res.data.user.token
      window.localStorage.setItem('user', JSON.stringify(res.data.user))
      this.setState({registered: true})
      console.log("Thank you for signing up")
    })
  }

  render() {
    const { email, password, password_confirmation} = this.state
    return (
      <div>
        <input type="email" placeholder="Your Email" onChange={this.onEmailChange} value={email}/>
        <input type="password" placeholder="Choose a Password" onChange={this.onPasswordChange} value={password}/>
        <input type="password" placeholder="Confirm your Password" onChange={this.onPasswordConfChange} value={password_confirmation}/>
        <button disabled={this.isDisabled()} onClick={this.handleSubmit}>Sign Up</button>
      </div>
    )
  }
}

export default SignUp