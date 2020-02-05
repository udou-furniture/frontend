import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './RegistrationForm.css';
import {required, email, passwordMinLength} from '../../validations'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div>
			<label>{label}</label>

			<div>
					<input {...input} placeholder={label} type={type}/>

					{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
			</div>
	</div>
)

class RegistrationForm extends React.Component {
	render() {
		const { handleSubmit, pristine, submitting } = this.props
		return (
			<>
				<div className="grid">	
					<form className="registration-form" onSubmit={handleSubmit}>
						<h1>Sign Up</h1>
						<div className="email">
							<Field 
								name="email" 
								type="email"
								component={renderTextField} 
								label="Email"
								validate={[required, email]}
								placeholder="Email"
							/>
						</div>
						<div>{this.props.errorMessage && <span>email already exists</span>}</div>
						<div className="password">
							<Field 
								name="password" 
								type="password"
								component={renderTextField} 
								label="Password"
								validate={[required, passwordMinLength]}
								placeholder="Password"
							/>
						</div>
						<button className="registration-button" type="submit" disabled={pristine || submitting}>Create Account</button>
						<div className="terms">
							By signing up you agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>
						</div>
					</form>
					<div className="registration-form-img">
					</div>
					<div className="already-account">
						Already have an account? <a>Log in</a>
					</div>
				</div>
			</>		
		);
	}
}

RegistrationForm = reduxForm({ form: 'registration' })(RegistrationForm);

export default RegistrationForm;