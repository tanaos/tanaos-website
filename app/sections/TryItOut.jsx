'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

import styles from './TryItOut.module.scss';


export const TryItOut = () => {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
    const [placeholder, setPlaceholder] = useState('');
    const animationRef = useRef(null);

    const sentences = [
        'Classify emails in Spanish into billing, technical, and general inquiry.',
        'Detect toxic or harmful content in user-generated comments before publishing.',
        'Extract names, addresses and phone numbers from text documents in German.',
        'Summarize long product reviews, mostly written in French, into a single sentence with sentiment.',
        'Filter spam messages received through my website contact form.',
    ];

    useEffect(() => {
        let sentenceIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        const tick = () => {
            const current = sentences[sentenceIndex];

            if (!isDeleting) {
                charIndex++;
                setPlaceholder(current.slice(0, charIndex));
                if (charIndex === current.length) {
                    timeout = setTimeout(() => { isDeleting = true; tick(); }, 2000);
                    return;
                }
                timeout = setTimeout(tick, 35);
            } else {
                charIndex--;
                setPlaceholder(current.slice(0, charIndex));
                if (charIndex === 0) {
                    isDeleting = false;
                    sentenceIndex = (sentenceIndex + 1) % sentences.length;
                    timeout = setTimeout(tick, 400);
                    return;
                }
                timeout = setTimeout(tick, 20);
            }
        };

        tick();
        animationRef.current = () => clearTimeout(timeout);

        return () => clearTimeout(timeout);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://compute.tanaos.com/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sender_email_address: email,
                    message: description,
                }),
            });

            if (!response.ok) throw new Error('Request failed');

            setStatus('success');
            setEmail('');
            setDescription('');
            setTimeout(() => setStatus(null), 5000);
        } catch {
            setStatus('error');
        }
    };

    return (
        <div id='try-it-out' className={`${styles['try-it-out-section']} global-padding`}>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-10 col-lg-8 text-center'>
                    <h1 className={styles['section-title']}>Let's create your Small Model</h1>
                    <p className={`${styles['section-subtitle']} mt-4`}>
                        Tell us what you need and we'll create a custom Small Language Model for 
                        you, <b>100% free of charge</b>. You'll only pay if you decide to use the 
                        model after you've tested it and seen the results.
                    </p>

                    <div className={styles['form-card']}>
                        <form onSubmit={handleSubmit} className='text-start'>
                            <div className='mb-4 mt-5'>
                                <label htmlFor='description' className={`form-label ${styles['field-label']}`}>
                                    Describe what the model should do, with as much detail as possible
                                </label>
                                <div className={styles['textarea-wrapper']}>
                                    <textarea
                                        id='description'
                                        className={`form-control ${styles['textarea-field']}`}
                                        rows={6}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                    {!description && (
                                        <span className={styles['typing-placeholder']}>
                                            {placeholder}<span className={styles['cursor']}>|</span>
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='email' className={`form-label ${styles['field-label']}`}>
                                    The email address to send the model to once it's created
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    className={`form-control ${styles['input-field']}`}
                                    placeholder='you@company.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='d-flex align-items-center gap-3'>
                                <button
                                    type='submit'
                                    className={`btn btn-primary ${styles['submit-btn']}`}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending...' : <>Create model <ArrowRight className='ms-2' /></>}
                                </button>

                                {status === 'success' && (
                                    <span className={styles['status-success']}>
                                        Thanks! We'll get back to you soon.
                                    </span>
                                )}
                                {status === 'error' && (
                                    <span className={styles['status-error']}>
                                        Something went wrong. Please try again.
                                    </span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryItOut;
