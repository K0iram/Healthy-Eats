import React from 'react'
import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import './style.css'


const MealsTable = (props) => {
  const { meals, onDelete } = props
  return (
    <div>
      <Paper className="meals-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell numeric>Feeling</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meals.map((meal, i) => {
              return (
                <TableRow key={i} data-id={meal.id}>
                  <TableCell>{meal.title}</TableCell>
                  <TableCell>{moment(meal.eaten_on).format('ll')}</TableCell>
                  <TableCell>{meal.description}</TableCell>
                  <TableCell numeric>{meal.feeling}</TableCell>
                  <TableCell className='meals-table__cell'>
                    <Button variant="fab" color="secondary" aria-label="Edit">
                      <EditIcon/>
                    </Button>
                    <Button variant="fab" aria-label="Delete" onClick={() => onDelete(meal.id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default MealsTable