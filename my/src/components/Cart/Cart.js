import React from 'react'
import classes from './Cart.module.css'

//[card-items] used
// instead because dash is not used with dot

function Cart(props) {

    const carditems = <ul className={classes['card-items']}>{[{id : 'c1' , name : 'Sushi' , amount : 2 , price : 12.99}].map(item =>
        <li>{item.name}</li>)}</ul>
  return (<div>
      {carditems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes['button']}>Order</button>
      </div>
    </div>
  )
}

export default Cart