import React from 'react';

import './index.scss';


export const LabelAndErrorRow = ({ 
    label, errorDisplayed, errorMessage, labelHidden=false 
}) => {
    return <div className='label-error-container'>
        { !labelHidden && <label>{label}</label>}
        {/* Display password error messages, if any */}
        { errorDisplayed
            && <div className={`mb-2 ${!labelHidden && 'ms-3' }`}>
                <span className='text-danger'>{errorMessage}</span>
            </div> }
    </div>
};

export default LabelAndErrorRow;