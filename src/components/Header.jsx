import React, {useEffect, useRef, useState} from 'react'
import logo from '../assets/logo.png'

export function Header() {
    useEffect(() => {
        let lastScrollTop = 0;
        const header = document.getElementById('header');
        const headerHeight = header?.offsetHeight; // Высота header

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                // Прокрутка вниз
                header.classList.add('header-hidden');
            } else {
                // Прокрутка вверх
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop;
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header id="header" className="absolute w-full py-4 px-44 backdrop-blur-xl border-b-2">
            <nav className='flex justify-between items-center'>
                <img href={"/"} src={logo} alt="logo" className={"cursor-pointer"}/>
                <ul className={`flex gap-8 font-semibold text-lg text-black`}>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#main">Main</a></li>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#flights">Flights</a></li>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#track">Search Tracking</a></li>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#service">Service</a></li>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#about">About Us</a></li>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#contact">Contact</a></li>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#facebook">FB</a></li>
                    <li className='cursor-pointer hover:text-blue-300 transition-all duration-300 ease-in-out'><a
                        href="#google">GE</a></li>
                </ul>
            </nav>
        </header>
    )
}