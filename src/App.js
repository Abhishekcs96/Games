import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Watchlist from './components/watchlist';
import Watched from './components/watched';
import Add from './components/add';
import "./lib/font-awesome/css/all.min.css";
import "./App.css";
import {Globalprovider} from './context/globalstate';


require('dotenv').config()


function App() {
  return (
    <Globalprovider>
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/watchlist'> <Watchlist/> </Route>
        <Route exact path='/watched'> <Watched/> </Route>
        <Route exact path='/add'> <Add/> </Route>
      </Switch>
    </Router>
    </Globalprovider>
  );
}

export default App;
