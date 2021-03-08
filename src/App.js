import React, { createContext, useContext, useState } from 'react';
import './App.css';
import Catagory from './components/Catagory/Catagory';
import Home from './components/Home/Home';

export const SetCategory = createContext();

function App() {
  const [count , setCount] = useState(0);
  return (
    <SetCategory.Provider value={[count , setCount]}>
      <Home></Home>
      <Catagory></Catagory>
    </SetCategory.Provider>
  );
}

export default App;
