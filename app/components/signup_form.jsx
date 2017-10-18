'use strict';

import React from 'react';

const SignupForm = () => (
	<form>
		<div className="form-group">
	    <label for="firstName" className="text-secondary u-t-base">First Name</label>
	    <input type="text" className="form-control form-control-sm" id="firstName" placeholder="Enter first name" required />
	  </div>
	  <div className="form-group">
	    <label for="lastName" className="text-secondary u-t-base">Last Name</label>
	    <input type="text" className="form-control form-control-sm" id="lastName" placeholder="Enter second name" required />
	  </div>
	  <div className="form-group">
	    <label for="exampleInputEmail1" className="text-secondary u-t-base">Email address</label>
	    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
	  </div>
	  <div className="form-group">
	    <label for="exampleInputPassword1" className="text-secondary u-t-base">Password</label>
	    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password" required />
	  </div>
	  <div className="form-group">
	    <label for="user_type" className="text-secondary u-t-base">User type</label>
	    <select className="form-control" id="user_type">
	      <option>Private Tenant</option>
	      <option>Apartment Owner/Tenant</option>
	    </select>
	  </div>
	  <div className="form-group">
	    <label for="language" className="text-secondary u-t-base">Language</label>
	    <select className="form-control" id="language">
	      <option>English</option>
	      <option>Deutsch</option>
	    </select>
	  </div>
	  <div className="text-right">
	  	<button type="submit" className="btn btn-primary btn-sm">Register</button>
	  </div>
	</form>
);

export default SignupForm;