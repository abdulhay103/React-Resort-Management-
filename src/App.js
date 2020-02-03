import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        <Route />
      </Switch>
    </div>
  );
};

export default App;
