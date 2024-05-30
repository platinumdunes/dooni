import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import logo_full from '../assets/logo_full.png'

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('home');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const handleMenuClick1 = (menu) => {
        setSelectedMenu(menu);
    };

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="sticky top-0 z-50">
            <nav className="h-60px bg-white border-green-200 dark:bg-custom-color-2 dark:border-bg-custom-color-2" style={{ background: '#5c94b4' }}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a onClick={() => handleMenuClick1('home')} style={{ listStyleType: 'none' }} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Link className="absolute flex mt-10px self-center text-2xl font-semibold whitespace-nowrap dark:text-white w-200px h-100px" to='/'><img src={logo_full}></img></Link>
                    </a>
                    <button 
                        onClick={toggleMenu} 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                        aria-controls="navbar-multi-level" 
                        aria-expanded={isExpanded}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`${isExpanded ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-red-100 rounded-lg bg-red-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-custom-color-2 md:dark:bg-custom-color-2 dark:border-bg-custom-color-2" style={{ background: '#5c94b4' }}>
                            <li onClick={() => handleMenuClick1('health')} >
                                <Link className={`block py-2 px-3 text-gray-900 rounded md:hover:underline md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:underline dark:hover:text-white md:dark:hover:bg-transparent ${selectedMenu === 'health' && 'text-green-700'}`} to='/health-conditions'>HEALTH CONDITIONS</Link>
                            </li>
                            <li onClick={() => handleMenuClick1('self_diagnosis')}>
                                <Link className={`block py-2 px-3 text-gray-900 rounded md:hover:underline md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:underline dark:hover:text-white md:dark:hover:bg-transparent ${selectedMenu === 'self_diagnosis' && 'text-green-700'}`} to='/self-diagnosis'>SELF DIAGNOSIS</Link>
                            </li>
                            <li onClick={() => handleMenuClick1('hospital_s')}>
                                <Link className={`block py-2 px-3 text-gray-900 rounded md:hover:underline md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:underline dark:hover:text-white md:dark:hover:bg-transparent ${selectedMenu === 'hospital_s' && 'text-green-700'}`} to='/hospitals'>HOSPITALS</Link>
                            </li>
                            <li onClick={() => handleMenuClick1('about_us')}>
                                <Link className={`block py-2 px-3 text-gray-900 rounded md:hover:underline md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:underline dark:hover:text-white md:dark:hover:bg-transparent ${selectedMenu === 'about_us' && 'text-green-700'}`} to='/about-us'>ABOUT US</Link>
                            </li>
                            <li onClick={() => handleMenuClick1('f_a_q')}>
                                <Link className={`block py-2 px-3 text-gray-900 rounded md:hover:underline md:border-0 md:hover:underline md:p-0 dark:text-white md:dark:hover:underline dark:hover:underline dark:hover:text-white md:dark:hover:bg-transparent ${selectedMenu === 'f_a_q' && 'text-green-700'}`} to='/faqs'>FAQ</Link>
                            </li> 
                            <li>
                                <button
                                    data-ripple-light="true"
                                    data-popover-target="menu"
                                    className="select-none text-center align-middle text-white transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDropdownToggle();
                                    }}
                                >
                                    <GoPerson size={20}/>
                                </button>
                                {isDropdownOpen && (
                                    <ul
                                        role="menu"
                                        data-popover="menu"
                                        data-popover-placement="bottom"
                                        className="absolute z-10 min-w-[150px] left-[92%] -translate-x-1/2 -top-[10px] translate-y-1/2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                                    >
                                        <li
                                            role="menuitem"
                                            className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                            onClick={() => handleMenuClick('login')}
                                        >
                                            <Link to='/login'>LOGIN</Link>
                                        </li>
                                        <li
                                            role="menuitem"
                                            className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                            onClick={() => handleMenuClick('view_account')}
                                        >
                                            <Link to='/view-account'>VIEW ACCOUNT</Link>
                                        </li>
                                        <li
                                            role="menuitem"
                                            className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                            onClick={() => handleMenuClick('logout')}
                                        >
                                            LOGOUT
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
