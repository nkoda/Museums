import './css/App.css';
import Header from './Components/Header.js';
import Post from './Components/Post';
import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PostPage from "./pages/PostsPage";
function Home() {
  const [posts, setPosts] = useState([
    {
      username: "test_username_1",
     caption:"test_caption_1",
     nft_name: "A Bored Ape_1",
     img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
     {
       username: "test_username_2",
     caption:"test_caption_2",
     nft_name: "A Bored Ape_2",
     img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
     {
       username: "test_username_3",
     caption:"test_caption_3",
     nft_name: "A Bored Ape_3",
     img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
    {
      username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
   },
   {
    username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
    {
      username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
    {
      username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    }
  ]);
  return (    
    <Grid container className="grid__container" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {
        posts.map(post => (
          <Grid item className="post__tile">
          <Post username={post.username} caption={post.caption} 
           nft_name={post.nft_name} img_url={post.img_url}></Post> 
           </Grid>
        ))
      }
    </Grid>
    )
}
function App() {
  const [owner] = 'Elon.Musk_11'
  const [posts, setPosts] = useState([
    {
      username: "test_username_1",
     caption:"test_caption_1",
     nft_name: "A Bored Ape_1",
     img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
     {
       username: "test_username_2",
     caption:"test_caption_2",
     nft_name: "A Bored Ape_2",
     img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
     {
       username: "test_username_3",
     caption:"test_caption_3",
     nft_name: "A Bored Ape_3",
     img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
    {
      username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
   },
   {
    username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
    {
      username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    },
    {
      username: "test_username_3",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"https://pbs.twimg.com/profile_images/1430659995419353092/3RtpXJQH_400x400.jpg"
    }
  ]);
  useEffect(() => {
  // !!! TODO connnect front end to back end
  }, []);
  return (

  
      <BrowserRouter>
       <div className="app__header"> <Header owner = {owner}/> </div>
        <Switch>
            <Route path="/pages/Post/:id" component={Post} />    
            <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    
  );
}



export default App;
