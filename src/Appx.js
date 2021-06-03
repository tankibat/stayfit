import React from 'react';
import './App.css';
import Navbarx from './components/Navbar/navigbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import NotFound from './pages/pagenotfound' ;
import Youtube from './pages/youtube'  
function Appx() {
  return (
    <Router>
      <Navbarx/>
      <Switch>
        <Route path='/home' exact component={Blogs} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        
        <Route path='/healthyfood' component={AnnualReport} />
        <Route path='/youtube' component={Youtube} />
        
        <Route path='/team' component={Teams} />
        <Route exact path='/' component={Blogs} />
        <Route path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
  
export default Appx;