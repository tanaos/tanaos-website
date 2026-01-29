import styles from './WhyTanaos.module.scss';

export const WhyTanaos = () => {
    return <div className={`mt-5 mb-5 mt-md-0 mb-md-0 ${styles['why-tanaos-section']} global-padding`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Why Tanaos?</h2>
        </div>
        <div className='row'>
            <div className='row'>
                <div className={`col-12 col-md-4 ${styles['feature-box']}`}>
                    <div className={styles['icon']}>100ms</div>
                    <h3>Under 100ms end-to-end latency</h3>
                    <p>
                        Blazingly fast inference times, with end-to-end latency under 100ms,
                        perfect for real-time applications.
                    </p>
                </div>
                <div className={`col-12 col-md-4 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <div className={styles['icon']}>8 models</div>
                    <h3>8 specialized models, single API</h3>
                    <p>
                        Get access to 8 specialized models for 8 different NLP tasks, including 
                        Text Anonymization, Named Entity Recognition, Reranking and Guardrail.
                    </p>
                </div>
                <div className={`col-12 col-md-4 ${styles['feature-box']}`}>
                    <div className={styles['icon']}>All-in-one</div>
                    <h3>Simple, easy-to-use REST API</h3>
                    <p>
                        A simple, easy-to-use REST API that allows you to access several NLP
                        models in a single service, with unified authentication and billing.
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaos;