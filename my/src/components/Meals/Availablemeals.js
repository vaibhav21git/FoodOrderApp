import React from 'react'
import classes from './Availablemeals.module.css'
import Card from '../UI/Card';
import Mealitem from './Mealitem/Mealitem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

function Availablemeals() {

    const mealist  =  DUMMY_MEALS.map(meal => <li>
        <Mealitem 
             key  = {meal.id}
             name = {meal.name}
             description = {meal.description}
             price = {meal.price}
         />
    </li>)

  return (<section className={classes.meals}>
    <Card>
    <ul>
     {mealist}
    </ul>
    </Card>
 </section>
  )
}

export default Availablemeals