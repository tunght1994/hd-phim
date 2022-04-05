import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/detail/:id' element={<MovieDetail />} />
    </Routes>
  )
}

export default Router