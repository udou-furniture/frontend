import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../../validations'
import './LoginForm.css';

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div  className="login-form-label">
        <label>{label}</label>

        <div>
            <input {...input} placeholder={label} type={type}/>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class LoginForm extends React.Component {
	render() {
        const { handleSubmit, pristine, submitting } = this.props
		return (
			<div className="grid">
				<form className="login-form" onSubmit={handleSubmit}>
					<h1>Log in</h1>
					<Field 
						name="email" 
						type="email"
						component={renderTextField} 
						label="Email"
						validate={required}
					/>
					
					<Field 
						name="password" 
						type="password"
						component={renderTextField} 
						label="Password"
						validate={required}
					/>
					
					<button type="submit" disabled={pristine || submitting}>Submit</button>
				</form>
				<div className="login-img"></div>
			</div>	
		);
	}
}

LoginForm = reduxForm({ form: 'login' })(LoginForm);
export default LoginForm;