import React from 'react'
import logo from '../logo.svg';
import '../css/HeaderLogoButton.css';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
    custom: {
      border: "none",
      boxShadow: "none",
      borderRadius: "6px"
    }
  });

function HeaderLogoButton() {
    const classes = useStyles();
    return (
        <Card className={classes.custom}>
            <CardActionArea component={Link} to="/App">
                <div className = "logo-div" >
                    <img className="app_logo" src = {logo}/>
                <h2>useums</h2>
                </div>
            </CardActionArea>
        </Card>
    )
}

export default HeaderLogoButton
