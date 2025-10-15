import { ArrowRight } from 'react-bootstrap-icons';
import Image from 'next/image';
import Link from 'next/link';

import { Config } from '../../config';
import styles from './AvailableModels.module.scss';
import { getAvailableModels } from '../../lib/availableModels';


const availableModels = await getAvailableModels();


export const AvailableModels = () => {

    return <div className={`global-padding ${styles['available-models']}`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Available Task-Specific Models</h2>
            <Link href={Config.AVAILABLE_MODELS_ROUTE + '#available-models'}>
                View all models <ArrowRight className='ms-1' />
            </Link>
        </div>
        <div className='row'>
            {availableModels.map(({ name, description, imageUrl }) => (
                <div className='col-12 col-md-4 margin-end' key={name}>
                    <div className={`${styles['model-card']}`}>
                        <Image 
                            src={imageUrl}
                            alt={`Easily create ${name}s without training data or GPUs | Tanaos`}
                            width={547} height={132}
                            className={styles['model-image']}
                            unoptimized
                        />
                        <h3 className='mb-3'>{name}</h3>
                        <p>{description}</p>
                        <Link 
                            href={Config.AVAILABLE_MODELS_ROUTE + `#${name.toLowerCase().replace(/\s+/g, '-')}`}
                            scroll={true}
                        >
                            Learn More <ArrowRight className='ms-1' />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
};

export default AvailableModels;