import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// css
import './index.scss'

// helper
import { API_KEY, host } from '../../helper/host'
import checkStr from '../../helper/checkStr'
import convertDateTime from '../../helper/convertTime'
import checkImg from '../../helper/checkImg';

import Button from '../Button';

// Slider
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

const TvShows = ({ typeID }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const url = typeID === "trending" ? `${host}/trending/tv/week?api_key=${API_KEY}` : `${host}/tv/${typeID}?api_key=${API_KEY}&language=en-US`
        const fetchData = async () => {
            const request = await fetch(url)
            const resp = await request.json()
            const { results } = resp
            setData(results)
        }
        fetchData()
    }, [typeID])

    return (
        <div className='tv-show'>
            <div className="tv-show-header">
                <p>
                    TV {typeID}
                </p>
                <Link to={`/tv/${typeID}`}>
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
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/tv/detail/${item.id}`} className='tv-show-item'>
                            <img src={checkImg(item.poster_path || item.backdrop_path)} alt="" className='tv-show-item-img' />
                            <div className="tv-show-item-info">
                                <p>{checkStr((item.title || item.original_title || item.name || item.original_name), 20)}</p>
                                <div className='tv-show-item-info-text'>
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

export default TvShows