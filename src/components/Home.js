import React from 'react';
import Layout from './Layout';
import Search from './Search';
import Trending from './Trending';

const Home = () => {
    return (
        <>
            <Layout>
                <main className='main'>
                    <Trending />
                    <Search />
                </main>
            </Layout>
        </>
    );
}
 
export default Home;