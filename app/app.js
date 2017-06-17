// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

import { BrowserRouter, Route } from 'react-router-dom'
var Main = require("./components/Main");

// Grabs the Routes
var routes = require("./config/routes");

// Renders the contents according to the route page.
ReactDOM.render((
	 <BrowserRouter>
          <Route path="/" component={Main}/>
     </BrowserRouter>
     ), document.getElementById("app"));
