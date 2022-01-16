import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';

function Post({username, caption, img_url, nft_name}) {

    return (
        <Card className='post'>
            <CardActionArea>
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
    )
}

export default Post
