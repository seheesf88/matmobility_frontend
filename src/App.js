import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

//Routers
import HomeContainer from './HomeContainer';
import GoogleMap from './GoogleMap'

const my404 = () => {
  return (
    <div>
      this is error...
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={ HomeContainer }/>
        <Route exact path='/sample' component={ GoogleMap } />
      </Switch>
    </main>
  );
}

export default App;
