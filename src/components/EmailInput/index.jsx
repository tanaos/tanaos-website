import React, { useState, useEffect } from 'react';

import { LabelAndErrorRow } from '../LabelAndErrorRow';


export const EmailInput = ({ 
    errorResponse, value, onChange, labelHidden=false
}) => {

    const [ error, setError ] = useState(null);

    // When an errorResponse is received, parse it and display it.
    useEffect(() => {
        if ( !errorResponse ) {
            return;
        };
        // Catch validation error.
        if ( errorResponse === 'Email cannot be empty' ) {
            setError(errorResponse);
        }
        if ( errorResponse.status_code === 422 ) {
            const emailLocation = errorResponse.details?.validation_errors[0].location.includes('email')
            if (emailLocation) {
                setError('Not a valid email address');
            }
        };
    }, [errorResponse]);

    // Triggered when user types.
    const handleChange = (event) => {
        setError(null);
        onChange(event);
    };

    return <div className='password-input'>
        <div className='text-start'>
            <LabelAndErrorRow 
                label='Email address' 
                errorDisplayed={error !== null} 
                errorMessage={error}
                labelHidden={labelHidden}
            />
        </div>
        <input
            className={`${error ? 'error' : ''}`}
            type='email'
            id='email'
            name='email'
            value={value}
            onChange={handleChange}
            required
            placeholder='Your email address'
        />
    </div>
};

export default EmailInput;