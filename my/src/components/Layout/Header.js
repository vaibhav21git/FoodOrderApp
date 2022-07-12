import React from 'react'
import mealsimg from '../../assets/meals.png'
import Headercartbutton from './Headercartbutton'
import classes from './Header.module.css'

//since main-image so u cannot use dot

function Header() {
  return (<>
  <header className={classes.header}>
  <h1>ReactMeals</h1>
  <Headercartbutton/>
  </header>
  <div className= {classes['main-image']}>
    <img src = {mealsimg} alt ="A Table Full of Delicious Dishes" />
  </div>
  </> 
  )
}

export default Header