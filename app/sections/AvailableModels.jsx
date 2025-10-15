import { BoxArrowUpRight } from 'react-bootstrap-icons';
import Image from 'next/image';

import { Config } from '../../config';
import styles from './AvailableModels.module.scss';
import { getAvailableModels } from '../../lib/availableModels';


const availableModels = await getAvailableModels();


export const AvailableModels = () => {

    return <div className='global-padding'>
        <div className='row'>
            <h2 className='mb-5'>Available Task-Specific Models</h2>
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
                        <div className='mt-4'>
                            <a 
                                href={Config.DOCS_GUARDRAIL_INTRO_URL}
                                target='_blank' rel='noreferrer'
                                className='btn btn-white me-4'
                            >
                                Read the docs <BoxArrowUpRight className='ms-1' />
                            </a>
                            <a 
                                href={Config.ARTIFEX_GUARDRAIL_DEMO_URL}
                                target='_blank' rel='noreferrer'
                                className='btn btn-white'
                            >
                                Try it out <BoxArrowUpRight className='ms-1' />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
};

export default AvailableModels;