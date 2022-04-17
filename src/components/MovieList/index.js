import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// css
import './index.scss'

// component
import Button from '../Button';
import MovieItem from '../MovieItem'

// help
import { host, API_KEY } from '../../helper/host'

// Slider
import { Autoplay , Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

const MovieList = ({ typeID }) => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        const url = typeID === "trending" ? `${host}/trending/movie/week?api_key=${API_KEY}` : `${host}/movie/${typeID}?api_key=${API_KEY}&language=en-US`
        const fetchData = async () => {
            const request = await fetch(url)
            const resp = await request.json()
            const { results } = resp
            setData(results)
        }
        fetchData()
    }, [typeID])

    return (
        <div className='movie-list'>
            <div className="movie-list-header">
                <p>
                    Movie {typeID}
                </p>
                <Link to={`/movie/${typeID}`}>
                    <Button className="small" text="View More" />
                </Link>
            </div>
            <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={6}
                navigation
                loop
            // autoplay={{ delay: 2000 }}
            >
                {data?.map((item,index) => (
                    <SwiperSlide key={index}>
                        <MovieItem item={item}/>
                    </SwiperSlide>
                ))}    
            </Swiper>
        </div>
    )
}

export default MovieList