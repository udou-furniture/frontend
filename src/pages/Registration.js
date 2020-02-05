import React from 'react';
import axios from 'axios'

import {setLocalStorageToken} from '../utils/localStorage'

import RegistrationForm from '../components/registration/RegistrationForm';


class Registration extends React.Component {
    state = {
        error: false
    }

	submit = async (values) => {
		try {
			let response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/customer/register', 
			{
				email: values.email,
				password: values.password
			})
			
			setLocalStorageToken(response.data.access_token)
			this.props.isUserLoggedIn()
			this.props.history.push('/')
		} catch (err) {
            this.setState({error: true})
		}
	}

	render(){
		return (
		<div id="registration-page">
			<RegistrationForm onSubmit={this.submit} errorMessage={this.state.error}/>
		</div>
	)}
}

export default Registration;