import styles from './AvailableModels.module.scss';
import { CodeSnippet } from '../../components/CodeSnippet';


const sampleCode = `from artifex import Artifex

guardrail = Artifex().guardrail

guardrail.train(
    instructions=[
        "Soft medical advice is allowed, but it should be general and not specific to any individual.",
        "Anything that is about cosmetic products, including available products or their usage, is allowed.",
        "Anything else, including hard medical advice, is not allowed under any circumstances.",
    ]
)
`;


export const AvailableModels = () => {
    return <div className={`global-padding ${styles['available-models-page']}`}>
        <div className='text-center'>
            <h1>Available Task-Specific Models</h1>
            <p className='mt-4'>
                Explore our collection of task-specific models designed to enhance your AI applications. 
            </p>
        </div>
        <div className='mt-5'>
            <div className={styles['model-box']}>
                <h2>🛡️ Guardrail Model</h2>
                <p className='mt-2'>
                    Guardrail models are used to flag unsafe, harmful or off-topic messages in chatbots 
                    and virtual assistants.
                </p>
                <CodeSnippet
                    code={sampleCode}
                />
            </div>
        </div>
    </div>
}

export default AvailableModels;