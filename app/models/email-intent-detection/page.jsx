import { BsArrowRight, BsCpu, BsShieldCheck, BsLightning, BsGlobe, BsCodeSlash, BsGraphUp, BsStars, BsEnvelope } from 'react-icons/bs';
import Link from 'next/link';

import { Config } from '../../../config';
import { CodeSnippet } from '../../../components/CodeSnippet';
import styles from '../contact-form-spam-filter/TicketClassification.module.scss';

const title = 'Email Intent Detection for Sales Teams | Tanaos';
const description = 'Classify inbound sales emails by intent: Interested, Not now, Request demo, Pricing question, Competitor comparison. Perfect for B2B SaaS and enterprise sales teams.';
const url = `${Config.WEBSITE_BASE_URL}models/email-intent-detection/`;

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

# Load the custom intent detection model
pipeline(
    task="text-classification",
    model="your-org/email-intent-detection",
)

emails = [
    "We are interested in your solution. Can we talk?",
    "Not the right time for us, thanks.",
    "Can I get a demo next week?",
    "What are your pricing options?",
    "How do you compare to CompetitorX?",
]

results = pipeline(emails)

# [
#   {"label": "Interested",              "confidence": 0.97},
#   {"label": "Not now",                 "confidence": 0.95},
#   {"label": "Demo",                    "confidence": 0.98},
#   {"label": "Pricing",                 "confidence": 0.96},
#   {"label": "Comparison",              "confidence": 0.94},
# ]`;

const CATEGORIES_EXAMPLE = [
    { input: "We are interested in your solution. Can we talk?", label: "Interested", confidence: "97%" },
    { input: "Not the right time for us, thanks.", label: "Not now", confidence: "95%" },
    { input: "Can I get a demo next week?", label: "Demo", confidence: "98%" },
    { input: "What are your pricing options?", label: "Pricing", confidence: "96%" },
    { input: "How do you compare to CompetitorX?", label: "Comparison", confidence: "94%" },
];

export default function EmailIntentDetectionPage() {
    return (
        <div className={styles['page']}>
            {/* Hero with table */}
            <section className={`global-padding ${styles['hero']}`}>
                <div className='row m-0 align-items-start'>
                    <div className='col-12 col-lg-6 p-0 pt-lg-2 d-flex flex-column justify-content-start'>
                        <div className={styles['hero-content']}>
                            <h1>
                                <b>Email Intent Detection</b> for Sales Teams
                            </h1>
                            <p className={styles['hero-subtitle']}>
                                Classify inbound sales emails by intent: <b>Interested</b>, <b>Not now</b>, <b>Request demo</b>, <b>Pricing question</b>, <b>Competitor comparison</b>... Or anything else. Perfect for B2B SaaS and enterprise sales teams.
                            </p>
                            <div className={styles['hero-actions']}>
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
                        <div className={`table-responsive ${styles['demo-table-hero']}`}>
                            <table className={styles['demo-table']}>
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Predicted Intent</th>
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
                <h2 className={`${styles['section-title']} ${styles['left']}`}>Why use our Email Intent Detection?</h2>
                <p className={`${styles['section-subtitle']} ${styles['left']}`}>
                    Tiny fine-tuned models handle this beautifully. Instantly route and prioritize sales leads, automate CRM updates, and empower your sales team to focus on closing deals.
                </p>
                <div className='row mt-5 g-4'>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsLightning className={styles['benefit-icon']} />
                            <h3>Blazing fast</h3>
                            <p>
                                Classify emails in under 100ms on a regular CPU. No GPU required, perfect for real-time sales workflows.
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
                                Trained specifically for your sales use case and intent categories. Outperforms generic models on your data.
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
                                We can build models that work across languages, perfect for global sales teams.
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className={styles['benefit-card']}>
                            <BsCodeSlash className={styles['benefit-icon']} />
                            <h3>Easy to integrate</h3>
                            <p>
                                A few lines of Python. Plug it into your CRM or sales automation tools in minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Code example */}
            <section id='how-it-works' className={`global-padding ${styles['section']}`}>
                <h2 className={styles['section-title']}>How it works</h2>
                <p className={styles['section-subtitle']}>
                    Integrate the intent detection model we've created for you in your pipeline with just a few lines of code, using the Transformers library.
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
                            <p>Tell us your intent categories, sales workflow, and any special requirements.</p>
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
                    <h2 className={styles['cta-title']}><BsStars className={styles['cta-icon']} />Ready to classify sales emails?</h2>
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
