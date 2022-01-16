import React from 'react'
import '../css/Post.css';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


const useStyles = makeStyles({
    custom: {
      border: "none",
      boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
    },
    spacing: {
        padding: "4px"
    }
  });
  
function Post({username, caption, img_url, nft_name}) {
    const classes = useStyles();
    // const navigate = useNavigate();
    return (
        <div className={classes.spacing}>
        <Card className = {classes.custom}>
            <CardActionArea component={Link} to="/App">
                <div className="nft__title">
                    <h3>{nft_name}</h3>
                </div>
                <img className="post__image" src = {img_url}></img>
                <div className='post__header'>
                    <Avatar className='post__avatar'
                    alt= {username}
                    />
                    <h3>{username}</h3>
                <h4 className="post__text"> {caption} </h4>
                </div>
            </CardActionArea>
        </Card>
        </div>
    )
}

export default Post
