'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Login from './pages/login';

const Routes = (
	<Route path="/" component={App}>
		<Route path="/login" component={Login} />
	</Route>
);

export default Routes;