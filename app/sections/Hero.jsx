import styles from './Hero.module.scss';
import { CodeSnippet } from '../../components/CodeSnippet';
import { Config } from '../../config';


export const Hero = () => {

    const sampleCode = `# Don't forget to run 'pip install artifex'

from artifex import Artifex

guardrail = Artifex().guardrail

guardrail.train(
    instructions=[
        "Soft medical advice is allowed, but it should be general and not specific to any individual.",
        "Anything that is about cosmetic products, including available products or their usage, is allowed.",
        "Anything else, including hard medical advice, is not allowed under any circumstances.",
    ]
)
`;

    return <div className='row m-0 global-padding'>
        <div className='col-12 col-md-6 m-0 p-0 mt-4'>
            <h1>
                Create task-specific LLMs for NLP and Text Classification
            </h1>
            <h2 className={`mt-4 ${styles['hero-subtitle']}`}>
                Perform offline <b>NLP</b> and <b>Text Classification</b> tasks, such as Guardrail Models and
                Intent Classification, <b>without training data, GPUs or third-party APIs.</b>
            </h2>
            <div className='mt-5'>
                <a 
                    className='btn btn-white me-5'
                    href={Config.ARTIFEX_GITHUB_URL}
                    target='_blank' rel='noreferrer'
                >
                    See on GitHub <i className='ms-1 bi bi-github'></i>
                </a>
                <a
                    className='btn btn-white'
                    href={Config.ARTIFEX_GUARDRAIL_DEMO_URL}
                    target='_blank' rel='noreferrer'
                >
                    Try it out <i className='ms-1 bi bi-box-arrow-up-right'></i>
                </a>
            </div>
        </div>
        <div className='col-12 col-md-6 col-6 m-0 p-0 ps-md-5 mt-4'>
            <CodeSnippet code={sampleCode} />
        </div>
    </div>
};

export default Hero;