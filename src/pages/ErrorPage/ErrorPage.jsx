import React from 'react';
import pic from './asset/221587-P16MQB-374.jpg';

const ErrorPage = () => {
    return (
        <div className='bg-amber-50 min-h-screen flex flex-col justify-center items-center text-center'>
            <img className='max-w-3/12 items-center' src={pic} alt="" />
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-blue-700'>Oops, page not found!</h1>
                <p className='mt-5 text-blue-300'>The page you are looking for is not available.</p>
            </div>
        </div>
    );
};

export default ErrorPage;