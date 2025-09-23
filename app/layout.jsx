import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.scss';
import { Poppins } from 'next/font/google';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body className={poppins.className}>
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