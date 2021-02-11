import React from 'react';

const SubmitButton = ({step, final}) => {   
    return (
        (step < final) ?
            <button className={'form__send'}>Continue</button> :
            (step === final) ? 
                <button className={'form__send'}>Submit</button>:
                false
    )
}

export default SubmitButton;