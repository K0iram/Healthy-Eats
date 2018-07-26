import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import API from '../../../API'
import STORE from '../../../store'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';

import './style.css'


const style = {
  margin: 12,
};

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    registered: !!STORE.token
  }


handleEmailChange = (event) => {
  this.setState({email: event.target.value})
}

handlePassChange = (event) => {
  this.setState({password: event.target.value})
}

handlePassConfirmChange = (event) => {
  this.setState({password_confirmation: event.target.value})
}

handleSubmit = (event) => {
  event.preventDefault()
  let data = {credentials: this.state}

  API.signUp(data).then(this.handleLogin)
    .catch(() => {
      window.AppNotify("Something went wrong please try again.")
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
    return (
      <div className='upForm'>
        <h2>Sign Up</h2>

          <form className='sign-up' onSubmit={this.handleSubmit}>
                <TextField
                    floatingLabelText="Email"
                    type="email"
                    required="required"
                    onChange={this.handleEmailChange}
                    value={this.state.email}/>
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    required="required"
                    onChange={this.handlePassChange}
                    value={this.state.password}/>
                <TextField
                    floatingLabelText="Password Confirmation"
                    type="password"
                    required="required"
                    onChange={this.handlePassConfirmChange}
                    value={this.state.password_confirmation}/>
              <div>
                <Button variant="outlined" label="Submit" primary={true} style={style} type="submit" value="Submit"/>
              </div>
              <p> Already have an account? Please <Link to="/signin">Login here!</Link></p>
          </form>
      </div>
    );
  }
}

export default SignUp;
