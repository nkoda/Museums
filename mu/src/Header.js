import React from 'react'
import './css/Header.css';
import SearchBar from './SearchBar';
import HeaderLogoButton from './HeaderLogoButton';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


function Header({owner}) {
  return (
    <div className= "Title">        
      <Grid container className="title__grid__container">
        <Grid item>
          <HeaderLogoButton></HeaderLogoButton>
          </Grid>
        <Grid item> 
          <div className = "search-bar">
            <SearchBar></SearchBar>
          </div>
        </Grid>
      </Grid>
        <Grid item className = "head__avatar" >
          <Avatar>
          <h6>{owner}</h6>
          </Avatar>
        </Grid>

    </div>
  )
}

export default Header