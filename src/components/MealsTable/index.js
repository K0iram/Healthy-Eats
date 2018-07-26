import React from 'react'

import './style.css'


const MealsTable = (props) => {
  const { meals, onDelete } = props
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
        { meals.map((meal, i) =>
          <tr key={i} data-id={meal.id}>
            <td>{meal.title}</td>
            <td>{meal.description}</td>
            <td>{meal.eaten_on}</td>
            <td>{meal.feeling}</td>
            <td>
            <button>edit</button>
            <button onClick={() => onDelete(meal.id)}>remove</button>
            </td>
          </tr>
        )
        }
        </tbody>
      </table>
    </div>
  )
}

export default MealsTable