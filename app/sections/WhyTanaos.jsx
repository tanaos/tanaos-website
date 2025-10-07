import styles from './WhyTanaos.module.scss';

export const WhyTanaos = () => {
    return <div className={`mt-5 mb-5 mt-md-0 mb-md-0 ${styles['why-tanaos-section']} global-padding`}>
        <div className='row'>
            <div className='row'>
                <div className={`col-12 col-md-3 ${styles['feature-box']}`}>
                    <h3>Task-Specific LLMs</h3>
                    <p>
                        Build small LLMs that are optimized for specific NLP tasks, for which
                        general-purpose LLMs are overkill.
                    </p>
                </div>
                <div className={`col-12 col-md-3 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3>No training data needed</h3>
                    <p>
                        Perform Text Classification without training data, as training is done
                        on synthetic data generated on-the-fly.
                    </p>
                </div>
                <div className={`col-12 col-md-3 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3>Perform offline NLP tasks</h3>
                    <p>
                        None of the created models require a GPU, so you can run everything 
                        on your laptop or on a small server.
                    </p>
                </div>
                <div className={`col-12 col-md-3 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3>Reduce your LLM API bill</h3>
                    <p>
                        Offload tasks to local task-specific models and reduce the number of 
                        paid calls to LLM APIs.
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaos;