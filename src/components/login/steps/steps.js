import React from 'react';
import { Field } from 'formik';

import { validateEmail, validatePassword, validatePhone } from '../../../utils/validators/validators';
import {Input, Select} from '../../../components/common/form-controls/form-controls';

export const Contact = React.memo(() => {
    return (
        <div className={'form__body'}>

            <Field title={'Phone'} name={'phone'} component={Input} validate={validatePhone}/>
            <Field title={'Email'} name={'email'} component={Input} validate={validateEmail}/>
            <Field title={'Password'} name={'password'} type={'password'} component={Input} validate={validatePassword}/>

            <button className={'form__send'}>Next</button>
        </div>
    )
});

export const Address = React.memo(() => {
    return (
        <div className={'form__body'}>

            <Field title={'Country'} name={'country'} component={Input} validate={validateEmail}/>
            <Field title={'City'} name={'city'} component={Input} validate={validateEmail}/>
            <Field title={'Address'} name={'address'} component={Input} validate={validateEmail}/>

            <button className={'form__send'}>Next</button>
        </div>
    )
});

export const Category = React.memo(() => {
    return (      
        <div className={'form__body'}>

            <Field title={'Category 1'} name={'category'} component={Select} option={['C1', 'C2', 'C3']}/>
            <Field title={'Category 2'} name={'category2'} component={Select} option={['C1', 'C2', 'C3']}/>
            <Field title={'Category 3'} name={'category3'} component={Select} option={['C1', 'C2', 'C3']}/>

            <button className={'form__send'}>Next</button>
        </div>
    )
});

export const Success = React.memo(() => {
    return (      
        <div className={'form__body'}>
            <div className={'formsend'}>
                <h1 className={'formsend_title'}>
                    Success!
                </h1>

                <h2 className={'formsend_text'}>
                    Your account was successfuly registered.
                    <br></br>
                    Please wait for account approval.
                    <br></br>
                    It can take up to 24 hours.
                </h2>

                <p className={'formsend_contact'}>
                    Have questions?
                    <br></br>
                    Contact
                    <a className={'formsend_link'} href="mailto:info@site.com">
                        info@site.com
                    </a>
                </p>
            </div>
        </div>
    )
});