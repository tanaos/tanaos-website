import './index.scss';
import { Config } from '../../../config';


export const WhyTanaosSection = () => {
    return <div className='mt-4 mb-5 mt-md-0 mb-md-0 why-tanaos-section global-padding'>
        <div className='row'>
            <div className='row mt-5'>
                <div className='col-12 col-md-3'>
                    <h3>Create Task-Specific LLMs</h3>
                    <p>
                        Build LLMs that are optimized for specific NLP tasks, for which
                        general-purpose LLMs are overkill.
                    </p>
                    <a href={Config.DOCS_URL} rel='noreferrer' target='_blank'>
                        Learn more <i className='bi bi-box-arrow-up-right'></i>
                    </a>
                </div>
                <div className='col-12 col-md-3'>
                    <h3>No training data needed</h3>
                    <p>
                        Perform Text Classification without training data, as training is done
                        on synthetic data generated on-the-fly.
                    </p>
                    <a href={Config.DOCS_URL} rel='noreferrer' target='_blank'>
                        Learn more <i className='bi bi-box-arrow-up-right'></i>
                    </a>
                </div>
                <div className='col-12 col-md-3'>
                    <h3>Perform offline NLP tasks</h3>
                    <p>
                        None of the created models require a GPU, so you can run everything 
                        on your laptop or on a small server.
                    </p>
                    <a href={Config.DOCS_URL} rel='noreferrer' target='_blank'>
                        Learn more <i className='bi bi-box-arrow-up-right'></i>
                    </a>
                </div>
                <div className='col-12 col-md-3'>
                    <h3>Drastically reduce your LLM API bill</h3>
                    <p>
                        Offload tasks to offline task-specific models and reduce the number of 
                        paid API calls to general-purpose LLMs.
                    </p>
                    <a href={Config.DOCS_URL} rel='noreferrer' target='_blank'>
                        Learn more <i className='bi bi-box-arrow-up-right'></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaosSection;