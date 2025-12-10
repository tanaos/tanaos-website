import styles from './AvailableModels.module.scss';


export const AvailableModels = () => {

    return <div className={`global-padding ${styles['available-models']}`}>
        <div className={`d-flex align-items-center justify-content-between ${styles['section-header']} mb-5`}>
            <h2>Available Task-Specific Models</h2>
        </div>
        <div className='row'>
            <table className={`table`}>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Size</th>
                        <th>Description</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Guardrail</td>
                        <td>0.1B params, 500Mb</td>
                        <td>Flags unsafe, harmful, or off-topic messages.</td>
                        <td>
                            <a href="">HF</a> • <a href="">Code Examples</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Intent Classification</td>
                        <td>0.1B params, 500Mb</td>
                        <td>Classifies user messages into predefined intent categories.</td>
                        <td>
                            <a href="">HF</a> • <a href="">Code Examples</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Reranker</td>
                        <td>0.1B params, 470Mb</td>
                        <td>Ranks a list of items or search results based on relevance to a query.</td>
                        <td>
                            <a href="">HF</a> • <a href="">Code Examples</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Sentiment Analysis</td>
                        <td>0.1B params, 470Mb</td>
                        <td>Determines the sentiment (positive, negative, neutral) of a given text.</td>
                        <td>
                            <a href="">HF</a> • <a href="">Code Examples</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Emotion Detection</td>
                        <td>0.1B params, 470Mb</td>
                        <td>Identifies the emotion expressed in a given text.</td>
                        <td>
                            <a href="">HF</a> • <a href="">Code Examples</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Named Entity Recognition (NER)</td>
                        <td>0.1B params, 500Mb</td>
                        <td>Detects and classifies named entities in text.</td>
                        <td>
                            <a href="">HF</a> • <a href="">Code Examples</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Text Anonymization</td>
                        <td>0.1B params, 500Mb</td>
                        <td>Removes personally identifiable information (PII) from text.</td>
                        <td>
                            <a href="">HF</a> • <a href="">Code Examples</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
};

export default AvailableModels;