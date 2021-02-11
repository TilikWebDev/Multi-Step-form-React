import React from 'react';
import { Formik } from 'formik';

import {Contact, Address, Category, Success} from './steps/steps';

const Login = ({form_data, steps, gotoStep}) => {

    const initialValues = steps.name !== 'success' ? 
        steps.initialValues.reduce((accumulator, s) => {
            accumulator[s] = ''
            return accumulator;
        }, {}) 
    : null;

    const onSubmit = (values, {setStatus}) => {
        //(steps.name === 'category') && alert(`Send data to server! ${JSON.stringify(form_data)}`);
        gotoStep(values, parseInt(steps.key) + 1);        
    };

    return (
            <Formik initialValues={initialValues}  onSubmit={onSubmit}>
                {
                    ({handleSubmit, status}) => (
                        <form onSubmit={handleSubmit} className={'form'}> 
                            {   
                                (status) &&
                                    <div className={'form__error'}>
                                        {status}
                                    </div>        
                            }    

                            {
                                (steps.name !== 'success') ? 
                                    (steps.name === 'contact') ? <Contact/> :
                                        (steps.name === 'address') ? <Address/> :
                                            (steps.name === 'category') ? <Category/> : 'Error'
                                : <Success/>
                            }
                        </form> 
                    )
                }
            </Formik>
        
    )
}

export default React.memo(Login, (prevProps, nextProps) => {
    return (prevProps.steps.name === nextProps.steps.name || prevProps.form_data === nextProps.form_data)
});