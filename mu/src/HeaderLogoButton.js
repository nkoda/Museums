import React from 'react'
import logo from './logo.svg';
import './HeaderLogoButton.css';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Button from '@material-ui/core/Button';
import App from "./App";
import Home from "./Home";
import Post from "./Post";

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
            <Button 
                onClick={()=> {
                   { console.log("Hello")}
                   <BrowserRouter>
                        <Route path="/" component={Home} />
                   </BrowserRouter>
                }}>
                <div className = "logo-div" >
                    <img className="app_logo" src = {logo}/>
                <h2>useums</h2>
                </div>
            </Button>
        </Card>
    )
}

export default HeaderLogoButton
