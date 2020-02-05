export const required = value => (value || typeof value === 'number' ? undefined : 'Required')


const exactLength = numberLength => value =>
    value && value.length === numberLength ? undefined : `Must be ${numberLength} digits`

export const postcodeValidation = exactLength(4)


export const number = value =>
value && isNaN(Number(value)) ? 'Must be a number' : undefined


export const phoneNumber = value =>
value && !/^(?:\+?61|0)4 ?(?:(?:[01] ?[0-9]|2 ?[0-57-9]|3 ?[1-9]|4 ?[7-9]|5 ?[018]) ?[0-9]|3 ?0 ?[0-5])(?: ?[0-9]){5}$/i.test(value)
? 'Invalid phone number, must be 10 digits'
: undefined


export const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined


const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const passwordMinLength = minLength(8)