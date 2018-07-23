import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Login from "../Login"
import SignUp from "../SignUp"
import SignOut from "../SignOut"
import MealsTable from '../MealsTable'

import API from '../../API'
import STORE from '../../store'

import './style.css'


class Home extends Component {
  state = {
    title: "",
    description: "",
    feeling: 0,
    loggedIn: !!STORE.token,
    meals: [],
    isLoading: false,
    message: ''
  }

  getAllMeals = () => {
    this.setState({isLoading: true})
    API.getMeals().then((res) => {
      console.log(res)
      this.setState({
        meals: res.data.meals.reverse(),
        isLoading: false,
        message: ''
      })
      if(res.data.meals.length === 0) {
        this.setState({message: "No Meals Yet!"})
      }
    }).catch((err) => {
      this.setState({
        message: err.message,
        isLoading: false
      })
      console.error(err.message)
    })
  }

  postMeal = (e) => {
    e.preventDefault()
    this.setState({isLoading: true})
    let data = {
      meal: {
        title: this.state.title,
        description: this.state.description,
        feeling: this.state.feeling,
        eaten_on: moment().format("YYYY-MM-DDTHH:mm:ss.SSS")
      }
    }
    API.createMeal(data).then((res) => {
      this.getAllMeals()
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

  onRemoveMeal = (id) => {
    API.removeMeals(id).then((res) => {
      let newArr = this.state.meals.filter((meal) => {
        return meal.id !== id
      })
      this.setState({meals: newArr})
    })
  }

  feelingValues = [1,2,3,4,5,6,7,8,9,10]

  render() {
    return (
      <div>
        <button onClick={this.getAllMeals}>Get Meals</button>

        <form onSubmit={this.postMeal}>
          <input type="text" placeholder="Meal Title" onChange={this.onMealTitleChange}/>
          <input type="text" placeholder="Meal description" onChange={this.onMealDescriptionChange}/>
          <select onChange={this.onFeelingChange}>
            <option value="default">How Did You Feel?</option>
            {this.feelingValues.map((val, i) => <option value={val} key={i}>{val}</option>)}
          </select>
          <button>Submit</button>
        </form>
        {this.state.meals.length > 0 &&
          <MealsTable meals={this.state.meals} onDelete={this.onRemoveMeal}/>
        }
        {!!this.state.isLoading &&
          <h2>LOADING...</h2>
        }
        <h4>{this.state.message}</h4>
      </div>
    )
  }
}

export default Home