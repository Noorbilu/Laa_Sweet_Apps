import React from 'react';

const States = () => {
    return (
        <div className='w-full text-center items-center bg-gradient-to-r from-blue-900 to-purple-400'>
            <h1 className='p-15 text-3xl font-bold text-white'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-center text-center gap-10 pb-15'>
                <div className=''>
                    <p className='text-gray-300'>Total Downloads</p>
                    <h1 className='p-3 text-4xl font-bold text-white'>29.6M</h1>
                    <p className='text-gray-300'>21% more than last month</p>
                </div>
                <div className=''>
                    <p className='text-gray-300'>Total Reviews</p>
                    <h1 className='p-3 text-4xl font-bold text-white'>906K</h1>
                    <p className='text-gray-300'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-gray-300'>Active Apps</p>
                    <h1 className='p-3 text-4xl font-bold text-white'>132+</h1>
                    <p className='text-gray-300'>31 more will Launch</p>
                </div>

            </div>
        </div>
    );
};

export default States;