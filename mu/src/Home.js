import './App.css';
import Post from './Post';
import {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close.js';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder.js';
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@mui/material/CardMedia';
import  CardContent from '@material-ui/core/CardContent';
import Typography from '@mui/material/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (    
    <Grid container className="grid__container" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {
        posts.map(post => (
            <Grid item className="post__tile">
                {/* !!!TODO : Fix the async call */}
                <Button onClick={handleClickOpen}>
                <Post username={post.username} caption={post.caption} 
                nft_name={post.nft_name} img_url={post.img_url}></Post> 
                </Button>
                <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                >
                <AppBar sx={{ position: 'relative'}}color='white'>
                <Toolbar  >
                    <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                    >
                    <CloseIcon />
                    </IconButton>
                    <h5>{post.nft_name}</h5>
                </Toolbar>]
                <Card className="popup__card">
                    <Grid>
                        <CardMedia sx={{width:512, height:512 }}>
                            <img className="popup__img" width="512px" height="512px" src= {post.img_url}></img>
                        </CardMedia> 
                        <CardContent>
                            <Typography className="popup__text" variant="h3">{post.nft_name}</Typography>
                            <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                    stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        </CardContent> 
                        <Button>
                            <CardMedia >
                                <FavoriteBorder>
                                </FavoriteBorder>
                            </CardMedia>

                        </Button>

                    </Grid>

                </Card>
            </AppBar>
                </Dialog>
           </Grid>
        ))
      }
    </Grid>
    )
}

export default Home;