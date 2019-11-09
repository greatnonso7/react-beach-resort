import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home.component';
import SingleRoom from './pages/SingleRoom.Component';
import Rooms from './pages/Rooms.component';
import { Error } from './pages/Error.component';
import Navbar from './components/Navbar.component';

function App() {
  return <> 
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error}/>
    </Switch>
    
   </>
  
}

export default App;
