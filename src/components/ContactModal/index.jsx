import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ClipLoader } from 'react-spinners';

import { EmailInput } from '../EmailInput';
import { sendEmail } from '../../services';
import { LabelAndErrorRow } from '../LabelAndErrorRow';
import { useToast } from '../../context/ToastContext';


const initialFormData = {
    email: '',
    message: ''
};

const initialErrorResponse = {
    email: null,
    message: null
};

export const ContactModal = ({ isVisible, onHide }) => {

    const [ formData, setFormData ] = useState(initialFormData);
    const [ errorResponse, setErrorResponse ] = useState(initialErrorResponse);
    const [ messageSending, setMessageSending ] = useState(false);

    const { addToast } = useToast();

    // Triggered when user types in an input field.
    const handleInputChange = ( event ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrorResponse({ ...errorResponse, [name]: null });
    };

    // Triggered when user clicks the "Send message" button.
    const handleSendMessage = async () => {
        // Start spinner.
        if (!formData.email) {
            setErrorResponse({ ...errorResponse, email: 'Email cannot be empty' });
            return;
        };
        if (!formData.message) {
            setErrorResponse({ ...errorResponse, message: 'Message cannot be empty' });
            return;
        };
        // Try sending the email; if this returns an error, display it to the user.
        try {
            setMessageSending(true);
            await sendEmail(formData.email, formData.message);
            addToast("Message sent. We'll get back to you within a few hours.", 'success');
        } catch (error) {
            setErrorResponse({ ...errorResponse, email: error.response.data });
            return;
        } finally {
            // Stop spinner.
            setMessageSending(false);
        }
        // Reset form.
        setFormData(initialFormData);
        setErrorResponse(initialErrorResponse);
        // Close modal.
        handleHide()
    };

    // Triggered when user clicks the "Close" button.
    const handleHide = () => {
        setFormData(initialFormData);
        setErrorResponse(initialErrorResponse);
        // Perfirn custom logic defined in the parent component.
        onHide();
    };

    return <Modal show={isVisible} onHide={handleHide} centered>
        <Modal.Header closeButton>
            <Modal.Title>How may we assist you today?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            We are here to help you. Send us a message and we will get back to you within a 
            few hours.

            <div className='mt-5'>
                <EmailInput 
                    errorResponse={errorResponse.email}
                    value={formData.email}
                    onChange={(event) => handleInputChange(event)}
                />
            </div>
            <div className='mt-4'>
                <LabelAndErrorRow 
                    label='Your message'
                    errorDisplayed={errorResponse.message}
                    errorMessage={errorResponse.message}
                />
                <textarea 
                    name='message'
                    placeholder='Type your message here'
                    value={formData.message}
                    onChange={(event) => handleInputChange(event)}
                    rows={5}
                    className={`${errorResponse.message && 'error'}`}
                />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <button
                className='btn btn-primary' onClick={handleSendMessage}
                disabled={messageSending}
            >
                { !messageSending ? 'Send message' : <ClipLoader color='white' size={15} /> }
            </button>
        </Modal.Footer>
    </Modal>
}