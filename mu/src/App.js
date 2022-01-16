import './App.css';
import Title from './Header.js';
import ImageGrid from './ImageGrid';
import Post from './Post';
import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';


function App() {
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

  // Pull data from data
  useEffect(() => {
  // !!! TODO Pull data
  }, []);
  return (
    <div className="app">
      <div className="app__header"> <Title /> </div>
      {/* <ImageGrid/> */}
      <Grid container className="grid__container" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} 
             nft_name={post.nft_name} img_url={post.img_url}></Post> 
          ))

        }
      </Grid>
      {/* Posts */}
    </div>
  );
}

export default App;
