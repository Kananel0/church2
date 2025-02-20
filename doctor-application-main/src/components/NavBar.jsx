import React, { useEffect, useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigation } from '../constants';
import { Link } from 'react-router-dom';
import img from "../assets/logo.png"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-lg' : ''}`}>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* LOGO */}
                    <Link to="/" className="flex items-center text-2xl font-bold text-blue-600">
  <img className="mr-2" width={32} height={32} src={img} alt="Healthcare Clinic" />
  The King's Palace
</Link>


                    {/* NAVIGATION LINKS */}
                    <div className='hidden space-x-6 md:flex'>
                        {navigation.map((item) => (
                            <Link 
                                key={item.id} 
                                to={item.url} 
                                className='text-gray-800 transition hover:text-blue-600'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE MENU TOGGLE */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="flex flex-col mt-4 space-y-4 md:hidden">
                        {navigation.map((item) => (
                            <Link 
                                key={item.id} 
                                to={item.url} 
                                className='text-gray-800 transition hover:text-blue-600' 
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
