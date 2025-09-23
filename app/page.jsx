import Head from 'next/head';

import { Hero } from './sections/Hero'
import { GetStarted } from './sections/GetStarted';
import { WhyTanaos } from './sections/WhyTanaos';
import { AvailableModels } from './sections/AvailableModels';
import { Config } from '../config';


export const HomePage = () => {

    return <>
        <Head>
            <title>Tanaos | Task-specific LLMs for NLP and Text Classification</title>
            <meta name='description' content='Train task-specific LLMs without training data, for offline NLP and Text Classification tasks, such as Guardrail Models and Intent Classification.' />
            <meta name='robots' content='index, follow' />
            <meta property='og:title' content='Tanaos | Task-specific LLMs for NLP and Text Classification' />
            <meta property='og:description' content='Train task-specific LLMs without training data, for offline NLP and Text Classification tasks, such as Guardrail Models and Intent Classification.' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={Config.WEBSITE_BASE_URL} />
            <link rel='canonical' href={Config.WEBSITE_BASE_URL} />
        </Head>
        <div className='homepage-layout'>
            <Hero />
            <WhyTanaos />
            <AvailableModels />
            <GetStarted />
        </div>
    </>
};

export default HomePage;