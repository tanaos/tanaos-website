import { ShieldCheck, BoxArrowUpRight, ChatSquareText, Lightbulb } from 'react-bootstrap-icons';

import { Config } from '../../config';
import styles from './AvailableModels.module.scss';


export const AvailableModels = () => {

    return <div id='available-models' className='global-padding'>
        <div className='row'>
            <h2 className='mb-5'>Available Task-Specific Models</h2>
            <div className='col-12 col-md-4 margin-end'>
                <div className={`${styles['model-card']}`}>
                    <h3 className='mb-3'><BoxArrowUpRight className='ms-1' /> Guardrail Model</h3>
                    <p>
                        Typically used to flag unsafe, harmful or off-topic messages in chatbots
                        and virtual assistants. Create your local Guardrail Model and reduce the
                        number of paid calls to third-party APIs.
                    </p>
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
            <div className='col-12 col-md-4 margin-end mt-5 mt-md-0'>
                <div className={`${styles['model-card']}`}>
                    <h3 className='mb-3'><ChatSquareText /> Intent Classification</h3>
                    <p>
                        Typically used in chatbots and virtual assistants to classify user intents.
                        Create your local Intent Classification Model and reduce the number of paid 
                        calls to third-party APIs.
                    </p>
                    <div className='mt-4'>
                        <a 
                            href={Config.DOCS_INTENT_CLASSIFICATION_INTRO_URL}
                            className='btn btn-white me-4'
                            target='_blank' rel='noreferrer'
                        >
                            Read the docs <BoxArrowUpRight className='ms-1' />
                        </a>
                        <a
                            href={Config.ARTIFEX_INTENT_CLASSIFIER_DEMO_URL}
                            target='_blank' rel='noreferrer'
                            className='btn btn-white'
                        >
                            Try it out <BoxArrowUpRight className='ms-1' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-4 mt-5 mt-md-0'>
                <div className={`${styles['model-card']}`}>
                    <h3 className='mb-3'><Lightbulb /> <ins>Tell us what you need!</ins></h3>
                    <p>
                        We are actively working on creating new task-specific models based on user 
                        feedback and demand. Creating models that users need is our top priority.
                        <br /><br />

                        Is there a specific task you would like to see a model for? <a 
                            href={Config.ARTIFEX_NEW_MODEL_SUGGESTION_URL}
                            target='_blank' rel='noreferrer'
                        >
                            Suggest it <BoxArrowUpRight />
                        </a> or <a 
                            href={Config.ARTIFEX_NEW_MODEL_SUGGESTIONS_LIST_URL}
                            target='_blank' rel='noreferrer'
                        >
                            upvote existing suggestions! <BoxArrowUpRight />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default AvailableModels;