import { Hero } from './sections/Hero'
import { GetStarted } from './sections/GetStarted';
import { WhyTanaos } from './sections/WhyTanaos';
import { AvailableModels } from './sections/AvailableModels';


export const HomePage = () => {

    return <div className='homepage-layout'>
        <Hero />
        <WhyTanaos />
        <AvailableModels />
        <GetStarted />
    </div>
};

export default HomePage;