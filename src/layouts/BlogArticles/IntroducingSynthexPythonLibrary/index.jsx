import python_library from '../../../assets/python_library.png';
import { Config } from '../../../config';


export const IntroducingSynthexPythonLibrary = () => {

    return <div>
        <h1>Introducing Synthex, our open-source Python library for synthetic data generation</h1>
        <img 
            src={python_library} 
            alt='Synthex, our open-source library for generating synthetic data' 
        />
        <p>
            We're excited to announce the release of <a href={Config.SYNTHEX_GITHUB_URL} rel='noreferrer' target='_blank'>Synthex</a>, 
            a lightweight Python library designed to <b>make synthetic data generation fast, flexible, and developer-friendly</b>. Whether 
            you're testing machine learning models, validating pipelines, or bootstrapping analytics projects — synthex helps you 
            create high-quality, customizable datasets in seconds.
        </p>
        <h2>Use cases</h2>
        <p>
            Synthex can be used to quickly generate synthetic datasets of any kind and size, to train and test Machine Learning
            models, validate data pipelines, or bootstrap analytics projects. It is particularly effecrive to fine-tune Large
            Language Models (LLMs) for specific tasks, such as text classification, summarization, or question answering.
        </p>
        <h2>Documentation and tutorials</h2>
        <p>
            You can find the full documentation and a selection of tutorials to get you started on 
            the <a href={Config.DOCS_URL} rel='noreferrer' target='_blank'>Synthex documentation page</a>.
        </p>
        <p>
            Many of the datasets you can find on our <a href={Config.HUGGINGFACE_URL} rel='noreferrer' target='_blank'>HuggingFace page</a> were
            generated using Synthex. For instance, our <a href='https://huggingface.co/datasets/tanaos/post-inference-guardrail-model-training-dataset' rel='noreferrer' target='_blank'>LLM Guardrail training dataset</a> was 
            created with Synthex, using <a href='https://colab.research.google.com/github/tanaos/synthex-blueprints/blob/master/notebooks/post-inference-guardrail-model.ipynb' rel='noreferrer' target='_blank'>this Jupyter Notebook</a>. Feel 
            free to check it out!
        </p>
    </div>
};

export default IntroducingSynthexPythonLibrary;