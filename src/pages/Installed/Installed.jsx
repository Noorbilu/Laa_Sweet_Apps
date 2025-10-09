import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utility/addToDB';
import download from './icon-downloads.png'
import rate from './icon-ratings.png'
import review from './icon-review.png'

const Installed = () => {
    const [installedList , setInstalledList] = useState([])

    const { data8 = [], data20 = [] } = useLoaderData();
    const allData = [...data8, ...data20];
    console.log(allData);

    useEffect(() => {

        const storedAppData = getStoredApp();
        const ConvertedStoredApps =storedAppData.map(id => parseInt(id))

        const myInstalledList = allData.filter(app => ConvertedStoredApps.includes(app.id));
        setInstalledList(myInstalledList);
    }, []); 



    const handleUninstall = (id) => {
        const updatedList = installedList.filter(app => app.id !== id);
        setInstalledList(updatedList);

    const storedApps = getStoredApp();
        const updatedStoredApps = storedApps.filter(appId => parseInt(appId) !== id);
        localStorage.setItem("installedList", JSON.stringify(updatedStoredApps));

        alert("App uninstalled successfully!");
    };



    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold text-center pt-6'>Your Installed Apps</h1>
                <p className='text-center text-gray-500 mb-5'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between'>
                    <p className='font-bold'>1 Apps Found</p>
                    <input type="text" className="input mb-1" placeholder="Which browser do you use" list="browsers" />
                        <datalist id="browsers">
                            <option value="QuickScan"></option>
                            <option value="PocketChef"></option>
                            <option value="BudgetBuddy"></option>
                            <option value="WeatherNow"></option>
                            <option value="DailyZen"></option>
                        </datalist>
                </div>
            </div>
            
                
            <div className="space-y-4">
                {installedList.map(app => (

                    <div key={app.id} className="flex justify-between items-center bg-white shadow-md rounded-lg p-4">
                        <div className="flex items-center space-x-4">
                            <img src={app.image} alt="" className="w-16 h-16 rounded-lg object-cover"/>
                            <div>
                                <h2 className="font-bold text-lg">{app.title} : <span className='text-gray-500 text-sm'>developed by- {app.companyName}</span></h2>
                                <div>
                                    <div className='flex flex-col md:flex-row sm:flex-row justify-center gap-10 pb-5'>
                                        <div>
                                            <img className='w-6' src={download} alt="" />
                                            <h1>{app.downloads}</h1>
                                        </div>
                                        <div>
                                            <img className='w-6' src={rate} alt="" />
                                            <h1>{app.ratingAvg}</h1>
                                        </div>
                                        <div>
                                            <img className='w-7' src={review} alt="" />
                                            <h1>{app.reviews}</h1>
                                        </div>
                                    </div>
                                                
                                </div>
                            </div>
                        </div>

                        <button onClick={() => handleUninstall(app.id)} className='btn m-2 bg-gradient-to-r from-red-800 to-pink-600 text-white border-none'> Uninstall </button>
                    
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Installed;