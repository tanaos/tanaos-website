import { Config } from '../../../config';
import text_classification_data from '../../../assets/text_classification_data.png';
import platform_job_wizard_step1 from './platform_job_wizard_step1.png';
import platform_job_wizard_step2 from './platform_job_wizard_step2.png';
import platform_job_wizard_step3 from './platform_job_wizard_step3.png';
import job_refinement_chat_1a from './job_refinement_chat_1a.png';
import job_refinement_chat_1b from './job_refinement_chat_1b.png';
import job_refinement_chat_2 from './job_refinement_chat_2.png';
import job_refinement_chat_3 from './job_refinement_chat_3.png';
import platform_output_dataset from './platform_output_dataset.png';


export const CaseStudyGenerateSyntheticTextClassificationData = () => {

    const financialDatasetCaseStudyLink = 'case-study-generate-synthetic-financial-transaction-data';

    return <div>
        <h1>Case study: create a text classification dataset for sentiment analysis</h1>
        <img 
            src={text_classification_data} 
            alt='Generate a synthetic text classification dataset for sentiment analysis with Tanaos' 
        />
        <p>
            In this case study, we will take a look at how to create a synthetic text classification dataset to train 
            an AI model (for instance a LLM or another NLP model) for sentiment analysis. Since we have already 
            covered the basics of how the platform works in a previous post, in this case study we will assume you 
            have some familiarity with it. If you are not familiar with the platform, we recommend you read our 
            first case study on <a href={financialDatasetCaseStudyLink} target='_blank' rel='noreferrer'>how to 
            create a synthetic financial transaction dataset</a>, which goes over the basics of how to use the 
            platform.
        </p>
        <h3>The objective</h3>
        <p>
            The objective of this case study is to create a custom <b>synthetic text classification dataset for 
            sentiment analysis</b>. The dataset will contain text reviews and their corresponding sentiment labels 
            (positive, negative, or neutral). This dataset can then be used to train or fine-tune a machine learning 
            model for sentiment analysis on custom data.
        </p>
        <h3>Step 1: Create a new job</h3>
        <p>
            We are going to head over to the <a href={Config.PLATFORM_BASE_URL} target='blank' rel='noreferrer'>Dashboard 
            section of the Tanaos platform</a> and open the job creation wizard by clicking on the "Create job" button. 
            We will then enter a descriptive title and, optionally, a subtitle for the job.
        </p>
        <img 
            src={platform_job_wizard_step1} 
            alt='First step of the synthetic dataset generation job creation wizard on the Tanaos platform'
            className='img-with-shadow'
        />
        <h3>Step 2 and 3: Output data description and structure</h3>
        <p>
            Let's move on to the most import part of the job creation process: the output data description and 
            structure definition. Let's keep the <b>output data description</b> straightforward yet sufficiently 
            detailed to ensure the dataset is generated according to our requirements. We want to specify the kind of 
            data that we need, and how it will be used. Let's write something like:
        </p>
        <p>
            <i>
                "Generate a text classification dataset for sentiment analysis, which will be used to train a model 
                to recognize the main sentiment of a text".
            </i>
        </p>
        <p>
            There is no need to specify any information about the output dataset structure within the output data
            description, as this will be done in the next step.
        </p>
        <img 
            src={platform_job_wizard_step2} 
            alt='Second step of the synthetic dataset generation job creation wizard on the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            In the <b>output data structure</b> step we need to specify the columns (or fields) that our dataset 
            will have. In our case, all we really need is two fields: a <i>text</i> field and a <i>sentiment
            label</i> field. We will also add a third field, <i>id</i>, to uniquely identify each record in the
            dataset. Let's go ahead and plug that information into the wizard.
        </p>
        <img 
            src={platform_job_wizard_step3} 
            alt='Third step of the synthetic dataset generation job creation wizard on the Tanaos platform'
            className='img-with-shadow'
        />
        <h3>Step 4: Number of datapoints</h3>
        <p>
            As in the other test cases, we will generate a small dataset to keep the example simple. We will generate
            1.000 datapoints for this dataset.
        </p>
        <h3>Step 5: Job refinement chat</h3>
        <p>
            Once the job has been created, the <b>job refinement chat</b> will pop up. We can use this chat to provide
            the data generation model with additional information that will help it generate the dataset according to
            our requirements. After each message, the model will respond with a few <b>sample datapoints</b> which 
            reflect its current understanding of the job requirements.
        </p>
        <img 
            src={job_refinement_chat_1a}
            alt='Job refinement chat of the synthetic dataset generation job on the Tanaos platform'
            className='img-with-shadow'
        />
        <img 
            src={job_refinement_chat_1b}
            alt='Job refinement chat of the synthetic dataset generation job on the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            The sample dataset already look quite good! In a real-world scenario, we would probably end the conversation
            here and let the model generate the dataset. However, for the sake of this example, let's ask the model to
            slightly modify the dataset to only include positive reviews.
        </p>
        <img 
            src={job_refinement_chat_2}
            alt='Job refinement chat of the synthetic dataset generation job on the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            Again, the sample datapoints look just right, but let's go one step further and ask the model to only
            generate reviews that have to do with movies.
        </p>
        <img 
            src={job_refinement_chat_3} 
            alt='Job refinement chat of the synthetic dataset generation job on the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            That's perfect. No need to make any further modifications. We can now click on the <b>End chat and 
            start job</b> button to let the model generate the dataset.
        </p>
        <h3>The output data</h3>
        <p>
            After an amount of time that depends on the number of datapoints you requested (in our case just a few
            seconds since we only requested 1.000 datapoints), the dataset will be generated and you will be able to
            download it by clicking on the download icon in the <b>Actions</b> column of the job list. Let's take
            a look at what the output dataset looks like.
        </p>
        <img 
            src={platform_output_dataset}
            alt='Output dataset of the synthetic text classification dataset generation job on the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            The dataset looks great! It contains 1.000 records, each with a unique id, a text review, and a sentiment
            label. During the job refinement chat, we requested that the output dataset only contain positive movie 
            reviews. As you can see, the model has done a great job at generating the dataset according to our
            requirements.
        </p>
    </div>
};

export default CaseStudyGenerateSyntheticTextClassificationData;