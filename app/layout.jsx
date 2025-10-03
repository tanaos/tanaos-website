import '../styles/globals.scss';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


const poppins = Poppins({ 
    weight: ['400', '500', '600'], subsets: ['latin'], display: 'swap', preload: true
});

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
                {/* Google Analytics - loads after page is interactive. Only load it 
                in production, so that dev metrics aren't tracked. */}
                { process.env.NODE_ENV === 'production' &&
                <Script id='ga-init' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-HRQ77GT2C8');
                    `}
                </Script>}
            </body>
        </html>
    );
}

export default RootLayout;