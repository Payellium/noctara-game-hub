import React from 'react';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <PopularGames data={data}></PopularGames>
        </div>
    );
};

export default Home;