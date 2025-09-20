import './index.scss';


export const WhyTanaosSection = () => {
    return <div className='mt-4 mb-5 mt-md-0 mb-md-0 global-padding'>
        <h2>💡 Why Tanaos</h2>
        <div className='row'>
            <div className='row mt-5'>
                <div className='col-12 col-md-3'>
                    <h3>Create Task-Specific LLMs</h3>
                    <p>
                        Build LLMs that are optimized for specific NLP tasks, such as
                        Guardrail Models and Intent Classification.
                    </p>
                </div>
                <div className='col-12 col-md-3'>
                    <h3>No training data needed</h3>
                    <p>
                        Perform Text Classification without training data, as we generate synthetic 
                        training data for you.
                    </p>
                </div>
                <div className='col-12 col-md-3'>
                    <h3>Perform offline NLP tasks</h3>
                    <p>
                        None of our models require a GPU. Run everything offline on your laptop or 
                        on a small server.
                    </p>
                </div>
                <div className='col-12 col-md-3'>
                    <h3>Drastically reduce your LLM API bill</h3>
                    <p>
                        Offload tasks to offline task-specific models and reduce the number of 
                        paid API calls to general-purpose LLMs.
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default WhyTanaosSection;