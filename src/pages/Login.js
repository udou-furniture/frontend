import React from 'react';
import axios from 'axios'

import { setLocalStorageToken } from '../utils/localStorage'

import LoginForm from '../components/log-in/LoginForm'

class Login extends React.Component {
	submit = async (values) => {
		try {
			let response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/customer/login', 
			{
				email: values.email,
				password: values.password
			})
			
			setLocalStorageToken(response.data.access_token)
      this.props.isUserLoggedIn()
			this.props.history.push('/')
		} catch (err) {
			console.log(err.message)
		}
	}

	render() {
		return (
			<div id="login-page">
				<LoginForm onSubmit={this.submit}/>
			</div>
		)
	}
}

export default Login;