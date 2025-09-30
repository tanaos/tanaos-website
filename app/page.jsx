import { Hero } from './sections/Hero'
import { GetStarted } from './sections/GetStarted';
import { WhyTanaos } from './sections/WhyTanaos';
import { AvailableModels } from './sections/AvailableModels';
import { RecentBlogPosts } from './sections/RecentBlogPosts';
import { Config } from '../config';


const title = 'Task-specific LLMs for NLP and Text Classification | Tanaos'
const description = 'Train task-specific LLMs without training data, for offline NLP and Text Classification tasks, such as Guardrail Models and Intent Classification.'
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
        <WhyTanaos />
        <AvailableModels />
        <GetStarted />
        <RecentBlogPosts />
    </div>;
};

export default HomePage;