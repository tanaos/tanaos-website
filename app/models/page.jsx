import Link from 'next/link';
import { BsTag, BsEnvelopeSlash, BsEnvelopeOpen, BsShieldCheck, BsFileText, BsGraphUp, BsTools } from 'react-icons/bs';
import styles from './ModelsOverview.module.scss';
import { Config } from '../../config';

const models = [
    {
        name: 'Ticket Classification',
        description: 'Automatically classify and route support tickets to the right team.',
        href: Config.MODELS_TICKET_CLASSIFICATION_ROUTE,
        icon: <BsTag />,
    },
    {
        name: 'Contact Form Spam Filter',
        description: 'Filter unwanted or spam messages from your website contact form.',
        href: Config.MODELS_CONTACT_FORM_SPAM_FILTER_ROUTE,
        icon: <BsEnvelopeSlash />,
    },
    {
        name: 'Email Intent Detection',
        description: 'Classify inbound sales emails by intent for sales teams.',
        href: Config.MODELS_EMAIL_INTENT_DETECTION_ROUTE,
        icon: <BsEnvelopeOpen />,
    },
    {
        name: 'Chatbot Safety & Moderation',
        description: 'Ensure your chatbot never returns unwanted or dangerous responses.',
        href: Config.MODELS_CHATBOT_SAFETY_MODERATION_ROUTE,
        icon: <BsShieldCheck />,
    },
    {
        name: 'Blog Posts Moderation',
        description: 'Automatically moderate blog posts for safe publishing.',
        href: Config.MODELS_BLOG_POSTS_MODERATION_ROUTE,
        icon: <BsFileText />,
    },
    {
        name: 'Anomaly & Fraud Detection',
        description: 'Detect fraudulent transactions and anomalies in financial and e-commerce data.',
        href: Config.MODELS_ANOMALY_FRAUD_DETECTION_ROUTE,
        icon: <BsGraphUp />,
    },
    {
        name: 'Predictive Maintenance',
        description: 'Predict equipment failures and schedule maintenance before breakdowns.',
        href: '/models/predictive-maintenance/',
        icon: <BsTools />,
    },
];

export default function ModelsOverview() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Our Models</h1>
            <p className={styles.subtitle}>Explore our suite of specialized Small Language Models for business automation, safety, and efficiency.</p>
            <div className={`${styles['models-grid']}`}>
                {models.map((model) => (
                    <Link href={model.href} key={model.name} className={styles['model-card']}>
                        <span className={styles.icon}>{model.icon}</span>
                        <div className={styles['model-info']}>
                            <h2>{model.name}</h2>
                            <p>{model.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
