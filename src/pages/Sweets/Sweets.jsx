import React, { Suspense } from 'react';
import Sweet from '../Sweet/Sweet';
import { Link } from 'react-router';


const Sweets = ({data8}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className='text-3xl font-bold text-center pt-6'>Trending Apps</h1>
            <p className='text-center text-gray-500 mb-5'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {data8.map((singleSweet) => (
                    <Sweet key={singleSweet.id} singleSweet={singleSweet}></Sweet>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <Link to='/more'><button className="btn btn-soft btn-error text-center">Show All</button></Link>
            </div>
        </div>
        
    );
};

export default Sweets;