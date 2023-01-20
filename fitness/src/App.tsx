import Navbar from '@/scenes/Navbar';
import Home from '@/scenes/Home';
import Benefits from '@/scenes/Benefits/index';

import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import OurClasses from '@/scenes/OurClasses';
import Contacts from '@/scenes/Contacts/index';
import Footer from '@/scenes/Footer/index';

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); 
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }else {
                setIsTopOfPage(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <div className="App bg-gray-20">
            <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <Contacts setSelectedPage={setSelectedPage} />
            <Footer />
        </div>
    )
}

export default App
