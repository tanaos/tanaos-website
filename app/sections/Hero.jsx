import { Github, BoxArrowUpRight } from 'react-bootstrap-icons';
import Image from 'next/image';

import styles from './Hero.module.scss';
import { Config } from '../../config';


export const Hero = () => {
    return <div className='row m-0 global-padding mb-0 mb-md-5'>
        <div className='col-12 col-md-6 m-0 p-0 pt-md-5'>
            <h1 className={styles['hero-title']}>
                Use and fine-tune small, task-specific LLMs. Without training data or GPUs.
            </h1>
            <h2 className={`mt-4 ${styles['hero-subtitle']}`}>
                Reduce LLM API <b>costs</b>, get built-in <b>privacy</b> and <b>improve 
                performance</b> on your tasks by using task-specific, local, small LLMs.
            </h2>
            <div className='mt-5'>
                <a 
                    className='btn btn-white me-5'
                    href={Config.ARTIFEX_GITHUB_URL}
                    target='_blank' rel='noreferrer'
                >
                    See on GitHub <Github className='ms-1' />
                </a>
                <a
                    className='btn btn-white'
                    href={Config.DOCS_GUARDRAIL_EXAMPLES}
                    target='_blank' rel='noreferrer'
                >
                    Try it out <BoxArrowUpRight className='ms-1' />
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