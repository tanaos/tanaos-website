import styles from './WhyTanaos.module.scss';

export const WhyTanaos = () => {
    return <div className={`mt-5 mb-5 mt-md-0 mb-md-0 ${styles['why-tanaos-section']} global-padding`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Why Tanaos?</h2>
        </div>
        <div className='row'>
            <div className='row'>
                <div className={`col-12 col-md-3 ${styles['feature-box']}`}>
                    <h3>Use small, task-specific LLMs on CPU</h3>
                    <p>
                        Use pre-trained, task-specific small LLMs on your CPU for fast and
                        cost-effective inference.
                    </p>
                </div>
                <div className={`col-12 col-md-3 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3>Fine-tune them without training data, on CPU</h3>
                    <p>
                        Fine-tune the pre-trained models without training data; models are trained
                        on synthetic data generated on-the-fly.
                    </p>
                </div>
                <div className={`col-12 col-md-3 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3>Keep your data private and secure</h3>
                    <p>
                        Stop sending data to third-party servers. Since models run locally on your CPU, 
                        your data never leaves your machine.
                    </p>
                </div>
                <div className={`col-12 col-md-3 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3>Lower costs, higher accuracy</h3>
                    <p>
                        Offload tasks to local, specialized task-specific models; reduce cost on your 
                        LLM API, while improving accuracy.
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaos;