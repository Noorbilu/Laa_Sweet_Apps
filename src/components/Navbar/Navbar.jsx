import React from 'react';
import img from './logo.png'
import { HouseHeart, LayoutPanelLeft, MonitorDown } from 'lucide-react';
import { Link } from 'react-router';
import git from './Vector.png';

const Navbar = () => {
    const link = <>
        <Link to='/'><li><a><HouseHeart />Home</a></li></Link>
        <Link to='/more'><li><a><LayoutPanelLeft />Apps</a></li></Link>
        <Link to='/installed'><li><a><MonitorDown />Installation</a></li></Link>
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
                    <Link to='/'>
                        <div className=''>
                            <a className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">
                                <img className='w-10' src={img} alt="" />
                                Laa.I0
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/Noorbilu' className="btn bg-gradient-to-r from-purple-800 to-purple-600 text-white border-none">
                        <img src={git} alt="" />
                        Contribute
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;