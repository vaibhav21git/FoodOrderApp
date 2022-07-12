import React from 'react'
import CartIcon from '../Cart/Carticon'
import classes from './Headercartbutton.module.css'

function Headercartbutton() {
  return (<>
   <button className={classes.button}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>3</span>
   </button>
  </>
  )
}

export default Headercartbutton