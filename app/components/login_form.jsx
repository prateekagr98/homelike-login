'use strict';

import React from 'react';

const LoginForm = () => (
	<form>
	  <div className="form-group">
	    <label for="exampleInputEmail1" className="text-secondary u-t-base">Email address</label>
	    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
	  </div>
	  <div className="form-group">
	    <label for="exampleInputPassword1" className="text-secondary u-t-base">Password</label>
	    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password" required />
	  </div>
	  <div className="text-right">
	  	<button type="submit" className="btn btn-primary btn-sm">Login</button>
	  </div>
	</form>
);

export default LoginForm;