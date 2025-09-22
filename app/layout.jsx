import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.scss';
import { Poppins } from 'next/font/google';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { HeadlineBar } from '../components/HeadlineBar';
import { Config } from '../config';

const poppins = Poppins({ weight: ['100', '300', '400', '700', '800', '900'], subsets: ['latin'] });


export const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <HeadlineBar>
                    <span>
                        Do you like what we do? ⭐ Give us <a href={Config.ARTIFEX_GITHUB_URL} rel='noreferrer' target='_blank'>
                            a star on GitHub
                        </a> or <a href={Config.TWITTER_URL} rel='noreferrer' target='_blank'>follow us on Twitter</a>
                    </span>
                </HeadlineBar>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;