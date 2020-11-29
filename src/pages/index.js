import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MapSection from '../components/MapSection';
import StatisticsSection from '../components/StatisticsSection';
import DocumentationSection from '../components/DocumentationSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <AboutSection/>
            <MapSection/>
            <StatisticsSection/>
            <DocumentationSection/>
            <Footer/>
        </>
    );
};

export default Home
