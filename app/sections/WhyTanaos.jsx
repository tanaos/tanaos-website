import styles from './WhyTanaos.module.scss';

export const WhyTanaos = () => {
    return <div className={`mt-5 mb-5 mt-md-0 mb-md-0 ${styles['why-tanaos-section']} global-padding`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Why Tanaos?</h2>
        </div>
        <div className='row'>
            <div className='row'>
                <div className={`col-12 col-md-4 ${styles['feature-box']}`}>
                    <h3>Models for any use-case</h3>
                    <p>
                        We develop custom Small Language Models based on your specific requirements,
                        ensuring that you get the best performance. No data needed.
                    </p>
                </div>
                <div className={`col-12 col-md-4 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3>Use them on your CPU</h3>
                    <p>
                        Once we've created a model for you, you can run it on your own CPU for
                        maximum control, privacy and performance. No API, no latency.
                    </p>
                </div>
                <div className={`col-12 col-md-4 ${styles['feature-box']}`}>
                    <h3>Only pay if you use it</h3>
                    <p>
                        Model development is 100% free. You only pay if you end up using the model. 
                        You don't like it? Don't use it, don't pay. No questions asked.
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaos;