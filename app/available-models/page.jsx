import styles from './AvailableModels.module.scss';
import { CodeSnippet } from '../../components/CodeSnippet';
import { getAvailableModels } from '../../lib/availableModels';


const availableModels = await getAvailableModels();


export const AvailableModels = () => {
    return <div className={`global-padding ${styles['available-models-page']}`}>
        <div className='text-center'>
            <h1>Available Task-Specific Models</h1>
            <p className='mt-4'>
                Explore our collection of task-specific models designed to enhance your AI applications. 
            </p>
        </div>
        {availableModels.map(({ name, description, emoji, sampleCode }) => (
            <div key={name} className='mt-5'>
                <div className={styles['model-box']}>
                    <h2>{emoji} {name}</h2>
                    <p className='mt-2'>
                        {description}
                    </p>
                    <CodeSnippet
                        code={sampleCode}
                    />
                </div>
            </div>
        ))}
    </div>
}

export default AvailableModels;