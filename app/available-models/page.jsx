import styles from './AvailableModels.module.scss';
import { CodeSnippet } from '../../components/CodeSnippet';
import { getAvailableModels } from '../../lib/availableModels';
import { CodeTabs } from '../../components/CodeTabs';


const availableModels = await getAvailableModels();


export const AvailableModels = () => {
    return <div className={`global-padding ${styles['available-models-page']}`}>
        <div className='text-center'>
            <h1>Available Task-Specific Models</h1>
            <p className='mt-4'>
                Explore our collection of task-specific models designed to enhance your AI applications. 
            </p>
        </div>
        <div className='mt-5'>
            {availableModels.map(({ name, description, emoji, trainingCode, inferenceCode }) => (
                <div key={name} className={styles['model-box']}>
                    <h2>{emoji} {name}</h2>
                    <p className='mt-4 mb-4'>
                        {description}
                    </p>
                    <CodeTabs 
                        codeSnippets={{
                            training: trainingCode,
                            inference: inferenceCode,
                        }}
                    />
                </div>
            ))}
        </div>
    </div>
}

export default AvailableModels;