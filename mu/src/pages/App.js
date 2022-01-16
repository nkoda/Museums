import '../css/App.css';
import Header from '../Components/Header.js';
import Post from '../Components/Post';
import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
      username: "testd",
    caption:"test_caption_3",
    nft_name: "A Bored Ape_3",
    img_url:"http://stereoheadz.com/szmc/meta/images/live/szmc_image_01_00468.png"
    }
  ]);

  // Pull data from data
  useEffect(() => {
  // !!! TODO connnect front end to back end
  }, []);
  return (
    <Router>
    <div className="app">
      <div className="app__header"> <Header owner = {owner}/> </div>
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
    </div>
    </Router>
  );
}

export default App;