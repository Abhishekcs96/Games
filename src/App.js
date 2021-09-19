import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Gameslist from './components/Gameslist';
import Gamesplayed from './components/Gamesplayed';
import Search from './components/Search';
import "./App.css";



require('dotenv').config()


function App() {
  return ( 
    <Router>
      <Header/>
      <Switch>
        <Route  exact path='/'> <Search/> </Route>
        <Route exact path='/Gameslist'> <Gameslist/> </Route>
        <Route exact path='/Gamesplayed'> <Gamesplayed/> </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
