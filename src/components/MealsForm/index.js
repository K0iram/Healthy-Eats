import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import './style.css'

const feelingValues = [1,2,3,4,5,6,7,8,9,10]

class MealsForm extends Component {
  state = {
    title: '',
    description: '',
    feeling: ''
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

  sendMeal = (e) => {
    e.preventDefault()
    this.props.postMeal(this.state)
    this.setState({
      title: '',
      description: '',
      feeling: ''
    })
  }

  render() {
    const {title, description, feeling} = this.state
    return (
      <Paper className="meal-form">
        <form onSubmit={this.sendMeal}>
          <FormControl className="meal-form__input">
            <InputLabel htmlFor="meal-title">Meal Title</InputLabel>
            <Input id="meal-title" placeholder="Meal Title"value={title} onChange={this.onMealTitleChange} />
          </FormControl>
          <FormControl className="meal-form__input">
            <InputLabel htmlFor="meal-description">Meal Description</InputLabel>
            <Input id="meal-description" placeholder="Meal Description"value={description} onChange={this.onMealDescriptionChange} />
          </FormControl>
          <FormControl className="meal-form__input">
            <Select
              value={!feeling ? 'default' : feeling}
              onChange={this.onFeelingChange}
            >
              <MenuItem value="" disabled>
                How Did You Feel?
              </MenuItem>
              {feelingValues.map((val, i) => <MenuItem value={val} key={i}>{val}</MenuItem>)}
            </Select>
            <FormHelperText>How Did You Feel?</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" label="Submit" type="submit" value="Submit">
            Submit
          </Button>
        </form>
      </Paper>
    )
  }
}

export default MealsForm