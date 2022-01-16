import React from 'react'
import logo from './logo.svg';
import './Title.css';
import SearchBar from './SearchBar';

function Title() {
  return (
    <div className= "Title">
        <div className = "logo-div" >
            <img className="app_logo" src = {logo}/>
        <h2>useums</h2>
        <div className = "search-bar">
            <SearchBar></SearchBar>
        </div>
        </div>
    </div>
  )
}

export default Title