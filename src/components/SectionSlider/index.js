import React from 'react'
import { Link } from 'react-router-dom';

// css
import './index.scss'

// component
import MovieList from '../MovieList';

const SectionSlider = () => {

    return (
        <div className='section-slider'>
            <div className="section-slider-item">
                <div className="section-slider-item-header">
                    <h2>Trending</h2>
                    <Link to="/movie">
                        <button className="small">View more</button>
                    </Link>
                </div>
                <MovieList typeID="trending"/>
            </div>
            <div className="section-slider-item">
                <div className="section-slider-item-header">
                    <h2>Top Rated</h2>
                    <Link to="/movie">
                        <button className="small">View more</button>
                    </Link>
                </div>
                <MovieList typeID="top_rated"/>
            </div>
            <div className="section-slider-item">
                <div className="section-slider-item-header">
                    <h2>Popular</h2>
                    <Link to="/movie">
                        <button className="small">View more</button>
                    </Link>
                </div>
                <MovieList typeID="popular" />
            </div>
        </div>
    )

}

export default SectionSlider