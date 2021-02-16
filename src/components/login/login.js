import React, { useState } from 'react';
import { Formik } from 'formik';

import FormByStep from './steps/steps';
import SubmitButton from './submit-buton';

const Login = ({send_data, setSendData}) => {

    const [step, setStep] = useState(1);

    const initialValues = {
        email: '', 
        phone: '',
        password: '',
        country: '',
        address: '',
        city: '',
        category1: '',
        category2: '',
        category3: ''
    }

    const steps = [
        'Contacts',
        'Address',
        'Categories',
        'Success'
    ]

    const onSubmit = (values) => {
        setStep(step + 1);      
        (step === (steps.length - 1)/* -1 Because last step is Success page */) && setSendData(values);
    };

    return (
        <Formik enableReinitialize initialValues={{...initialValues}}  onSubmit={onSubmit}>
            {
                ({handleSubmit, setErrors, setTouched, status}) => (
                    <form onSubmit={handleSubmit} className={'form'}> 
                        <div className={'form__container'}>
                            <div className={'form__steps steps'}>
                                <div className={'steps__arrow_container'}>
                                    <hr style={{width: `${100 / (steps.length - 1) * (step - 1)}%`}} className={'steps__arrow'}></hr>
                                </div>

                                {
                                    steps.map((s, index) => {
                                        return (
                                            <div key={index} className={['steps__step',  (step > index)  && 'active'].join(' ')}>
                                                {s}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {   
                                (status) &&
                                    <div className={'form__error'}>
                                        {status}
                                    </div>        
                            }    

                            <FormByStep send_data={send_data} step={step} setErrors={setErrors} setTouched={setTouched}/>
                            <SubmitButton step={step} final={(steps.length - 1)/* -1 Because last step is Success page */}/>
                        </div>
                    </form> 
                )
            }
        </Formik>
    )
}

export default React.memo(Login);