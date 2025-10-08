import React from 'react';
import icon1 from './icon-downloads.png';
import icon2 from './icon-ratings.png';
import { Link } from 'react-router';

const Sweet = ({singleSweet}) => {
    const {companyName, downloads, id, image, ratingAvg, title} = singleSweet;


    return (
        <div>
            <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 shadow-sm border border-amber-100 w-full">
                
                <figure className='p-3 bg-pink-50'>
                    <img className='h-[166px] p-2' src={image} alt="Shoes" />
                </figure>

                <div className="card-body">

                    <div className='flex'>
                        <h2 className="card-title">{title} </h2>
                        <p className='mt-1'> : {companyName}</p>
                    </div>
                    <div className='border-t-1 border-dashed'></div>

                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">
                            <img className='w-4' src={icon1} alt="" />
                            {downloads}
                        </div>
                        <div className="badge badge-outline">
                            <img className='w-4' src={icon2} alt="" />
                            {ratingAvg}
                        </div>
                    </div>

                </div>
            </div>
            </Link>
        </div>
    );
};

export default Sweet;