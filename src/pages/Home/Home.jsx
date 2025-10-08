import React from 'react';
import Banner from '../../components/Banner/Banner';
import States from '../../components/States/States';
import Sweets from '../Sweets/Sweets';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data8 = useLoaderData()
    console.log(data8);
    return (
        <div>
            <Banner></Banner>
            <States></States>
            <Sweets data8={data8}></Sweets>
            
        </div>
    );
};

export default Home;