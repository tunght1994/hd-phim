import React, { useState } from 'react'
// css
import './index.scss'



// Slider
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import MovieList from '../MovieList';

const SectionSlider = () => {

    const [typeID, setTypeID] = useState({type: "", typeID: ""})

   

    return (
        <div className='section-slider'>
            <div className="section-slider-item">
                <div className="section-slider-item-header">
                    <h2>Trending</h2>
                    <Link to="/movie">
                        <button className="small">View more</button>
                    </Link>
                </div>
                <MovieList typeID={typeID} />
            </div>
            <div className="section-slider-item">
                <div className="section-slider-item-header">
                    <h2>Top Rated</h2>
                    <Link to="/movie">
                        <button className="small">View more</button>
                    </Link>
                </div>
                <MovieList typeID={typeID}/>
            </div>
            <div className="section-slider-item">
                <div className="section-slider-item-header">
                    <h2>Popular</h2>
                    <Link to="/movie">
                        <button className="small">View more</button>
                    </Link>
                </div>
                <MovieList typeID={typeID} />
            </div>
        </div>
    )

}

export default SectionSlider