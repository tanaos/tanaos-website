import synthetic_data_improve_ml_training from '../../../assets/synthetic_data_to_improve_ml_training.png';


export const HowSyntheticDataCanImproveMachineLearningModelTraining = () => {

    return <div>
        <h1>A powerful ally for Machine Learning, in the age of data-hungry models</h1>
        <img 
            src={synthetic_data_improve_ml_training} 
            alt='Synthetic data to improve Machine Learning model training' 
        />
        <p>
            In the rapidly evolving field of machine learning, the quality and quantity of training data are 
            paramount to the success of models. Acquiring comprehensive and well-labeled datasets, however, can be 
            challenging due to <b>privacy concerns, data scarcity and the high costs</b> associated with data collection 
            and annotation. Furthermore, real-world datasets often contain <b>biases</b> and <b>noise</b> that can 
            adversely affect model performance. To address these challenges, researchers and practitioners are 
            increasingly turning to synthetic data. Synthetic data refers to artificially generated data that mimics the 
            statistical properties of real-world data while allowing for <b>greater control</b> over its characteristics.
        </p>
        <h3>The rise of Synthetic Data in Machine Learning</h3>
        <p>
            Recent advancements in data generation techniques have led to a surge in the use of synthetic data 
            across industries. With the rise of deep learning and generative models, which are increasingle replacing
            more traditional methods for data generation such as rule-based systems and simple statistical methods,
            researchers and businesses can now create <b>high-quality, privacy-preserving, unbiased</b> datasets that 
            closely <b>resemble real-world data</b> and which are <b>tailored to their specific needs</b>. This 
            capability has unlocked new possibilities, from fine-tuning LLMs at a fraction of the cost, to 
            improving AI-driven medical diagnostics, to training self-driving cars in complex environments.
        </p>
        <h3>The State of the Art</h3>
        <p>
            Recent studies across different domains have shown that incorporating synthetic data in the training 
            process can lead to <b>significant improvements in model performance</b>.
        </p>
        <p>
            Ba <i>et al</i> (2024) demonstrated that <b>adding diverse synthetic examples</b> into the validation process 
            of a NLP model yielded a substantial gain in performance: up to a <b>34% increase in accuracy</b> on real 
            test data across four NLP tasks, along with a <b>33% reduction in calibration error</b>. Crucially, these 
            improvements were achieved without compromising accuracy on genuine data, indicating better generalization 
            to the real-world test sets <a href='#reference-1'>[1]</a>.
        </p>
        <p>
            Other researchers have shown that synthetic data can increase the model's ability to <b>generalize 
            to unseen data</b>. In their recent paper, Hosseini <i>et al.</i> (2024) generated a large, diverse set of 
            685,000 synthetic Natural Language Inference examples covering domains and sentence lengths not present in 
            existing datasets. Models trained on this synthetic data achieved <b>state-of-the-art generalization</b> to 
            completely new downstream test settings. On the TRUE benchmark (a test of transfer to unseen tasks), a 
            T5-small model trained with the synthetic dataset saw about a <b>7% accuracy improvement</b> on average over 
            any real-data training baseline. Notably, even when real in-domain data was available, augmenting it with
            the synthetic data improved performance on test sets, demonstrating that synthetic training examples can 
            bolster a model's robustness to out-of-distribution inputs <a href='#reference-2'>[2]</a>.
        </p>
        <p>
            In some cases, models trained on a <b>combination of real and synthetic data</b> have <b>outperformed those trained 
            solely on real data</b>. In one of ther studies, Kim <i>at al.</i> (2024) leveraged LLMs to generate realistic 
            synthetic tabular samples in a balanced way (via carefully crafted prompts that ensure all classes are 
            well-represented). Their approach, called EPIC, was evaluated on multiple real-world tabular datasets and 
            the results showed that models augmented with EPIC's synthetic data achieved state-of-the-art classification 
            performance, <b>outperforming models trained on real data</b> alone. Moreover, the synthetic augmentation 
            significantly <b>improved training efficiency</b> and classifier accuracy on minority classes. This 
            demonstrates that even for structured tabular domains, synthetic data generation can ameliorate data 
            scarcity or imbalance, leading to better generalization across all classes <a href='#reference-3'>[3]</a>.
        </p>
        <p>
            Researchers have gone as far as to show that, in certain scenarios, models trained <b>solely on synthetic 
            data performed better</b> than those trained on real data, particularly when the real data was limited, 
            imbalanced or noisy. Scientists from MIT, the MIT-IBM Watson AI Lab and Boston University constructed a 
            synthetic dataset comprising 150,000 video clips depicting a wide range of human actions. Machine-learning models 
            trained on this synthetic data were tested against six real-world video datasets. The findings revealed 
            that models trained on synthetic data <b>performed better than those trained on real data</b>, particularly 
            when the videos had fewer background objects <a href='#reference-4'>[4]</a>.
        </p>
        <h3>Main benefits of Synthetic Data</h3>
        <p>
            Some of the concrete benefits provided by synthetic data include:
        </p>
        <p>
            <b>Data Augmentation and Diversity:</b> Synthetic data can expand existing datasets, introducing variations 
            that help models generalize better. By simulating a wide range of scenarios, synthetic data ensures that 
            models are exposed to diverse examples, reducing overfitting and improving performance on unseen data.
        </p>
        <p>
            <b>Privacy Preservation:</b> In domains like healthcare and finance, data privacy regulations restrict 
            access to sensitive information. Synthetic data can replicate the statistical characteristics of real 
            data without compromising individual privacy, enabling researchers and developers to work with data that 
            abides by privacy standards.
        </p>
        <p>
            <b>Bias Reduction:</b> Real-world datasets typically contain inherent biases due to underrepresentation of 
            certain groups or scenarios. Synthetic data generation techniques can create balanced datasets that 
            mitigate these biases, promoting fairness and equity in ML models.
        </p>
        <p>
            <b>Cost and Time Efficiency:</b> Collecting and annotating real-world data is often resource-intensive. 
            Generating synthetic data can be more cost-effective and less time-consuming, accelerating the development 
            and deployment of ML solutions.
        </p>
        <p>
            <b>Handling Rare Events:</b> Certain events or conditions may be rare in real-world data, making it 
            difficult for models to learn from them. Synthetic data can simulate these rare scenarios, ensuring that 
            models are trained to recognize and respond appropriately to infrequent but critical situations.
        </p>
        <h3>Future directions for Synthetic Data</h3>
        <p>
            Looking ahead, synthetic data is poised to play an <b>even greater role</b> in machine learning, with 
            promising developments in generative AI, privacy-preserving data sharing, and automated software testing. As 
            generative models become more sophisticated, they are expected to produce <b>hyper-realistic synthetic 
            datasets</b> tailored to specific training needs, especially in sensitive domains like healthcare and 
            finance, where data privacy is of supreme importance. The use of synthetic data to <b>simulate edge-case 
            scenarios</b> (rare but critical events primarily occurring in potentially hazardous environments, such as
            autonomous driving or robotics) is also gaining traction, allowing models to train on situations that are 
            nearly impossible to collect at scale. As regulatory frameworks around data privacy tighten, synthetic 
            data's ability to mimic statistical patterns without exposing real user information may become 
            essential for <b>GDPR and HIPAA compliance</b>, positioning it as a key enabler of ethical and scalable AI 
            development.
        </p>
        <h3>Conclusion</h3>
        <p>
            As machine learning continues to evolve and becomes <b>ever-more hungry for information</b>, so does the 
            need for large, diverse, and high-quality training datasets. Synthetic data has emerged not just as a 
            convenient workaround for data scarcity, but as a powerful catalyst for improving model performance, 
            fairness, and generalization, often rivaling or even <b>surpassing traditional datasets</b>. From enabling 
            better generalization across domains in NLP to enhancing accuracy in computer vision and 
            reinforcement learning under low-data constraints, the evidence is clear: synthetic data is no longer 
            a backup plan—it's a <b>strategic asset</b>.
        </p>
        <p>
            As tools and techniques for generating synthetic data continue to mature, we can expect it to play an even 
            bigger role in democratizing AI development, reducing bias, and accelerating innovation. In short, 
            synthetic data isn't just the future of machine learning—it's very much part of its present.
        </p>
        <hr />
        <h3>References:</h3>
        <p id='reference-1'>
            [1]: <span 
                className='link'
                onClick={() => window.open('https://aclanthology.org/2024.emnlp-main.955/', '_blank')}
            >
                Fill In The Gaps: Model Calibration and Generalization with Synthetic Data (Ba et al., EMNLP 2024)
            </span>
        </p>
        <p id='reference-2'>
            [2]: <span 
                className='link'
                onClick={() => window.open('https://aclanthology.org/2024.acl-long.120/', '_blank')}
            >
                A synthetic data approach for domain generalization of NLI models (Hosseini et al., ACL 2024)
            </span>
        </p>
        <p id='reference-3'>
            [3]: <span 
                className='link'
                onClick={() => window.open('https://proceedings.neurips.cc/paper_files/paper/2024/hash/37f2f382b1e1f1e887d610e7ea047086-Abstract-Conference.html', '_blank')}
            >
                Effective Prompting for Imbalanced-Class Data Synthesis in Tabular Data Classification via Large Language Models (Kim et al., NeurIPS 2024)
            </span>
        </p>
        <p id='reference-4'>
            [4]: <span 
                className='link'
                onClick={() => window.open('https://news.mit.edu/2022/synthetic-data-ai-improvements-1103', '_blank')}
            >
                https://news.mit.edu/2022/synthetic-data-ai-improvements-1103
            </span>
        </p>
    </div>
};

export default HowSyntheticDataCanImproveMachineLearningModelTraining;