import React from 'react'
import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'


function App() {

   const [cartshow , setcartshow] = useState(false);

   function showcardhandler()
   {
      setcartshow(true);
   }

   function  hidecardhandler()
   {
      setcartshow(false);
   }


  return (<>
  {cartshow && <Cart onClose = {hidecardhandler}/>}
    <Header onshowcart ={showcardhandler}/>
    <main>
     <Meals/>
    </main>
  </>
  )
}

export default App