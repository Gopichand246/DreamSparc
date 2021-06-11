import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import login from './containers/pages/login';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={App}/>
				<Route exact path="/login" component={login }/>
	    </Switch>
    </Router>,
    document.getElementById('root')
);