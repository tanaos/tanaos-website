import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

import styles from './Hero.module.scss';


export const Hero = () => {
    return <div className='global-padding mb-0 mb-md-5'>
        <div className='row m-0'>
        <div className='col-12 col-md-6 m-0 p-0 pt-md-5'>
            <h1 className={styles['hero-title']}>
                Developing custom <b>Small Language Models</b> for all your needs.
            </h1>
            <h2 className={`mt-4 ${styles['hero-subtitle']}`}>
                At Tanaos we develop task-specific SmallLMs for any text processing task and 
                language. Tell us what you need to do and we will create a model that does it.
                We don't need any data from you.
            </h2>
            <div className='mt-5 d-flex flex-wrap gap-2 gap-md-4'>
                <a
                    className='btn btn-primary'
                    href='#try-it-out'
                >
                    Create your model <BsArrowRight className='ms-2' />
                </a>
                <a 
                    className='btn btn-white'
                    href='#available-tasks'
                >
                    See sample models <BsArrowRight className='ms-2' />
                </a>
            </div>
        </div>
        <div className='col-12 col-md-6 mt-4 d-none d-md-flex align-items-center'>
            <Image
                className={styles['hero-image']}
                src='/images/hero.png'
                alt='Create task-specific LLMs for NLP and Text Classification | Tanaos'
                width={800}
                height={407}
                style={{ width: '100%', height: 'auto' }}
                unoptimized
            />
        </div>
        </div>
    </div>
};

export default Hero;