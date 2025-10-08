import { useLoaderData } from 'react-router';
import Sweet from '../Sweet/Sweet';

const More = () => {
    const data20 = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className='text-3xl font-bold text-center pt-6'>Our All Applications</h1>
            <p className='text-center text-gray-500 mb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between'>
                <p className='font-bold'>(20) Apps Found</p>
                <label className="input mb-1">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {data20.map(singleSweet => (
                    <Sweet key={singleSweet.id} singleSweet={singleSweet} />
                ))}
            </div>
        </div>
    );
};

export default More;
