import React from 'react';

const Installed = () => {
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
        </div>
    );
};

export default Installed;