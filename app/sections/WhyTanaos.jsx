import styles from './WhyTanaos.module.scss';
import { BsGear, BsCurrencyDollar, BsShieldLock } from 'react-icons/bs';

export const WhyTanaos = () => {
    return <div className={`mt-5 mb-5 mt-md-0 mb-md-0 ${styles['why-tanaos-section']} global-padding`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Why Tanaos?</h2>
        </div>
        <div className='row'>
            <div className='row'>
                <div className={`col-12 col-md-4 ${styles['feature-box']}`}>
                    <h3><BsGear style={{marginRight: '8px'}} />Models for any use-case</h3>
                    <p>
                        We develop custom Small Language Models based on your specific requirements,
                        ensuring that you get the best performance for your unique use-case.
                    </p>
                </div>
                <div className={`col-12 col-md-4 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3><BsCurrencyDollar style={{marginRight: '8px'}} />Cut LLM API costs</h3>
                    <p>
                        Reduce costs by up to 90% compared to using third-party LLM APIs. By running
                        your own small models, you can significantly cut down on expenses while 
                        maintaining high performance.
                    </p>
                </div>
                <div className={`col-12 col-md-4 mt-4 mt-md-0 ${styles['feature-box']}`}>
                    <h3><BsShieldLock style={{marginRight: '8px'}} />Get built-in privacy</h3>
                    <p>
                        With Tanaos, your data stays on your own infrastructure, giving you full 
                        control over your information and ensuring that your sensitive data remains 
                        private and secure.
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaos;