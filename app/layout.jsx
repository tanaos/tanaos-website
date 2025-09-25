import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.scss';
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <div className='app'>
                    <Navbar />
                    <main className='content'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
            <GoogleAnalytics gaId='G-HRQ77GT2C8' />
        </html>
    );
}

export default RootLayout;