import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { IconAndButtonLayout } from '../../layouts/IconAndButtonLayout';


export const NotFoundPage = () => {

    // display top of the page after navigation
    useEffect(() => {
        window.scrollTo({ top:0, left:0, behavior:'instant' });
    }, []);

    const navigate = useNavigate();

    return <IconAndButtonLayout 
        iconName='bi-emoji-expressionless'
        title="Oops... we can't seem to find that page"
        text='The page you are looking for does not exist. It might have been moved or removed.'
        buttonText='Go to the homepage'
        onButtonClick={() => navigate('/')}
    />;
};

export default NotFoundPage;