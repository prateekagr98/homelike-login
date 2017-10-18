'use strict';

import React from 'react';
import SocialLogin from '../components/social_login';
import SignupForm from '../components/signup_form';

class Signup extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			show_email_form: false
		}
	};

	showEmailForm(){
		this.setState({
			show_email_form: true
		});
	}

	render() {

		return (
			<div className="container-fluid login pt-5">
				<div className="card login-container w-50 p-4 mb-5">
					<div className="row">
						<div className="col">
							<h1 className="login-heading">Register</h1>
						</div>
						<div className="col text-right u-t-base">
							<span className="text-secondary">Already have an account?</span> <a className="text-info u-no-underline" href="/login">Login</a>
						</div>
					</div>
					<SocialLogin />
					<div className="u-seperator mt-4 mb-4 u-pos-has">
						<div className="u-pos-m-m text-secondary">or</div>
					</div>
					<div className="p-2">
						{
							this.state.show_email_form ? (
								<SignupForm />
							) : (
								<div className="text-center text-info u-pointer" onClick={this.showEmailForm.bind(this)}>
									Register via <span>Email</span>
								</div>
							)
						}
					</div>
				</div>
			</div>
		);
	}
};

export default Signup;