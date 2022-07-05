import React from 'react';
import { ThreeDots } from  'react-loader-spinner';

const Loading = () => {
    return (
        <div className='loading'>
            <ThreeDots color="#2d4059" height={75} width={75} />
            <p className='loading__text'>Loading...</p>
        </div>
    );
};

export default Loading;
