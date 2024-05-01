import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'

export const PropsCard = (props) => {
  return (

    <div class="card h-100  " style={{width:'250px'}}>
      <img src={props.img} class="" alt="image"/>
      <div class="card-body">
        <h5 class="card-title">{props.body}</h5>
        <p class="card-text"> {props.class}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>

  )
}

