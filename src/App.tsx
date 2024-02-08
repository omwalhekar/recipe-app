// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import './App.scss';
import RecipeListing from './pages/RecipeListing';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results/:searchQuery' element={<RecipeListing />} />
        <Route path='/recipe/:recipeId/:searchQuery?' element={<Recipe />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
