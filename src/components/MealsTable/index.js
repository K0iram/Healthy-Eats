import React, { Component } from 'react'

import './style.css'


class MealsTable extends Component {

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Feeling</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          { this.props.meals.map((meal, i) =>
            <tr key={i} data-id={meal.id}>
              <td>{meal.title}</td>
              <td>{meal.description}</td>
              <td>{meal.eaten_on}</td>
              <td>{meal.feeling}</td>
            </tr>
          )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default MealsTable