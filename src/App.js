import React from 'react';

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import ErrorPage from './pages/Error'

//component
import Navbar from './components/Navbar'


export default function App () {
  return (
    <Router>
    <>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          {/* <Route exact path="/error" component={ErrorPage} /> */}
          <Route component={ErrorPage} />
        </Switch>
    </>
      </Router>
  )
}