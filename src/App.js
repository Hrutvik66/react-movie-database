import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home.js';
import Movie from '../src/components/Movie.js';
import NotFound from '../src/components/NotFound.js';
// styles
import {GlobalStyle} from './GlobalStyles';



const App = () => {
  return <Router>
     <GlobalStyle/>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
      </Router>
}

export default App;
