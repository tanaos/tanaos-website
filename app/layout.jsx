import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles/globals.scss'


export const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
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