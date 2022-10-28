import React from 'react';
import '../styles/components/Home.css';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => {
  return (
    <Products products={ initialState.products }/>
  );
};

export default Home;