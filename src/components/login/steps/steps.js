import React, { useEffect } from 'react';
import { Field } from 'formik';

import { required, validateEmail, validatePassword, validatePhone } from '../../../utils/validators/validators';
import {Input, Select} from '../../../components/common/form-controls/form-controls';

const FormByStep = ({send_data, step, setErrors, setTouched}) => {

    useEffect(() => {
        setErrors({})
        setTouched({})
    }, [step])
    
    switch (step) {
        case 1:
            return <Contact/>

        case 2:
            return <Address/>

        case 3:
            return <Category/>

        default:
            return <Success send_data={send_data}/>
    }
}

const Contact = React.memo(() => {
    return (
        <div className={'form__body'}>
            <Field title={'Phone'} name={'phone'} inputMode={'tel'} component={Input} validate={validatePhone}/>
            <Field title={'Email'} name={'email'} component={Input} validate={validateEmail}/>
            <Field title={'Password'} name={'password'} type={'password'} component={Input} validate={validatePassword}/>
        </div>
    )
});

const Address = React.memo(() => {
    return (
        <div className={'form__body'}>
            <Field title={'Country'} name={'country'} component={Input} validate={required}/>
            <Field title={'City'} name={'city'} component={Input} validate={required}/>
            <Field title={'Address'} name={'address'} component={Input} validate={required}/>
        </div>
    )
});

const Category = React.memo(() => {
    return (      
        <div className={'form__body'}>
            <Field title={'Category 1'} name={'category1'} component={Select} validate={required} option={['first', 'second', 'third']}/>
            <Field title={'Category 2'} name={'category2'} component={Select} validate={required} option={['first', 'second', 'third']}/>
            <Field title={'Category 3'} name={'category3'} component={Select} validate={required} option={['first', 'second', 'third']}/>
        </div>
    )
});

const Success = React.memo(({send_data}) => {
    return (      
        <div className={'form__body'}>
            <div className={'formsuccess'}>
                <h1 className={'formsuccess__title'}>
                    Success!
                </h1>

                <h4 className={'formsuccess__text'}>
                    Your account was successfuly registered.
                    <br></br>
                    Please wait for account approval.
                    <br></br>
                    It can take up to 24 hours.
                </h4>

                <p className={'formsuccess__contact'}>
                    Have questions?
                    <br></br>
                    Contact
                    <a className={'formsuccess__link'} href="mailto:info@site.com">
                        info@site.com
                    </a>
                </p>
            </div>

            <div id={'log'}>
                {
                    `Send data to server: ${JSON.stringify(send_data)}`
                }
            </div>
        </div>
    )
});


export default FormByStep;