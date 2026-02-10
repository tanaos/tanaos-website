import { Hero } from './sections/Hero'
import { GetStarted } from './sections/GetStarted';
import { WhyTanaos } from './sections/WhyTanaos';
import { AvailableModels } from './sections/AvailableModels';
import { Statistics } from './sections/Statistics';
import { Config } from '../config';


const title = 'Low-latency Small Language Model API for real-time applications | Tanaos'
const description = 'Get under 100ms inference latency with various Small Language Models such as Guardrail, Text Anonymization and NER. All in a single, easy-to-use API.'
const applicationName = 'Tanaos Website'
const url = Config.WEBSITE_BASE_URL

export const metadata = {
    title: title,
    description: description,
    keywords: [],
    alternates: {
        canonical: url,
    },
    applicationName: applicationName,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: url,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    twitter: {
        title: title,
        description: description,
    },
}

export const HomePage = () => {
    return <div className='homepage-layout'>
        <Hero />
        <Statistics />
        <WhyTanaos />
        <AvailableModels />
        {/* <GetStarted /> */}
    </div>;
};

export default HomePage;