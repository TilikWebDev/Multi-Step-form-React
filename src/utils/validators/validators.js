export const customFieldLevelValidation = (value, validations) => {
    for (let validation of validations) {
        const result = validation(value);

        if (result)
            return result;
    }

    return undefined;
}

export const required = (value) => {
    return (!value) ? 'Field is required' : undefined; 
}

export const maxLength = (length) => {
    return (value) => {
        return (value.length > length) ? `Max length is ${length}` : undefined;
    }
}

export const minLength = (length) => {
    return (value) => {
        return (value.length < length) ? `Min length is ${length}` : undefined;
    }
}

export const phone = (value) => {
    let search = value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
    return (!search) ? 'Wrong phone number' : undefined;
}

export const email = (value) => {
    let search = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return (!search) ? 'Wrong email' : undefined;
}

// CUSTOM VALIDATORS

export const validateEmail = (value) => customFieldLevelValidation(value, [required, email]);
export const validatePhone = (value) => customFieldLevelValidation(value, [required, phone]);
export const validatePassword = (value) => customFieldLevelValidation(value, [required, minLength(8)]);