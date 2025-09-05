import React from 'react';

import './index.scss';


export const IconAndButtonLayout = ({ 
    iconName, title, text, displayButton=true, buttonText, onButtonClick 
}) => {
    return <div className='icon-and-button-layout simple-page-container'>
        <div className='simple-page'>
            <i className={`bi ${iconName}`}></i>
            <h6 className='mt-4 mb-4'>{title}</h6>
            <p>
                {text}
            </p>
            { displayButton && <div className='mt-5'>
                <button 
                    className='btn btn-primary'
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            </div> }
        </div>
    </div>
};

export default IconAndButtonLayout;