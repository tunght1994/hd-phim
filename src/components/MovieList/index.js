import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import checkStr from '../../helper/checkStr'
import convertDateTime from '../../helper/convertTime'

// css
import './index.scss'

// help
import { host, API_KEY } from '../../helper/host'
import checkImg from '../../helper/checkImg'

// Slider
import { Autoplay , Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

const MovieList = ({ typeID }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const url = `${host}/movie/${typeID}?api_key=${API_KEY}&language=en-US`
        const fetchData = async () => {
            const request = await fetch(url)
            const resp = await request.json()
            const { results } = resp
            setData(results)
        }
        fetchData()
    }, [])

    return (
        <div className='movie-list'>
        <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={8}
                navigation
                loop
            // autoplay={{ delay: 2000 }}
            >
                {typeID === "now_playing" && data.map((item,index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/movie/detail/${item.id}`} className='movie-list-item'>
                            <img src={checkImg(item.poster_path || item.backdrop_path)} alt="" className='movie-list-item-img'/>
                            <div className="movie-list-item-info">
                                <p>{checkStr(item.title || item.original_title, 20)}</p>
                                <div className='movie-list-item-info-text'> 
                                    <p>{convertDateTime(item.release_date, "YYYY")}</p>
                                    <p>{item.vote_average} 
                                    <i class='bx bxs-star icon'></i>
                                    </p>
                                </div>  
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}    
            </Swiper>
            <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={8}
                navigation
                loop
            // autoplay={{ delay: 2000 }}
            >
                {typeID === "top_rated" && data.map((item,index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/movie/detail/${item.id}`} className='movie-list-item'>
                            <img src={checkImg(item.poster_path || item.backdrop_path)} alt="" className='movie-list-item-img'/>
                            <div className="movie-list-item-info">
                                <p>{checkStr(item.title || item.original_title, 20)}</p>
                                <div className='movie-list-item-info-text'> 
                                    <p>{convertDateTime(item.release_date, "YYYY")}</p>
                                    <p>{item.vote_average} 
                                    <i class='bx bxs-star icon'></i>
                                    </p>
                                </div>  
                            </div>
                        </Link>                        
                    </SwiperSlide>
                ))}    
            </Swiper>
            <Swiper
                modules={[Autoplay, Navigation]}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={8}
                navigation
                loop
                
            // autoplay={{ delay: 2000 }}
            >
                {typeID === "popular" && data.map((item,index) => (
                    <SwiperSlide key={index}>
                      <Link to={`/movie/detail/${item.id}`} className='movie-list-item'>
                            <img src={checkImg(item.poster_path || item.backdrop_path)} alt="" className='movie-list-item-img'/>
                            <div className="movie-list-item-info">
                                <p>{checkStr(item.title || item.original_title, 20)}</p>
                                <div className='movie-list-item-info-text'> 
                                    <p>{convertDateTime(item.release_date, "YYYY")}</p>
                                    <p>{item.vote_average} 
                                    <i class='bx bxs-star icon'></i>
                                    </p>
                                </div>  
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}    
            </Swiper>

        </div>
    )
}

export default MovieList