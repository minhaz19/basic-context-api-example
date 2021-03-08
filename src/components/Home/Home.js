import React, { useContext, useState } from 'react';
import { SetCategory } from '../../App';

const Home = () => {
    const [count , setCount] = useContext(SetCategory);
    return (
        <div>
            <h2>This is for home: {count}</h2>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
};

export default Home;