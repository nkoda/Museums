import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({username, caption, img_url, nft_name}) {
    return (
        <div className='post'>
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
        </div>
    )
}

export default Post
