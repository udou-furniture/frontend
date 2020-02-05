import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {required, phoneNumber, postcodeValidation, number} from '../validations'
import OrderSummaryIndex from '../components/orderSummary/OrderSummaryIndex';

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <>
        <label>{label}</label>

        <div>
            <input {...input} placeholder={label} type={type}/>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div> 
    </>
)

class CustomerDetailsForm extends React.Component {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
                <div className="grid">
                    <form className="customer-details-form" onSubmit={handleSubmit}>
                        <div className="fields">
                            <div className="first-name">
                                <Field 
                                    name="firstName" 
                                    type="text"
                                    component={renderTextField} 
                                    label="First Name"
                                    validate={required}
                                    placeholder="Jane"
                                />
                            </div>
                            <div className="last-name">
                                <Field 
                                    name="lastName" 
                                    type="text"
                                    component={renderTextField} 
                                    label="Last Name"
                                    validate={required}
                                    placeholder="Doe"
                                />
                            </div>
                            <div className="address">
                                <Field 
                                    name="address" 
                                    type="text"
                                    component={renderTextField} 
                                    label="Address"
                                    validate={[required]}
                                    placeholder="Level 8 420 Collins Street"
                                />
                            </div>
                            <div className="phone-number">
                                <Field 
                                    name="phoneNumber" 
                                    type="text"
                                    component={renderTextField} 
                                    label="Phone Number"
                                    validate={[ required, phoneNumber, number ]}
                                />
                            </div>
                            <div className="city">
                                <Field 
                                    name="city" 
                                    type="text"
                                    component={renderTextField} 
                                    label="City"
                                    validate={required}
                                    placeholder="Melbourne" 
                                />
                            </div>
                            <div className="state">
                                <label htmlFor="state">State</label>
                                <Field 
                                    name="state" 
                                    component='select'
                                    validate={required}
                                >
                                    <option value="VIC">Victoria</option>
                                    <option value="NSW">New South Wales</option>
                                    <option value="QLD">Queensland</option>
                                    <option value="NT">Northern Territory</option>
                                    <option value="SA">South Australia</option>
                                    <option value="WA">Western Australia</option>
                                    <option value="TAS">Tasmania</option>
                                    <option value="ACT">Australian Capital Territory</option>
                                </Field>
                            </div>
                            <div className="postcode">
                                <Field 
                                    name="postcode" 
                                    type="text"
                                    component={renderTextField} 
                                    label="Postcode"
                                    validate={[required, postcodeValidation, number]}
                                />
                            </div>
                            {/* <div> */}

                            <button className="checkout-button" type="submit" label='submit'>Submit</button>
                            {/* </div> */}
                        </div>
                    </form>
                    <div className="order-summary">
                        <OrderSummaryIndex /> 
                    </div> 
                </div>
        );
    }
}

CustomerDetailsForm = reduxForm({ form: 'customerDetails' })(CustomerDetailsForm);
export default CustomerDetailsForm;