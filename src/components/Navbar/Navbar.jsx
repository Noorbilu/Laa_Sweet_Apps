import React from 'react';
import img from './logo-D9NHcesw 1.png'
import { Github } from 'lucide-react';

const Navbar = () => {
    const link = <>
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
        <li><a>Installation</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
               <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {link}
                        </ul>
                    </div>
                    <div className='flex'>
                        <img src={img} alt="" />
                        <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">Laa.I0</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-purple-800 to-purple-600 text-white border-none"> <Github />Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;