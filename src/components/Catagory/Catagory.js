import React from 'react';
import CategotyDetails from '../CategoryDetails/CategotyDetails';

const Catagory = () => {
    const categoryStyle ={
        border: '1px solid red'
    }
    return (
        <div style={categoryStyle}>
            <h1>This is for category</h1>
            <CategotyDetails></CategotyDetails>
        </div>
    );
};

export default Catagory;