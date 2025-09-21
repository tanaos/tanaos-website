import './index.scss';
import { Config } from '../../../config';


export const AvailableModelsSection = () => {

    return <div id='available-models' className='available-models-section global-padding'>
        <div className='row'>
            <h2 className='mb-5'>Available Task-Specific Models</h2>
            <div className='col-12 col-md-4 margin-end'>
                <div className='model-card'>
                    <h3 className='mb-3'>🛡️ Guardrail Model</h3>
                    <p>
                        Typically used to flag unsafe, harmful or off-topic messages in chatbots
                        and virtual assistants.
                        Create your local Guardrail Model and reduce the number of paid API calls
                        you make to third-party APIs.
                    </p>
                    <div className='mt-4'>
                        <button 
                            onClick={
                                () => window.open(Config.DOCS_GUARDRAIL_INTRO_URL, '_blank', 'noreferrer')
                            }
                            className='btn btn-white me-4'
                        >
                            Learn more <i className='ms-1 bi bi-box-arrow-up-right'></i>
                        </button>
                        <button 
                            onClick={
                                () => window.open(Config.ARTIFEX_GUARDRAIL_DEMO_URL, '_blank', 'noreferrer')
                            }
                            className='btn btn-white'
                        >
                            Try it out <i className='ms-1 bi bi-box-arrow-up-right'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-4 margin-end'>
                <div className='model-card'>
                    <h3 className='mb-3'>🗣️ Intent Classification</h3>
                    <p>
                        Typically used in chatbots and virtual assistants to classify user intents 
                        based on their messages.
                        Create your local Intent Classification Model and reduce the number of paid
                        API calls you make to third-party APIs.
                    </p>
                    <div className='mt-4'>
                        <button 
                            onClick={
                                () => window.open(Config.DOCS_INTENT_CLASSIFICATION_INTRO_URL, '_blank', 'noreferrer')
                            }
                            className='btn btn-white me-4'
                        >
                            Learn more <i className='ms-1 bi bi-box-arrow-up-right'></i>
                        </button>
                        <button
                            onClick={
                                () => window.open(Config.ARTIFEX_INTENT_CLASSIFIER_DEMO_URL, '_blank', 'noreferrer')
                            } 
                            className='btn btn-white'
                        >
                            Try it out <i className='ms-1 bi bi-box-arrow-up-right'></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-4'>
                <div className='model-card'>
                    <h3 className='mb-3'>💡 <ins>Tell us what you need!</ins></h3>
                    <p>
                        We are actively working on creating new task-specific models based on user 
                        feedback and demand. Creating models that users need is our top priority.
                        <br /><br />

                        Is there a specific task you would like to see a model for? <a 
                            href={Config.ARTIFEX_NEW_MODEL_SUGGESTION_URL}
                            target='_blank' rel='noreferrer'
                        >
                            Suggest it <i className='bi bi-box-arrow-up-right'></i>
                        </a> or <a 
                            href={Config.ARTIFEX_NEW_MODEL_SUGGESTIONS_LIST_URL}
                            target='_blank' rel='noreferrer'
                        >
                            upvote existing suggestions! <i className='bi bi-box-arrow-up-right'></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default AvailableModelsSection;