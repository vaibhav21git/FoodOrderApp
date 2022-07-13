import React from 'react'
import CartIcon from '../Cart/Carticon'
import classes from './Headercartbutton.module.css'

function Headercartbutton(props) {
  return (<>
   <button className={classes.button} onClick = {props.onClick}>
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