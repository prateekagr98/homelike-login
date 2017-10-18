'use strict';

import React from 'react';
import SocialLogin from '../components/social_login';
import LoginForm from '../components/login_form';

const Login = (props) => (
	<div className="container-fluid login pt-5">
		<div className="card login-container w-50 p-4">
			<h1 className="login-heading">Login</h1>
			<SocialLogin />
			<div className="u-seperator mt-4 mb-4 u-pos-has">
				<div className="u-pos-m-m text-secondary">or</div>
			</div>
			<div className="p-2">
				<LoginForm />
			</div>
		</div>
	</div>
);

export default Login;