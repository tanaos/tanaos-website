import styles from './AvailableModels.module.scss';
import { Config } from '../../config';


export const AvailableModels = () => {

    return <div className={`global-padding ${styles['available-models']}`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Available Task-Specific Models</h2>
        </div>
        <div className='row'>
            <div className='table-responsive'>
                <table className='table custom-table'>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Model</th>
                            <th>Size</th>
                            <th>Description</th>
                            <th>Inference on CPU</th>
                            <th>Fine-Tune on CPU</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Text Classification</td>
                            <td>
                                No default model — must be trained
                            </td>
                            <td>0.1B params, 470Mb</td>
                            <td>
                                Performs general-purpose text classification based on the user 
                                requirements.
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_TEXT_CLASSIFICATION_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_TEXT_CLASSIFICATION_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Guardrail</td>
                            <td><a 
                                href={Config.GUARDRAIL_HF_LINK}
                                target='_blank' rel='noreferrer'
                            >
                                tanaos/tanaos-guardrail-v1
                            </a>
                            </td>
                            <td>0.1B params, 500Mb</td>
                            <td>Flags unsafe, harmful, or off-topic messages.</td>
                            <td>
                                <a 
                                    href={Config.DOCS_GUARDRAIL_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_GUARDRAIL_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Intent Classification</td>
                            <td>
                                <a 
                                    href={Config.INTENT_CLASSIFICATION_HF_LINK}
                                    target='_blank' rel='noreferrer'
                                >
                                    tanaos/tanaos-intent-classifier-v1
                                </a>
                            </td>
                            <td>0.1B params, 500Mb</td>
                            <td>Classifies user messages into predefined intent categories.</td>
                            <td>
                                <a 
                                    href={Config.DOCS_INTENT_CLASSIFICATION_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_INTENT_CLASSIFICATION_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Reranker</td>
                            <td>
                                <a 
                                    href={Config.RERANKER_HF_LINK}
                                    target='_blank' rel='noreferrer'
                                >
                                    cross-encoder/mmarco-mMiniLMv2-L12-H384-v1
                                </a>
                            </td>
                            <td>0.1B params, 470Mb</td>
                            <td>Ranks a list of items or search results based on relevance to a query.</td>
                            <td>
                                <a 
                                    href={Config.DOCS_RERANKER_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_RERANKER_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Sentiment Analysis</td>
                            <td>
                                <a 
                                    href={Config.SENTIMENT_ANALYSIS_HF_LINK}
                                    target='_blank' rel='noreferrer'
                                >
                                    tanaos/tanaos-sentiment-analysis-v1
                                </a>
                            </td>
                            <td>0.1B params, 470Mb</td>
                            <td>Determines the sentiment (positive, negative, neutral) of a given text.</td>
                            <td>
                                <a 
                                    href={Config.DOCS_SENTIMENT_ANALYSIS_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_SENTIMENT_ANALYSIS_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Emotion Detection</td>
                            <td>
                                <a 
                                    href={Config.EMOTION_DETECTION_HF_LINK}
                                    target='_blank' rel='noreferrer'
                                >
                                    tanaos/tanaos-emotion-detection-v1
                                </a>
                            </td>
                            <td>0.1B params, 470Mb</td>
                            <td>Identifies the emotion expressed in a given text.</td>
                            <td>
                                <a 
                                    href={Config.DOCS_EMOTION_DETECTION_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_EMOTION_DETECTION_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Named Entity Recognition</td>
                            <td>
                                <a 
                                    href={Config.NER_HF_LINK}
                                    target='_blank' rel='noreferrer'
                                >
                                    tanaos/tanaos-NER-v1
                                </a>
                            </td>
                            <td>0.1B params, 500Mb</td>
                            <td>Detects and classifies named entities in text.</td>
                            <td>
                                <a 
                                    href={Config.DOCS_NER_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_NER_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Text Anonymization</td>
                            <td>
                                <a 
                                    href={Config.TEXT_ANONYMIZATION_HF_LINK}
                                    target='_blank' rel='noreferrer'
                                >
                                    tanaos/tanaos-text-anonymizer-v1
                                </a>
                            </td>
                            <td>0.1B params, 500Mb</td>
                            <td>Removes personally identifiable information (PII) from text.</td>
                            <td>
                                <a 
                                    href={Config.DOCS_TEXT_ANONYMIZATION_INFERENCE}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
                                </a>
                            </td>
                            <td>
                                <a 
                                    href={Config.DOCS_TEXT_ANONYMIZATION_TRAIN}
                                    target='_blank' rel='noreferrer'
                                >
                                    Code Examples
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