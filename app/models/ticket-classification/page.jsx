import { BsArrowRight, BsCpu, BsShieldCheck, BsLightning, BsGlobe, BsCodeSlash, BsGraphUp, BsStars } from 'react-icons/bs';
import Link from 'next/link';

import { Config } from '../../../config';
import { CodeSnippet } from '../../../components/CodeSnippet';
import styles from './TicketClassification.module.scss';


const title = 'Ticket Classification & Routing | Tanaos';
const description = 'Automatically classify and route support tickets to the right team with a custom Small Language Model. Fast, private, and accurate.';
const url = `${Config.WEBSITE_BASE_URL}models/ticket-classification/`;

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

# Load the custom ticket classification model we created for you
pipeline(
    task="text-classification",
    model="your-org/ticket-classifier",
)

tickets = [
    "I can't log in to my account, it says password is incorrect",
    "Can I upgrade my plan from Plus to Premium?",
    "The API is returning 500 errors since this morning",
    "I'd like a refund for my last payment",
]

results = pipeline(tickets)

# [
#   {"label": "authentication",  "confidence": 0.96},
#   {"label": "billing",         "confidence": 0.94},
#   {"label": "technical",       "confidence": 0.98},
#   {"label": "billing",         "confidence": 0.93},
# ]`;

const CATEGORIES_EXAMPLE = [
    { input: "I can't log in to my account", label: "Authentication", confidence: "96%" },
    { input: "Can I upgrade my plan?", label: "Billing", confidence: "94%" },
    { input: "API returning 500 errors", label: "Technical", confidence: "98%" },
    { input: "I'd like a refund", label: "Billing", confidence: "93%" },
    { input: "How do I reset my password?", label: "Authentication", confidence: "95%" },
    { input: "Feature request: dark mode", label: "Feature Request", confidence: "91%" },
];

export default function TicketClassificationPage() {
    return (
        <div className={styles['page']}>
            {/* Hero with table */}
            <section className={`global-padding ${styles['hero']}`}>
                <div className='row m-0 align-items-start'>
                    <div className='col-12 col-lg-6 p-0 pt-lg-2 d-flex flex-column justify-content-start'>
                        <div className={styles['hero-content']} style={{ textAlign: 'left', margin: 0, marginBottom: 0 }}>
                            <h1>
                                <b>Ticket Classification</b> & Routing
                            </h1>
                            <p className={styles['hero-subtitle']} style={{ textAlign: 'left', marginLeft: 0, marginRight: 0 }}>
                                Automatically classify and route incoming support tickets to the right 
                                team — with a custom Small Language Model that runs on your CPU.
                                No cloud dependency, no latency, no data leaving your infrastructure.
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
                                        <th>Ticket</th>
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
                <h2 className={`${styles['section-title']} ${styles['left']}`}>Why use our Ticket Classification model?</h2>
                <p className={`${styles['section-subtitle']} ${styles['left']}`}>
                    Other ticket classification solutions rely on your data being sent to a third-party 
                    servers and lengthy training processes. With Tanaos, you get a custom model that runs 
                    entirely on your infrastructure, with no data leaving your servers.
                </p>
                <div className='row mt-5 g-4'>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsLightning className={styles['benefit-icon']} />
                            <h3>Blazing fast</h3>
                            <p>
                                Classify tickets in under 100ms on a regular CPU. 
                                No GPU required, perfect for real-time applications.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsShieldCheck className={styles['benefit-icon']} />
                            <h3>Private & secure</h3>
                            <p>
                                Runs entirely on your infrastructure. Customer data 
                                never leaves your servers.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsGraphUp className={styles['benefit-icon']} />
                            <h3>Highly accurate</h3>
                            <p>
                                Trained specifically for your categories and terminology.
                                Outperforms generic models on your data.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsCpu className={styles['benefit-icon']} />
                            <h3>Runs on CPU</h3>
                            <p>
                                Models are small enough (~500MB) to run on any machine.
                                No expensive GPU infrastructure needed.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsGlobe className={styles['benefit-icon']} />
                            <h3>Multilingual</h3>
                            <p>
                                We can build models that work across languages — 
                                perfect for global support teams.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsCodeSlash className={styles['benefit-icon']} />
                            <h3>Easy to integrate</h3>
                            <p>
                                A few lines of Python. Plug it into your helpdesk,
                                CRM, or ticketing system in minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code example */}
            <section id='how-it-works' className={`global-padding ${styles['section']}`}>
                <h2 className={styles['section-title']}>How it works</h2>
                <p className={styles['section-subtitle']}>
                    Integrate the ticket classification model we've created for you in your pipeline 
                    with just a few lines of code, using the Transformers library.
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
                            <p>Tell us your ticket categories, languages, and any special requirements.</p>
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
                    <h2><BsStars style={{ fontSize: '2rem', marginRight: '1rem', verticalAlign: 'middle' }} />Ready to automate ticket routing?</h2>
                    <p>
                        Tell us about your use case and we&apos;ll create a custom model for you — 
                        <b> 100% free of charge</b>. You only pay if you decide to use it.
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
