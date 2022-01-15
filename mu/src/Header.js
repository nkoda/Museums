import React from 'react'
import logo from './logo.svg';
import './Title.css';

function Title() {
  return (
    <div className= "Title">
        <div className = "logo-div" >
            <img className="app_logo" src = {logo}/>
        <h1>Museums</h1>
            
        </div>
    </div>
  )
}

export default Title