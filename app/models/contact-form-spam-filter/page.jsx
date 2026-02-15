import { BsArrowRight, BsCpu, BsShieldCheck, BsLightning, BsGlobe, BsCodeSlash, BsGraphUp, BsStars } from 'react-icons/bs';
import Link from 'next/link';

import { Config } from '../../../config';
import { CodeSnippet } from '../../../components/CodeSnippet';
import styles from './TicketClassification.module.scss';

const title = 'Contact Form Spam Filter | Tanaos';
const description = 'Automatically filter unwanted or spam messages from your website contact form using a custom Small Language Model. Fast, private, and accurate.';
const url = `${Config.WEBSITE_BASE_URL}models/contact-form-spam-filter/`;

export const metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, type: 'website', url },
    robots: {
        index: true, follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    },
    twitter: { title, description },
};

const EXAMPLE_CODE = `from transformers import pipeline

# Load the custom spam filter model we created for you
pipeline(
    task="text-classification",
    model="your-org/contact-form-spam-filter",
)

messages = [
    "Hi, I would like to know more about your services.",
    "Congratulations! You won a free iPhone. Click here!",
    "Can you help me with a quote for my project?",
    "Get rich quick with this simple trick!",
]

results = pipeline(messages)

# [
#   {"label": "not_spam",  "confidence": 0.97},
#   {"label": "spam",      "confidence": 0.99},
#   {"label": "not_spam",  "confidence": 0.96},
#   {"label": "spam",      "confidence": 0.98},
# ]`;

const CATEGORIES_EXAMPLE = [
    { input: "Hi, I would like to know more about your services.", label: "Not Spam", confidence: "97%" },
    { input: "Congratulations! You won a free iPhone. Click here!", label: "Spam", confidence: "99%" },
    { input: "Can you help me with a quote for my project?", label: "Not Spam", confidence: "96%" },
    { input: "Get rich quick with this simple trick!", label: "Spam", confidence: "98%" },
    { input: "I am interested in a partnership.", label: "Not Spam", confidence: "95%" },
    { input: "Work from home and earn $5000/week!", label: "Spam", confidence: "99%" },
];

export default function ContactFormSpamFilterPage() {
    return (
        <div className={styles['page']}>
            {/* Hero with table */}
            <section className={`global-padding ${styles['hero']}`}>
                <div className='row m-0 align-items-start'>
                    <div className='col-12 col-lg-6 p-0 pt-lg-2 d-flex flex-column justify-content-start'>
                        <div className={styles['hero-content']} style={{ textAlign: 'left', margin: 0, marginBottom: 0 }}>
                            <h1>
                                Contact Form <b>Spam Filter</b>
                            </h1>
                            <p className={styles['hero-subtitle']} style={{ textAlign: 'left', marginLeft: 0, marginRight: 0 }}>
                                Automatically filter unwanted or spam messages from your website contact form, with a custom Small Language Model that runs on your CPU. No cloud dependency, no latency, no data leaving your infrastructure.
                            </p>
                            <div className={styles['hero-actions']} style={{ justifyContent: 'flex-start' }}>
                                <a className='btn btn-primary' href='/#try-it-out'>
                                    Get this model <BsArrowRight className='ms-2' />
                                </a>
                                <a className='btn btn-white' href='#how-it-works'>
                                    See how it works <BsArrowRight className='ms-2' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 p-0 pt-lg-3 mt-5 mt-lg-0 d-flex justify-content-lg-end justify-content-center'>
                        <div className={`table-responsive ${styles['demo-table-hero']}`} style={{ maxWidth: 480 }}>
                            <table className={styles['demo-table']}>
                                <thead>
                                    <tr>
                                        <th>Message</th>
                                        <th>Predicted Category</th>
                                        <th>Confidence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CATEGORIES_EXAMPLE.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.input}</td>
                                            <td>
                                                <span className={styles['label-badge']}>
                                                    {row.label}
                                                </span>
                                            </td>
                                            <td className={styles['confidence']}>{row.confidence}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className={`global-padding ${styles['section']}`}>
                <h2 className={`${styles['section-title']} ${styles['left']}`}>Why use our Contact Form Spam Filter?</h2>
                <p className={`${styles['section-subtitle']} ${styles['left']}`}>
                    Other spam filtering solutions rely on your data being sent to third-party servers and generic models. With Tanaos, you get a custom model that runs entirely on your infrastructure, with no data leaving your servers.
                </p>
                <div className='row mt-5 g-4'>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsLightning className={styles['benefit-icon']} />
                            <h3>Blazing fast</h3>
                            <p>
                                Filter messages in under 100ms on a regular CPU. No GPU required, perfect for real-time applications.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsShieldCheck className={styles['benefit-icon']} />
                            <h3>Private & secure</h3>
                            <p>
                                Runs entirely on your infrastructure. Customer data never leaves your servers.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsGraphUp className={styles['benefit-icon']} />
                            <h3>Highly accurate</h3>
                            <p>
                                Trained specifically for your use case and spam patterns. Outperforms generic models on your data.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsCpu className={styles['benefit-icon']} />
                            <h3>Runs on CPU</h3>
                            <p>
                                Models are small enough (~500MB) to run on any machine. No expensive GPU infrastructure needed.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsGlobe className={styles['benefit-icon']} />
                            <h3>Multilingual</h3>
                            <p>
                                We can build models that work across languages, perfect for global businesses.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsCodeSlash className={styles['benefit-icon']} />
                            <h3>Easy to integrate</h3>
                            <p>
                                A few lines of Python. Plug it into your website backend or CRM in minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code example */}
            <section id='how-it-works' className={`global-padding ${styles['section']}`}>
                <h2 className={styles['section-title']}>How it works</h2>
                <p className={styles['section-subtitle']}>
                    Integrate the spam filter model we've created for you in your pipeline with just a few lines of code, using the Transformers library.
                </p>
                <div className={`mt-5 ${styles['code-container']}`}>
                    <CodeSnippet code={EXAMPLE_CODE} language='python' />
                </div>
            </section>

            {/* How we build it */}
            <section className={`global-padding ${styles['section']}`}>
                <h2 className={`${styles['section-title']} ${styles['left']}`}>How we build your model</h2>
                <div className={`row mt-5 g-4 ${styles['steps']}`}>
                    <div className='col-12 col-md-3'>
                        <div className={styles['step']}>
                            <span className={styles['step-number']}>1</span>
                            <h3>You describe the task</h3>
                            <p>Tell us your spam patterns, languages, and any special requirements.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className={styles['step']}>
                            <span className={styles['step-number']}>2</span>
                            <h3>We build the model</h3>
                            <p>We create a custom SLM trained specifically for your use case. No data needed from you.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className={styles['step']}>
                            <span className={styles['step-number']}>3</span>
                            <h3>You test it for free</h3>
                            <p>Try the model before committing. If it doesn&apos;t meet your needs, you don&apos;t pay.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className={styles['step']}>
                            <span className={styles['step-number']}>4</span>
                            <h3>Deploy anywhere</h3>
                            <p>Run it on your own servers, in the cloud, or use our API. Your choice.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id='try-it-out' className={`global-padding ${styles['section']} ${styles['cta-section']}`}>
                <div className={styles['cta-card']}>
                    <h2><BsStars style={{ fontSize: '2rem', marginRight: '1rem', verticalAlign: 'middle' }} />Ready to stop contact form spam?</h2>
                    <p>
                        Tell us about your use case and we&apos;ll create a custom model for you, <b>100% free of charge</b>. You only pay if you decide to use it.
                    </p>
                    <div className={styles['cta-actions']}>
                        <Link className='btn btn-primary' href='/#try-it-out'>
                            Get your model <BsArrowRight className='ms-2' />
                        </Link>
                        <Link className='btn btn-white' href={Config.BLOG_ROUTE}>
                            Read our blog <BsArrowRight className='ms-2' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
