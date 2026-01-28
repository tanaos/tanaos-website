import { BoxArrowUpRight } from 'react-bootstrap-icons';
import Image from 'next/image';

import styles from './Hero.module.scss';
import { Config } from '../../config';


export const Hero = () => {
    return <div className='row m-0 global-padding mb-0 mb-md-5'>
        <div className='col-12 col-md-6 m-0 p-0 pt-md-5'>
            <h1 className={styles['hero-title']}>
                <b>Low-latency</b> API, built for <b>real-time</b> NLP applications.
            </h1>
            <h2 className={`mt-4 ${styles['hero-subtitle']}`}>
                Easy-to-use REST API with <b>under 100ms</b> end-to-end latency for 
                7 different NLP tasks, including Guardrail, Text Anonymization, NER and Reranking.
            </h2>
            <div className='mt-5'>
                <a
                    className='btn btn-white me-5'
                    href={Config.DOCS_TEXT_CLASSIFICATION_EXAMPLES}
                    target='_blank' rel='noreferrer'
                >
                    Try it out <BoxArrowUpRight className='ms-1' />
                </a>
                <a 
                    className='btn btn-white'
                    href='#available-tasks'
                >
                    See available tasks <BoxArrowUpRight className='ms-1' />
                </a>
            </div>
        </div>
        <div className='col-12 col-md-6 mt-4 d-none d-md-flex align-items-center'>
            <Image
                className={styles['hero-image']}
                src='/images/hero.png'
                alt='Create task-specific LLMs for NLP and Text Classification | Tanaos'
                layout='responsive'
                width={800}
                height={407}
                unoptimized
            />
        </div>
    </div>
};

export default Hero;