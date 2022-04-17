import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// css
import './index.scss'

// helper
import { API_KEY, host } from '../../helper/host'

// component
import MovieItem from '../MovieItem'
import Button from '../Button';

// Slider
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

const TvList = ({ typeID }) => {

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
        <div className='tv-list'>
            <div className="tv-list-header">
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
                        <MovieItem item={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default TvList