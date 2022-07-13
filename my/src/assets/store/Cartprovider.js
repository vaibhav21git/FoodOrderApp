import React from 'react'
import CartContext from './card-context'

// the role of this component is to manage the context data and provide it 
// to those components who needs it

function Cartprovider(props) {

    function additemtocarthandler(props)
    {

    }

    function removeitemtocarthandler(props)
    {
        
    }

 const cartcontext = {
   items: [],
   totamount : 0,
   additem : additemtocarthandler,
   removeitem : removeitemtocarthandler

 };

  return (<CartContext.Provider value = {cartcontext}>
    {props.children}
  </CartContext.Provider>
  
  )
}

export default Cartprovider