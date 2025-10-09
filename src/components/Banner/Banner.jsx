import React from 'react';
import img1 from './hero.png'
import google from './Group.png'
import play from './images.png'


const Banner = () => {
    return (
        <div className='w-full'>
            <div className="bg-base-200 pt-10">
                <div className="flex-col max-w-6xl mx-auto px-4 text-center">
                        
                        <div>
                            <h1 className="text-5xl font-bold">We Build</h1>
                            <h1 className="text-5xl font-bold"><span className='bg-gradient-to-r from-purple-800 to-purple-500 bg-clip-text text-transparent'>Productive</span> Apps</h1>
                            <p className="py-6 text-gray-500">At Laa.I0, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                            <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjrhoWenJWQAxU-zDgGHbk9AHIQPAgI" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-outline btn-accent m-2">
                                    <img className='w-5' src={play} alt="" />
                                    Google
                                </button>
                            </a>
                            <a href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-outline btn-secondary m-2">
                                    <img className='w-5' src={google} alt="" />
                                    App Store
                                </button>
                            </a>   
                        </div>
                        
                        <div className='mt-4'>
                            <img src={img1} className="rounded-lg w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto"/>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;