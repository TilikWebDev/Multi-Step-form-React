import React from 'react';

const FormControl = ({form, field, title, ...props}) => {
    let errors = form.errors[field.name];
    let touched = form.touched[field.name];
    
    return (
        <div className={'form__field'}>
            <p className={'field__title'}>
                {title}

                { 
                    (errors && touched) &&
                        <span className={'field__error'}>
                            {errors}
                        </span>
                }
            </p>

            {
                props.children
            }
        </div>
    );
}

export const Input = (props) => {
    return (
        <FormControl {...props}>
            <input className={'field__input'} {...props.field} type={props.type} />
        </FormControl>
    )
}

export const Select = (props) => {
    return (
        <FormControl {...props}>
            <select className={'field__select'} {...props.field}>
                {
                    props.option.map((o, index) => 
                        <option selected={true} value={o} key={index}>{o}</option>
                    )
                }
            </select>
        </FormControl>
    )
}