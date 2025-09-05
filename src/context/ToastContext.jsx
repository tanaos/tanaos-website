import React, { createContext, useContext, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';


const ToastContext = createContext({
    addToast: () => {},
    removeToast: () => {}
});

const displayToastIcon = (variant) => {
    switch (variant) {
        case 'success':
            return <i className='toast-icon bi bi-check-circle-fill'></i>;
        case 'danger':
            return <i className='toast-icon bi bi-x-circle-fill'></i>;
        case 'warning':
            return <i className='toast-icon bi bi-exclamation-circle-fill'></i>;
        case 'info':
            return <i className='toast-icon bi bi-info-circle-fill'></i>;
        default:
            return <i className='toast-icon bi bi-info-circle-fill'></i>;
    };
};

const displayToastTitle = (variant) => {
    switch (variant) {
        case 'success':
            return 'Success';
        case 'danger':
            return 'Error';
        case 'warning':
            return 'Warning';
        case 'info':
            return 'Info';
        default:
            return 'Info';
    };
};

export const ToastProvider = ({ children }) => {
    const [ toasts, setToasts ] = useState([]);

    const addToast = (message, variant = 'success') => {
        setToasts([...toasts, { id: Date.now(), message, variant }]);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer
                position='bottom-start'
                className='toast-container'
            >
                {toasts.map(toast => (
                    <Toast
                        key={toast.id}
                        onClose={() => removeToast(toast.id)}
                        delay={4000}
                        autohide
                        className={`toast ${toast.variant}`}
                        show={true}
                    >
                        <Toast.Body>
                            <div className='toast-content'>
                                <div className='me-4 icon-container'>
                                    { displayToastIcon(toast.variant) }
                                </div>
                                <div className='me-3'>
                                    <div className='toast-title mb-1'>
                                        { displayToastTitle(toast.variant) }
                                    </div>
                                    {toast.message}
                                </div>
                            </div>
                            <i className='bi bi-x-lg ms-3 close-icon' onClick={() => removeToast(toast.id)}></i>
                        </Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);