import React from 'react'
import classes from './Input.module.css'

function Input(props) {
  return (<div className={classes.input}>
    <lable htmlFor ={props.input.id}>{props.label}</lable>
    <input {...props.input}/>
    </div>
  )
}

export default Input