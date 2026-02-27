import React from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import { useLoaderData } from 'react-router';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <PopularGames data={data}></PopularGames>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;