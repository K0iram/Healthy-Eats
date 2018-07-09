import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Login from "../Login"
import SignUp from "../SignUp"
import SignOut from "../SignOut"

import API from '../../API'
import STORE from '../../store'

import './style.css'


class Home extends Component {
  state = {
    title: "",
    description: "",
    feeling: 0,
    loggedIn: !!STORE.token
  }

  getAllMeals = (e) => {
    e.preventDefault()
    API.getMeals().then((res) => {
      console.log(res)
    })
  }

  postMeal = (e) => {
    e.preventDefault()
    let data = {
      meal: {
        title: this.state.title,
        description: this.state.description,
        feeling: this.state.feeling,
        eaten_on: moment(Date.now()).format("YYYY-MM-DD")
      }
    }
    API.createMeal(data).then((res) => {
      console.log(res.data)
    })
  }

  onMealTitleChange = e => {
    this.setState({title: e.target.value})
  }
  onMealDescriptionChange = e => {
    this.setState({description: e.target.value})
  }
  onFeelingChange = e => {
    this.setState({feeling: Number(e.target.value)})
  }

  feelingValues = [1,2,3,4,5,6,7,8,9,10]

  render() {
    return (
      <div>
      { this.state.loggedIn &&
        <div className="log-out">
          <Link to="/signOut"><button>Log Out</button></Link>
        </div>
      }
        <div className="login">
          <Login/>
          <SignUp/>
        </div>

        <button onClick={this.getAllMeals}>Get Meals</button>

        <form onSubmit={this.postMeal}>
          <input type="text" placeholder="Meal Title" onChange={this.onMealTitleChange}/>
          <input type="text" placeholder="Meal description" onChange={this.onMealDescriptionChange}/>
          <select onChange={this.onFeelingChange}>
            <option value="default">How Did You Feel?</option>
            {this.feelingValues.map((val) => <option value={val}>{val}</option>)}
          </select>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Home