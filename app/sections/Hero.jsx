import { BoxArrowUpRight } from 'react-bootstrap-icons';
import Image from 'next/image';

import styles from './Hero.module.scss';
import { Config } from '../../config';


export const Hero = () => {
    return <div className='row m-0 global-padding mb-0 mb-md-5'>
        <div className='col-12 col-md-6 m-0 p-0 pt-md-5'>
            <h1 className={styles['hero-title']}>
                <b>Small Language Models</b> for all your needs. Use them <b>locally</b> or <b>via API</b>.
            </h1>
            <h2 className={`mt-4 ${styles['hero-subtitle']}`}>
                At Tanaos we develop task-specific SmallLMs for any text processing task and language.
                Use them through our API or get in touch to get a custom model that you can run
                on your own hardware.
            </h2>
            <div className='mt-5 d-flex flex-nowrap gap-2 gap-md-4'>
                <a
                    className='btn btn-white'
                    href={Config.TANAOS_API_DEMO}
                    target='_blank' rel='noreferrer'
                >
                    Try the API <BoxArrowUpRight className='ms-1' />
                </a>
                <a 
                    className='btn btn-white'
                    href='#available-tasks'
                >
                    See available models
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