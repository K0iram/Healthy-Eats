import React, { Component } from 'react'
import moment from 'moment'
import MealsForm from '../MealsForm'
import MealsTable from '../MealsTable'
import Hero from '../Hero'
import Button from '@material-ui/core/Button';

import API from '../../API'
import STORE from '../../store'

import './style.css'


class Home extends Component {
  state = {
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

  postMeal = (obj) => {
    this.setState({isLoading: true})
    let data = {
      meal: {
        title: obj.title,
        description: obj.description,
        feeling: obj.feeling,
        eaten_on: moment().format("YYYY-MM-DDTHH:mm:ss.SSS")
      }
    }
    API.createMeal(data).then((res) => {
      this.getAllMeals()
    })
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
    return this.state.loggedIn ? (
      <div>
        <MealsForm postMeal={this.postMeal}/>
        <Button
          onClick={this.getAllMeals}
          variant="contained"
          className="meals-btn"
          label="Get Meals"
        >
          Get Meals
        </Button>
        {this.state.meals.length > 0 &&
          <MealsTable meals={this.state.meals} onDelete={this.onRemoveMeal}/>
        }
        {!!this.state.isLoading &&
          <h2>LOADING...</h2>
        }
        <h4>{this.state.message}</h4>
      </div>
    ):(
      <Hero/>
    )
  }
}

export default Home