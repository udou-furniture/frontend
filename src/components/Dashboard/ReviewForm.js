import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from '../../validations'

import './ReviewForm.css'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <textarea {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

class ReviewForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props

        return(
            <div className="review-form-grid">
                <form className="review-form" onSubmit={handleSubmit}>
                    <h1>Leave a review! <span className="review-tagline"></span></h1> 
                    <Field 
                            name="review" 
                            type="text"
                            component={renderTextField} 
                            label="Review"
                            validate={required}
                        />
                    <button className="review-form-button" type="submit" disabled={pristine || submitting}>Submit</button>
                </form>
            </div>
        )
    }
}

ReviewForm = reduxForm({ form: 'review' })(ReviewForm);
export default ReviewForm;