import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Movie from '../pages/Movie';
import MovieDetail from '../pages/MovieDetail';
import ViewMore from '../pages/ViewMore';
import TvShows from '../pages/TV'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/detail/:id' element={<MovieDetail />} />
        <Route path='/:type/:typeID' element={<ViewMore />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/tv-shows' element={<TvShows />} />
    </Routes>
  )
}

export default Router