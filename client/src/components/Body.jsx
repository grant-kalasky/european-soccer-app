import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Teams from './Teams';
import Players from './Players';


const Body = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/teams" component={Teams}/>
      <Route exact path="/players" component={Players}/>
    </Switch>
  </main>
);

export default Body;