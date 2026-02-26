import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import PopularGames from '../components/PopularGames';

const HomeLayout = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className=''>
            <header className='relative w-full h-screen'>
                <Navbar></Navbar>
                <Banner></Banner>
                <PopularGames data={data}></PopularGames>
            </header>
        </div>
    );
};

export default HomeLayout;