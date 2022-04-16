import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';
import ViewMore from '../pages/ViewMore';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/detail/:id' element={<MovieDetail />} />
        <Route path='/:type/:typeID' element={<ViewMore />} />
    </Routes>
  )
}

export default Router