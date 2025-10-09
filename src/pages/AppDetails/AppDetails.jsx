import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import error from './App-Error.png';
import download from './icon-downloads.png';
import rate from './icon-ratings.png';
import review from './icon-review.png';
import { Link } from 'react-router';
import { addToStoredDB, getStoredApp } from '../../Utility/addToDB';

const AppDetails = () => {

    const { id } = useParams();
    const appId = parseInt(id);

    const { data8 = [], data20 = [] } = useLoaderData();
    const allData = [...data8, ...data20];

    const singleApp = allData.find(app => app.id === appId);

    const [installed, setInstalled] = useState(false);

    useEffect(() => {

        const storedApps = getStoredApp().map(id => parseInt(id));
        setInstalled(storedApps.includes(appId));
    }, [appId]);


    const handleMarkAsInstalled = () => {
        const success = addToStoredDB(appId); 
        if (success) setInstalled(true);
    };

  
    if (!singleApp) {

        return (
            <div className='bg-amber-50 min-h-screen flex flex-col justify-center items-center text-center'>
                <img className='max-w-3/12 items-center' src={error} alt="" />
                <div className="text-center">
                    <h2 className="text-6xl font-bold text-purple-800 mb-2">OPPS!! APP NOT FOUND</h2>
                    <p className="text-gray-500 mb-5"> The App you are requesting is not found on our system. Please try another app.</p>
                    <Link to='/more'><button className="btn m-2 bg-gradient-to-r from-purple-800 to-gray-400 text-white border-none">Go Back</button></Link>
                </div>
            </div>
        );
    }

    const { image, title, companyName, description, reviews, size, downloads, ratingAvg } = singleApp;

    return (

        <div>
            <div className="flex flex-col md:flex-row sm:flex-row max-w-3xl mx-auto p-5">
                <div>
                    <img src={image} alt="" className="w-65 mx-auto rounded-xl mr-10 mb-2" />
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-3">{title} : <span className='text-gray-500'>{size}</span></h1>
                    <p className="text-gray-500 mb-2"> developed by: <span className='font-bold text-black'>{companyName}</span></p>

                    <div className='border-t-1 border-dashed mt-5 mb-5'></div>

                    <div>
                        <div className='flex flex-col md:flex-row sm:flex-row justify-center gap-10 pb-5'>
                        <div>
                            <img className='w-6' src={download} alt="" />
                            <p>Downloads</p>
                            <h1 className='text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div>
                            <img className='w-6' src={rate} alt="" />
                            <p>Average Ratings</p>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img className='w-7' src={review} alt="" />
                            <p>Total Reviews</p>
                            <h1 className='text-4xl font-bold'>{reviews}</h1>
                        </div>
                    </div>

                    {installed ? (
                        <button className="btn m-2 bg-gradient-to-r from-red-800 to-pink-600 text-white border-none">Installed </button>
                        ) : (
                        <button onClick={handleMarkAsInstalled} className="btn m-2 bg-gradient-to-r from-green-800 to-green-500 text-white border-none"> Install Now ({size}) </button>
                    )}
                </div>
            </div>
        </div>

        <div className='border-t-1 border-dashed mx-60 my-5'></div>

      
        <div className="max-w-3xl mx-auto my-5">
            <h2 className="text-xl font-bold mb-4">Ratings</h2>

            {singleApp.ratings.slice().reverse().map((rating) => {
                const maxCount = Math.max(...singleApp.ratings.map(r => r.count));
                const barWidth = (rating.count / maxCount) * 100;
                return (
                    <div key={rating.name} className="flex items-center mb-2">
                        <span className="w-12 text-sm text-gray-600">{rating.name}</span>
                        <div className="flex-1 bg-gray-200 h-4 mx-2 rounded-full overflow-hidden">
                            <div className="h-4 bg-yellow-400" style={{ width: `${barWidth}%` }}></div>
                        </div>
                    </div>
                );
            })}

            <div className="flex justify-between ml-12 mt-2 text-sm font-medium text-gray-600">
                {singleApp.ratings.slice().reverse().map((rating) => (
                    <span key={rating.name}>{rating.count}</span>
                ))}
            </div>
        </div>

        <div className='border-t-1 border-dashed mx-60 mt-15'></div>

      
        <div className='max-w-3xl mx-auto m-15'>
            <h1 className='font-bold text-xl mb-3'>Description</h1>
            <p>{description}</p>
        </div>
    </div>
  );
};

export default AppDetails;
