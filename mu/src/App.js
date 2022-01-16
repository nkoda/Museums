import './App.css';
import Header from './Header.js';
import Post from './Post';
import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Home.js'

function App() {
  const [owner] = 'Elon.Musk_11'

  // Pull data from data
  // useEffect(() => {
  //   let json = require('./data/nftObjects.json')
  //   console.log(json, 'the json obj');
  //   console.log(json.nftObjects);
  //   for (let x of json.nftObjects) {
  //     console.log(x.image);
  //   }
  // // !!! TODO connnect front end to back end
  // }, []);
  return (
    <div className="app">
      <div className="app__header"> <Header owner = {owner}/> </div>
      <Home />
      {/* Posts */}
    </div>
  );
}

export default App;
