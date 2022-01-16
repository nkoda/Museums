import React from 'react'
import logo from './logo.svg';
import './HeaderLogoButton.css';
import Card from '@material-ui/core/Card';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

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
                onClick={()=> {console.log("Hello")}}>
                <div className = "logo-div" >
                    <img className="app_logo" src = {logo}/>
                <h2>useums</h2>
                </div>
            </Button>
        </Card>
    )
}

export default HeaderLogoButton
