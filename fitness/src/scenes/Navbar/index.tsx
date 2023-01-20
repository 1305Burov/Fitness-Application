import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { SelectedPage } from '@/shared/types';
import { AnimatePresence, motion } from 'framer-motion';

import Link from './Link';
import Logo from '@/assets/Logo.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const flexBetween = "flex items-center justify-between";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const [IsMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

    return (
        <nav className={`${navbarBackground + flexBetween} fixed top-0 z-30 w-full py-6 transition duration-300`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-1/2 gap-16`}>
                    <img src={Logo} alt="logo" />
                </div>

                {isAboveMediumScreens ? 
                    <div className={`${flexBetween} w-full`}>
                        <ul className={`${flexBetween} gap-8 text-sm`}>
                            <li><Link page={"Home"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                            <li><Link page={"Benefits"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                            <li><Link page={"Our Classes"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                            <li><Link page={"Contacts"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                        </ul>
                        <div className={`${flexBetween} gap-8`}>
                            <a href="#">Sign In</a>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>
                    :
                    <button
                        className='rounded-full bg-secondary-500 p-2'
                        onClick={() => setIsMenuOpen(p => !p)}
                    >
                        <Bars3Icon
                            className='h-6 w-6 text-white'
                        />
                    </button>
                }
            </div>

            <AnimatePresence>
                {!isAboveMediumScreens && IsMenuOpen && (
                    <motion.div 
                        initial={{ x: 400 }}
                        animate={{ x: 0 }}
                        exit={{ x: 400 }}
                        className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'
                    >
                        <div className='flex justify-end py-8 px-11'>
                            <button onClick={() => setIsMenuOpen(p => !p)}>
                                <XMarkIcon className='h-6 w-6 text-gray-400' />
                            </button>
                        </div>
                        <ul className={`ml=[33%] flex flex-col gap-10 text-2xl p-8`}>
                            <li><Link page={"Home"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                            <li><Link page={"Benefits"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                            <li><Link page={"Our Classes"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                            <li><Link page={"Contacts"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} /></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar;