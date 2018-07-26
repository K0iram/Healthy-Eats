import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import API from '../../../API'
import STORE from '../../../store'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './style.css'

const style = {
  margin: 12,
};

class ChangePass extends Component {
  state = {
    password: '',
    password_new: '',
    registered: !!STORE.token
  }

  clearValue = () => {
    this.setState({password: '', password_new: ''})
  }

  handlePassChange = (event) => {
    this.setState({password: event.target.value})
  }

  handlePassConfirmChange = (event) => {
    this.setState({password_new: event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    let data = {passwords: {old: this.state.password, new: this.state.password_new}}
    API.changePassword(data).then((res) => {
      this.clearValue()
      console.log("You have successfully changed your password")
    })
    .catch((err) => {
      console.error(err)
    })
    }

  render() {

    return (
      <div className='changeForm'>
        <h2> Change your password </h2>
      <form className='change-pass' onSubmit={this.handleSubmit}>
        <TextField
            floatingLabelText="Password"
            type="password"
            required={true}
            onChange={this.handlePassChange}
            value={this.state.password}/>
        <TextField
            floatingLabelText="Password Confirmation"
            type="password"
            required={true}
            onChange={this.handlePassConfirmChange}
            value={this.state.password_confirmation}/>
          <div>
            <Button variant="outlined "label="Submit" primary={true} style={style} type="submit" value="Submit"/>
            <Link to="/home"><Button variant="outlined "label="Cancel" default={true} style={style}/></Link>
          </div>
      </form>

      </div>


    )
  }
}

export default ChangePass
