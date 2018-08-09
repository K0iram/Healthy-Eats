import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import API from '../../../API'
import STORE from '../../../store'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button';
import './style.css'


class SignIn extends Component {
  state = {
    email: '',
    password: '',
    loggedIn: !!STORE.token
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handlePassChange = (event) => {
    this.setState({password: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let data = {credentials: {email: this.state.email, password: this.state.password}}
    API.signIn(data).then((res) => {
      STORE.user = res.data.user
      STORE.token = res.data.user.token
      window.localStorage.setItem('user', JSON.stringify(res.data.user))

      console.log("You have successfully logged in as " + this.state.email)
      this.setState({loggedIn: true})
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    if (this.state.loggedIn) return <Redirect to="/home"/>
    return (
      <div className='inForm'>
        <h2>Sign In</h2>

          <form className='sign-in' onSubmit={this.handleSubmit}>
            <Input
              className="auth__input"
              placeholder="Your Email"
              inputProps={{
                'aria-label': 'Email',
              }}
              required="required"
              onChange={this.handleEmailChange}
              value={this.state.email}
              type="email"
            />
            <Input
              className="auth__input"
              placeholder="Your Password"
              inputProps={{
                'aria-label': 'Password',
              }}
              required="required"
              onChange={this.handlePassChange}
              value={this.state.password}
              type="password"
            />
            <div>
            <Button variant="contained" color="primary" label="Submit" type="submit" value="Submit">
            Submit
            </Button>
            </div>
            <footer>
              <p> Don't have an account? Please <Link to="/signup">Sign Up!</Link></p>
            </footer>
          </form>
          <p> Don't want to save your finished stories? Go back <Link to="/home">home</Link> to keep playing!</p>
      </div>
    );
  }
}

export default SignIn;
