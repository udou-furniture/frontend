import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from '../../validations'

const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
)

class ReviewForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props

        return(
            <form onSubmit={handleSubmit}>
                <label>Please provide your review on our product below</label>
                <Field 
                        name="review" 
                        type="text"
                        component={renderTextField} 
                        label="Review"
                        validate={required}
                    />
                <button type="submit" disabled={pristine || submitting}>Submit</button>
            </form>
        )
    }
}

ReviewForm = reduxForm({ form: 'review' })(ReviewForm);
export default ReviewForm;