import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
  title: 'Jean-Luc Peloquin',
  description: 'Data Scientist and Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Banner />
        <About />
        <Experience />
        <Contact />
        {children}
        <Footer />
      </body>
    </html>
  );
}