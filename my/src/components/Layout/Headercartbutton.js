import React from 'react'
import CartIcon from '../Cart/Carticon'
import classes from './Headercartbutton.module.css'
import {useContext} from 'react'
import CartContext from '../../assets/store/card-context'

function Headercartbutton(props) {

  const cartctx =  useContext(CartContext);

  // reduce is used to transform an array into the single number

  const numberofcartitems = cartctx.items.reduce((currnumber,item) => {
    return currnumber + item.amount;
  } ,0);


  return (<>
   <button className={classes.button} onClick = {props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberofcartitems}</span>
   </button>
  </>
  )
}

export default Headercartbutton