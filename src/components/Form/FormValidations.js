const validate = values => {
    const errors = {}
    // const required = value => (value ? undefined : "Required");

    // Event Name
    if (!values.name) {
        errors.name = 'Required'
    }

    // Event Website

    if (!values.url) {
        errors.url = "Required"
    } 

    // Date Picker 1

    if (!values.eventDate) {
      errors.eventDate = "Required";
    }

    // Event Location

    if (!values.city) {
        errors.city = "Required";
    }

    // Date Picker 2

    if (!values.submissionDueDate) {
        errors.submissionDueDate = "Required";
    }

    if (!values.submissionUrl) {
        errors.submissionUrl = "Required"
    } 

    // Contact Name

    if (!values.contactName) {
        errors.contactName = "Required";
    }

    // Contact Email
    if (!values.contactEmail) {
        errors.contactEmail = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contactEmail)) {
        errors.contactEmail = 'Invalid email address'
    }

    return errors
}

export default validate