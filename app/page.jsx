import { Hero } from './sections/Hero'
// import { GetStarted } from './sections/GetStarted';
import { WhyTanaos } from './sections/WhyTanaos';
import { AvailableModels } from './sections/AvailableModels';
import { Statistics } from './sections/Statistics';
import { TryItOut } from './sections/TryItOut';
import { RecentBlogPosts } from './sections/RecentBlogPosts';
import { Config } from '../config';


const title = 'Developing custom Small Language Models for all your needs | Tanaos'
const description = 'At Tanaos we develop task-specific Small Language Models for any text processing task and language. Tell us what you need to do and we will create a model that does it.'
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
        <TryItOut />
        <WhyTanaos />
        <AvailableModels />
        <RecentBlogPosts />
        {/* <GetStarted /> */}
    </div>;
};

export default HomePage;