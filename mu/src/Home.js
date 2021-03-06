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
import {useEffect} from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Home() {

  let json = require('./data/nftObjects.json')
  console.log(json, 'this is the  json obj');
  console.log(json.nftObjects, 'this is the  json array');

  // Pull data from data
  // useEffect(() => {
  // let json = require('./data/nftObjects.json')
  // console.log(json, 'the json obj');
  // console.log(json.nftObjects);
  // for (let x of json.nftObjects) {
  //   console.log(x.image);
  // }
// !!! TODO connnect front end to back end
// }, []);

  const [posts, setPosts] = useState([
    {
      username: "0x1532cf8977d51de6a609015a23365cdb25064bc1",
     caption:"Meme Ltd.",
     nft_name: "I wish I was understood",
     img_url:"https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg"
    },
     {
       username: "0x0000000000000000000000000000000000000000",
     caption:"Meme Ltd",
     nft_name: "Silkroad",
     img_url:"https://images.dontbuymeme.com/collections/badger/static/silkroad.jpg"
    },
     {
       username: "0x0000000000000000000000000000000000000000",
     caption:"Holy Grail",
     nft_name: "Meme Grail Relic",
     img_url:"https://images.dontbuymeme.com/genesis/meme-grail-relic.png"
    },
    {
    username: "0x0000000000000000000000000000000000000000",
    caption:"Pineapples",
    nft_name: "Volatile Pineapples",
    img_url:"https://images.dontbuymeme.com/artist-series/sven/static/volatile-pineapples.jpg"
   },
   {
    username: "0x7c26ea66a3c62ad275adbad8397d19fd12b54d8e",
    caption:"Stereoheadz",
    nft_name: "StereoheadZ #468",
    img_url:"http://stereoheadz.com/szmc/meta/images/live/szmc_image_01_00468.png"
    },
    {
      username: "0xb654c2002896268e6048680ad3110ef1717208ef",
    caption:"Doodlesaurs",
    nft_name: "Doodlesaur #3684",
    img_url:"https://storage.googleapis.com/doodlesaurs/images/eqa51q3375az.png"
    },
    {
      username: "0xdb2497a2d30906bec48e23ea1b1a78c317f17b50",
    caption:"Phantabear",
    nft_name: "PHANTA BEAR #2397",
    img_url:"https://d1kjtx52rxv2sn.cloudfront.net/phanta+bear+token/a284625a.png"
    }
  ]);
  
  
  // var obj = JSON.parse(json);
  // var res = [];

  // for(var i in obj)
  //   res.push(obj[i]);

  // console.log("this is the resulting array: " + res);

  // const [posts, setPosts] = useState(
  //   json.nftObjects
  // );
  
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
                            The PhantaBear project was jointly launched by Jay Chou's PHANTACi and Ezek. PhantaBear is a collection of 10,000 algorithmically generated digital collectibles that double as membership cards for the Ezek Club. Each PhantaBear has a unique set of traits and unlocks varying, unique levels of access and perks for its owner.
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