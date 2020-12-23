import React from "react";
import {Route,Redirect,Switch} from "react-router";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";


const Body=()=>{
    return(
        <div>
          <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/menu' component={Menu}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Redirect from='/' to='/home'/>
          </Switch>
        </div>
    )
}
export default Body