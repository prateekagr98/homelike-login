'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Login from './pages/login';
import Signup from './pages/signup';

const Routes = (
	<Route path="/" component={App}>
		<Route path="/login" component={Login} />
		<Route path="/signup" component={Signup} />
	</Route>
);

export default Routes;