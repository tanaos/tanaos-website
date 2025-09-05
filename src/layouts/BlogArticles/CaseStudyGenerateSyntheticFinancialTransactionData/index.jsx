import financial_synthetic_data from '../../../assets/financial_synthetic_data.png';
import platform_dashboard from '../../../assets/platform_dashboard.png';
import platform_job_wizard_step1 from './platform_job_wizard_step1.png';
import platform_job_wizard_step2 from './platform_job_wizard_step2.png';
import platform_job_wizard_step3 from './platform_job_wizard_step3.png';
import platform_job_refinement_chat_first_message from './platform_job_refinement_chat_first_message.png';
import platform_job_refinement_chat_second_message from './platform_job_refinement_chat_second_message.png';
import platform_job_refinement_chat_third_message from './platform_job_refinement_chat_third_message.png';
import platform_job_complete from './platform_job_complete.png';
import platform_output_dataset from './platform_output_dataset.png';
import { Config } from '../../../config';


export const CaseStudyGenerateSyntheticFinancialData = () => {
    return <div>
        <h1>Case study: generate synthetic financial data with the Tanaos platform</h1>
        <img 
            src={financial_synthetic_data} 
            alt='Generate a synthetic financial transaction dataset with Tanaos' 
        />
        <p>
            In this case study, we will find out how to generate large amounts of synthetic financial data 
            with the Tanaos platform. First off, head 
            to <a href={Config.PLATFORM_BASE_URL} target='_blank' rel='noreferrer'>platform.tanaos.com</a> and sign up for a free
            account, if you don't have one already. Once you are logged in, you will be taken to the dashboard.
        </p>
        <img src={platform_dashboard} alt='Dashboard of the Tanaos Platform' className='img-with-shadow' />
        <h3>Job Creation Wizard Step 1</h3>
        <p>
            Once you are on the dashboard, hit the <b>Create a new job</b> button, which will open the job creation wizard. The job
            creation wizard is a 4-step guide that will help you create a new job. The first step is to select a <b>title</b> and,
            optionally, a <b>subtitle</b> for your job. The title is a short description of the job, while the subtitle can be used to
            provide additional context. The title and subtitle will be displayed next to the other job details on the dashboard 
            and have a purely informative purpose, as they are not used in the data generation process. In our case,
            we will enter <i>Financial data test job</i> for Title, and <i>A sample job to generate financial data</i> for
            Subtitle. Once you have entered a title and subtitle, click on the <b>Next</b> button to proceed to the next step.
        </p>
        <img 
            src={platform_job_wizard_step1} 
            alt='Step 1 of the Tanaos Platform synthetic data generation job creation wizard' 
            className='img-with-shadow' 
        />
        <h3>Job Creation Wizard Step 2</h3>
        <p>
            Step number 2 of the job creation wizard is the <b>Output data description step</b>. Contrary to the title and subtitle
            from step number one, which are not passed down to the generation model, the output data description is a <b>crucial 
            part of the job creation process</b> and has a large impact on the generated data. In the output data description
            step, you should try to provide <b>as much context as possible</b> on the data you want to generate. This information will
            be used by the generation model to decide how to generate the data. The description should include information such as 
            the domain of the data, the purpose it will be used for and any other relevant information that could help the model 
            generate the data you need. Information on the fields (or "columns") of the output dataset is not needed at this stage, 
            as it will provided in the next one. In our case, we will provide the following description:
        </p>
        <p>
            <i>
                "Generate a bank statement-like financial transaction dataset, used by the account holder to track their
                transactions and expenses."
            </i>
        </p>
        <p>
            Once you have entered the output data description, click on the <b>Next</b> button to proceed to the next step.
        </p>
        <img 
            src={platform_job_wizard_step2} 
            alt='Step 2 of the Tanaos Platform synthetic data generation job creation wizard'
            className='img-with-shadow'
        />
        <h3>Job Creation Wizard Step 3</h3>
        <p>
            Step number 3 of the job creation wizard is the <b>Output data structure</b> step. In this step, you will provide
            information on the <b>structure of the output dataset</b>. This includes the names of the columns (or "fields") that you 
            want to have in the dataset, as well as their types. The column name should be short and descriptive of the data it will 
            contain. Our model is typically smart enough to <b>infer the kind of data</b> you want <b>from the column name</b>, without
            needing to describe it explicitly. As we will see later, you will still be able to provide additional information on
            the data at a later stage. The column type should be one of the following:
        </p>
        <ul>
            <li>
                <b>Text:</b> A column that contains text data, such as a description, a name, a date, a location or an alphanumeric
                ID.
            </li>
            <li>
                <b>Integer Number:</b> A column that contains integer numbers, such as an amount, a quantity or a numeric ID.
            </li>
            <li>
                <b>Decimal Number:</b> A column that contains decimal numbers (or "floats" in IT terminology), such as a price, a 
                rate or a weight.                
            </li>
        </ul>
        <p>
            In our case, we will go ahead and define the following columns:
        </p>
        <ul>
            <li>
                <b>id (integer number): </b> A unique, numeric identifier for each transaction.
            </li>
            <li>
                <b>amount (decimal number): </b> The amount of the transaction, expressed as a decimal number.
            </li>
            <li>
                <b>description (text): </b> A short description of the transaction.
            </li>
            <li>
                <b>date (text): </b> The date of the transaction, expressed as a string.
            </li>
            <li>
                <b>category (text): </b> The category of the transaction, such as "groceries", "entertainment" or "utilities".
            </li>
            <li>
                <b>merchant (text): </b> The merchant or vendor associated with the transaction.
            </li>
        </ul>
        <p>
            As usual, once you are done defining the columns, click on the <b>Next</b> button to proceed to the next (and last) 
            step.
        </p>
        <img 
            src={platform_job_wizard_step3} 
            alt='Step 3 of the Tanaos Platform synthetic data generation job creation wizard' 
            className='img-with-shadow'
        />
        <h3>Job Creation Wizard Step 4</h3>
        <p>
            The final step of the job creation wizard is the <b>Number of datapoints</b> step. As the name suggests, in this step
            all you have to do is define the number of datapoints you want to generate. The number of datapoints is the number of 
            rows in the output dataset. The maximum number of datapoints you are allowed to generate on a single job depends on 
            your subscription plan. For more information on the available plans and the maximum number of datapoints per job associated
            with each, please refer to the <a href={Config.WEBSITE_BASE_URL + '/pricing'} target='_blank' rel='noreferrer'>pricing page</a>.
            Since this is a test, we will go ahead and generate just <b>1.000 datapoints</b>. Once you have entered the
            number of datapoints, click on the <b>Submit</b> button to create the job.
        </p>
        <h3>Job Refinement Chat</h3>
        <p>
            After you have triggered the job, you will be taken to the job refinement chat. The job refinement chat is a chat-like
            interface that allows you to <b>interact with the model</b>, provide additional information on the data you want to 
            generate and in so doing <b>ensure that the output data is satisfactory</b> for you. After each message you send, the 
            model will respond with two pieces of information:
        </p>
        <ul>
            <li>
                <b>Sample datapoints:</b> A few sample datapoints that the model has generated based on the information you have
                provided up until that point, which reflects the model's current understanding of the job requirements. 
                The sample datapoints will help you understand whether the model is on the right track and assess the 
                quality and relevance of the data, before it is actually generated.
            </li>
            <li>
                <b>Question:</b> A question that the model is asking you, in order to gather more information on the data you want
                to generate. 
            </li>
        </ul>
        <p>
            In much the same way as all modern chatbots, our model will keep asking you questions indefinitely and will 
            never terminate the conversation or pronounce itself "satisfied" with the amount of information it has. Each further 
            message you send will prompt the model to <b>modify its understanding of the data you want to generate</b> and generate 
            new sample datapoints. Once you feel that the sample datapoints are satisfactory and that the model has a good 
            understanding of the data you want to generate, you can trigger the data generation by clicking on 
            the <b>End chat and start job</b> button, and clicking on the <b>Yes, start the job</b> button in the confirmation
            dialog that will appear.
        </p>
        <p>
            Let's take a look at how the chat will play out in our case. The first message displayed in the chat will actually be
            the job description you provided in the second step of the job creation wizard. The model will then ask us to provide
            more information on the data we want to generate.
        </p>
        <img 
            src={platform_job_refinement_chat_first_message} 
            alt='Tanaos Platform - synthetic data generation job refinement chat'
            className='img-with-shadow'
        />
        <p>
            The sample data already looks quite good, but we can do even better. First off, those merchant names don't look very
            realistic. Let's ask the model to ensure that they do, while also asking it not to use any real-world merchant names
            in order to comply with privacy regulations or potential internal policies. We can do this by sending the following
            message:
        </p>
        <p>
            <i>"The 'merchant' column should contain made-up but realistic merchant names"</i>
        </p>
        <p>
            Let's take a look at the sample datapoints the model has generated after this message.
        </p>
        <img 
            src={platform_job_refinement_chat_second_message} 
            alt='Tanaos Platform - synthetic data generation job refinement chat'
            className='img-with-shadow'
        />
        <p>
            The merchant names now look much better, don't they? We could now go on and ask the model to modify the "date" column
            to include not only the day, month and year of the transaction, but also the time. Let's see what the model comes up with.
        </p>
        <img 
            src={platform_job_refinement_chat_third_message}
            alt='Tanaos Platform - synthetic data generation job refinement chat'
        />
        <p>
            That looks just about right. We could go on and ask the model to make sure all transaction amounts are less than 50, or
            that the time be expressed in 12-hour format instead of 24-hour format, but for the sake of this example we will stop 
            here. Since we are now satisfied with the sample datapoints and the model's understanding of the data we want to 
            generate, we will now click on the <b>End chat and start job</b> button, and then on the <b>Yes, start the job</b> button
            in the confirmation dialog that will appear. The model will now start generating the data, and a new entry will appear
            in the list of jobs on the dashboard.
        </p>
        <h3>Output data</h3>
        <p>
            The job status will initially have a <b>In Progress</b> status, which means that the model is currently generating the
            data. After a few seconds (or minutes, depending on the number of datapoints you requested), the status will change
            to <b>Completed</b>, meaning that the data has been generated and is now available for download. You can download the
            generated data by clicking on the download icon under the <b>Actions</b> column.
        </p>
        <img 
            src={platform_job_complete}
            alt='Tanaos Platform - synthetic data generation job complete'
            className='img-with-shadow'
        />
        <p>
            The output dataset will be a .gz file containing a number of files that the dataset has been split into for efficiency.
            Let's take a look at the first few lines of the first file in the dataset.
        </p>
        <img complete
            src={platform_output_dataset} 
            alt='Tanaos Platform - synthetic data generation job output dataset'
            className='img-with-shadow'
        />
        <p>
            Aaand that's exactly what we wanted! 🎉
        </p>
        <p>
            We have successfully generated a synthetic financial transaction dataset with the Tanaos platform. This dataset can 
            now be used for a wide variety of purposes, such as training machine learning models, testing software applications 
            or conducting research.
        </p>
        <p>
            Ready to generate your own dataset? Head 
            to <a href={Config.PLATFORM_BASE_URL} target='_blank' rel='noreferrer'>platform.tanaos.com</a> and sign up for a free
            account. If you would like to learn more about our platform, check
            out <a href={`${Config.WEBSITE_BASE_URL}/blog`} target='_blank' rel='noreferrer'>our blog</a> or <a href={Config.WEBSITE_BASE_URL} target='_blank' rel='noreferrer'>our website</a>.
        </p>
    </div>
};

export default CaseStudyGenerateSyntheticFinancialData;