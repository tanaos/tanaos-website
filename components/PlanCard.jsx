import { ArrowRight } from 'react-bootstrap-icons';

import styles from './PlanCard.module.scss';
import { Config } from '../config';


export const PlanCard = ({ 
    planName, planPrice, planCurrency, planDescription, features, buttonDisabled, linkText
}) => {

    return <div className={styles['plan-card']}>
        <div>
            <h6 className={`${styles['plan-name']} mb-5`}>{planName}</h6>
            <span className={styles['price-number']}>{planPrice}</span> 
            {planCurrency && <span className={styles['price-info']}>{planCurrency.toUpperCase()} / month</span>}
        </div>
        <div className='mt-4'>{planDescription}</div>
        <div className={`mt-5 ${styles['link-container']}`}>
            <a 
                className={`${styles['plan-link']} ${buttonDisabled ? styles['disabled'] : ''}`}
                href={Config.PLATFORM_PLANS_PAGE_URL}
                disabled={buttonDisabled}
            >
                {  
                    linkText ? linkText : buttonDisabled ? 'Default plan' : 
                    <>{`To plan selection`}<ArrowRight className='ms-1' /></>
                }
            </a>
        </div>
        <div className='mt-5'>
            {features.map((feature, index) => (
                <div key={index} className='mt-1'>
                    <span className='me-2'>
                        {feature.icon}
                    </span>
                    {feature.text}
                </div>
            ))}
        </div>
    </div>
};

export default PlanCard;