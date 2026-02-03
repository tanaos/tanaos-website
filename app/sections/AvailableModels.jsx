import styles from './AvailableModels.module.scss';
import { Config } from '../../config';


export const AvailableModels = () => {

    return <div className={`global-padding ${styles['available-models']}`} id='available-tasks'>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Available Small Language Models</h2>
        </div>
        <div className='row'>
            <div className='table-responsive'>
                <table className='table custom-table'>
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Description</th>
                            <th>Endpoint</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Guardrail</td>
                            <td>Flags unsafe or harmful messages sent by users or LLMs</td>
                            <td>POST slm.tanaos.com/models/guardrail</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_GUARDRAIL} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Intent Classification</td>
                            <td>Classifies user messages into predefined intent categories.</td>
                            <td>POST slm.tanaos.com/models/intent-classification</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_INTENT_CLASSIFICATION} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Spam Detection</td>
                            <td>Identifies whether a message is spam or not.</td>
                            <td>POST slm.tanaos.com/models/spam-detection</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_SPAM_DETECTION} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Sentiment Analysis</td>
                            <td>Determines the sentiment (positive, negative, neutral) of a text.</td>
                            <td>POST slm.tanaos.com/models/sentiment-analysis</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_SENTIMENT_ANALYSIS} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Emotion Detection</td>
                            <td>Identifies the emotion expressed in a given text.</td>
                            <td>POST slm.tanaos.com/models/emotion-detection</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_EMOTION_DETECTION} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Named Entity Recognition</td>
                            <td>Detects and classifies named entities in text.</td>
                            <td>POST slm.tanaos.com/models/named-entity-recognition</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_NAMED_ENTITY_RECOGNITION} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Text Anonymization</td>
                            <td>Removes personally identifiable information (PII) from text.</td>
                            <td>POST slm.tanaos.com/models/text-anonymization</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_TEXT_ANONYMIZATION} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Topic Classification</td>
                            <td>Classifies text into predefined topics.</td>
                            <td>POST slm.tanaos.com/models/topic-classification</td>
                            <td>
                                <a 
                                    href={Config.TANAOS_API_DEMO_TOPIC_CLASSIFICATION} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Try it out
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
};

export default AvailableModels;