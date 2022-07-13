import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

function Backdrop(props)
{
   return <div className={classes.backdrop}/>
}

function Modaloverlay(props)
{
   return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
   </div>
}

const portalelement = document.getElementById('overlays');

function Modal(props) {
  return (<>
  {ReactDOM.createPortal(<Backdrop/> ,portalelement  )}
  {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>, portalelement )}
  </>)
}

export default Modal