import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Article from './components/Article';
import RecycleCalculator from './components/RecycleCalculator';
import WaistTracker from './components/WaistTracker';
import Location from './components/Location';

const App = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Article />
      <RecycleCalculator />
      <WaistTracker />
      <Location />
    </div>
  );
}

export default App;