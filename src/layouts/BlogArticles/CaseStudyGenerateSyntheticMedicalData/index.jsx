import synthetic_medical_data from '../../../assets/synthetic_medical_data.png';
import job_wizard_step_1 from './job_wizard_step_1.png';
import job_wizard_step_2 from './job_wizard_step_2.png';
import job_wizard_step_3 from './job_wizard_step_3.png';
import job_refinement_chat_1 from './job_refinement_chat_1.png';
import job_refinement_chat_2 from './job_refinement_chat_2.png';
import job_refinement_chat_3 from './job_refinement_chat_3.png';
import output_data from './output_data.png';
import { Config } from '../../../config';


export const CaseStudyGenerateSyntheticMedicalData = () => {
    return <div>
        <img 
            src={synthetic_medical_data} 
            alt='Generate Synthetic medical data with the Tanaos platform' 
        />
        <h1>Case study: generate synthetic medical data that protects patient privacy</h1>
        <p>
            Healthcare represents one of the <b>largest use cases</b> for synthetic data. Due to the need to protect patient
            privacy and confidentiality, the healthcare industry is often constrained by strict privacy regulations 
            and compliance requirements. This makes it difficult to share and analyze real patient data, which can
            hinder research and innovation. Synthetic data can help overcome these challenges by providing ways
            to <b>generate realistic and representative datasets</b> that do not contain any personally identifiable 
            information (PII) or sensitive health information.
        </p>
        <p>
            In this case study, we will explore how the Tanaos platform can be used to generate synthetic medical
            data to train AI models, validate algorithms, develop or test software and conduct research. We will
            assume you already have an understanding of how the Tanaos platform works. If that is not the case, we 
            suggest you check out the <a 
                href='/blog/case-study-generate-synthetic-financial-transaction-data'
                target='_blank' rel='noopener'
            >first case study of this series</a>.
        </p>
        <h3>The objective</h3>
        <p>
            Since "medical data" is a broad term that encompasses a wide range of information and applications, we
            will focus on a specific use case: a dataset which contains information about patients, their medical 
            history and the mealthcare services they received. The findings of this case study can easily be applied
            to other use cases in the healthcare domain.
        </p>
        <h3>Step 1: create a new job, choose Title and Subtitle</h3>
        <p>
            From the <a href={`${Config.PLATFORM_BASE_URL}/jobs`} target='_blank' rel='noopener'>dashboard of the 
            Tanaos platform</a>, we will click on the "Create new job" button. This will open the first step of the job
            creation wizard, where we will enter the Title and Subtitle of our job. For this case study, we will use
            <i>Test Medical Dataset</i> for the Title and <i>A sample job to generate a medical dataset</i> for the 
            Subtitle.
        </p>
        <img 
            src={job_wizard_step_1} 
            alt='Step 1 of the job creation wizard of the Tanaos platform'
            className='img-with-shadow'
        />
        <h3>Step 2: output data description</h3>
        <p>
            In steps 2 we will describe the output data we want to generate. Let's use the following prompt:
        </p>
        <p>
            <i>"Generate a medical dataset which will contain information on patients, their medical history and the 
            healthcare services they were provided"</i>
        </p>
        <p>
            Although you may feel tempted to specify, within the description, the fields (or columns) that you want 
            to include in the datasets, you should refrain from doing so at this stage, as this information <b>will be 
            discarded</b> by the data generation model. The model is <b>instructed to only consider information on the dataset
            structure if they are provided through step number 3</b>, which is the next one we will go through. Step
            number 2 is only meant to provide a high-level description of the dataset we want to generate and, if you
            deem it necessary, on the way it will be used.
        </p>
        <img 
            src={job_wizard_step_2} 
            alt='Step 2 of the job creation wizard of the Tanaos platform'
            className='img-with-shadow'
        />
        <h1>Step 3: output data structure</h1>
        <p>
            Now is the time to provide details on the exact fields we want in our dataset. We will request the model
            to generate a dataset with the following fields:
        </p>
        <ul>
            <li>
                <b>ID (integer number):</b> a unique identifier for each record in the dataset.
            </li>
            <li>
                <b>Name (text):</b> the name of the patient.
            </li>
            <li>
                <b>Age (integer number):</b> the age of the patient.
            </li>
            <li>
                <b>Blood type (text):</b> the blood type of the patient.
            </li>
            <li>
                <b>Medical condition (text): </b> the condition that brought the patient to the hospital.
            </li>
            <li>
                <b>Medication (text)</b>: the medication prescribed to the patient.
            </li>
            <li>
                <b>Date of admission (text)</b>: the date the patient was admitted to the hospital.
            </li>
            <li>
                <b>Date of discharge (text)</b>: the date the patient was discharged from the hospital.
            </li>
        </ul>
        <img 
            src={job_wizard_step_3} 
            alt='Step 3 of the job creation wizard of the Tanaos platform'
            className='img-with-shadow'
        />
        <h3>Step 4: number of datapoints</h3>
        <p>
            Step number 4 of the job creation wizard is where we will specify the number of datapoints we want to 
            generate for this job. As we did in the other case studies, we will set the number of datapoints to 1000.
        </p>
        <h3>Step 5: job refinement chat</h3>
        <p>
            After we click on the "Submit" button, we will be redirected to the job refinement chat. This chat is used 
            to ensure that the data generation model <b>understands the job requirements</b> and is able to generate a 
            dataset that meets our expectations, <b>before the actual generation process</b> starts. After each message we send,
            the model will respond with a few sample datapoints which reflect its current understanding of the job 
            requirements. Once we are satisfied with the sample datapoints, we can click on the "End chat and start 
            job" to start the data generation process.
        </p>
        <img 
            src={job_refinement_chat_1} 
            alt='Job refinement chat of the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            By doing a quick internet research, we can find out that all blood types are not equally distributed
            in the population. O+ and A+ is several times more common than B+, O- and A-, which are in turn between
            two and three times more common than AB+, B- and AB-. We can ask the model to embed this information in the 
            dataset it generated. To keep things simple, let's provide the model with the following prompt:
        </p>
        <p>
            <i>
                Make blood types O+ and A+ 5 times more frequent than B+, O- and A- and 10 times more frequent than
                AB+, B- and AB-.
            </i>
        </p>
        <img 
            src={job_refinement_chat_2} 
            alt='Job refinement chat of the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            Another thing that we notice is that the model is generating dates of discharge that are always exactly
            5 days after the date of admission. This is of course not realistic. Let's go ahead and provide the model
            with the following prompt:
        </p>
        <p>
            <i>
                The date of discharge should be a number of days after the date of admission. The number of days 
                should depend on the treatment received by the patient.
            </i>
        </p>
        <img 
            src={job_refinement_chat_3} 
            alt='Job refinement chat of the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            Now this is more like it. We can now click on the "End chat and start job" button to start the data 
            generation process.
        </p>
        <h3>The output data</h3>
        <p>
            After some time, the data generation process will be completed and we will be able to download the 
            generated dataset. The first 10 datapoints of the dataset are shown below:
        </p>
        <img 
            src={output_data} 
            alt='Output synthetic medical data of the Tanaos platform'
            className='img-with-shadow'
        />
        <p>
            As we can see, the model has generated the data according to our specifications. The blood type 
            distribution looks good and the dates of discharge are not always 5 days after the date of admission.
            The dataset is ready to be used for training AI models, validating algorithms, developing or testing
            software and conducting research.
        </p>
    </div>
};

export default CaseStudyGenerateSyntheticMedicalData;