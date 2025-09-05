import React from 'react';

import './index.scss';


export const CTOCard = ({ 
    category, title, text, buttonText, onClick, colored, imgSrc
}) => {

    return <div className='card feature-card'>
        <div className='card-body'>
            { imgSrc && <div className='image-container'>
                <div className='mb-4 text-center'>
                    <img src={imgSrc} alt='Tanaos' />
                </div>
            </div> }
            { category && <span className='category badge-primary'>{ category }</span>}
            <h6 className='mb-3 mt-4'>{ title }</h6>
            <p className='mb-4'>{text}</p>
            <button 
                className='btn btn-dark'
                onClick={onClick}
            >
                { buttonText }
            </button>
        </div>
    </div>
};

export default CTOCard;
