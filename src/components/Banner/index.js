import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
// help
import { host, API_KEY } from '../../helper/host'
import checkImg from '../../helper/checkImg'

// Slider
import { Autoplay , Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

const Banner = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const url = `${host}/trending/all/week?api_key=${API_KEY}`
    const fetchData = async () => {
      const request = await fetch(url)
      const resp = await request.json()
      const { results } = resp
      setData(results)
    }
    fetchData()
  }, [])

  return (
    <div className='banner'>
      <Swiper
        modules={[Autoplay, Navigation]}
        grabCursor={true}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        loop
        // autoplay={{ delay: 2000 }}
      >
        {
            data.map((item, index) => (
              <SwiperSlide  key={index}>
                <Link to="/" className='banner-item'>
                  <img src={checkImg(item.poster_path || item.backdrop_path)} alt="" className='banner-item-img' />
                </Link>
              </SwiperSlide>
            ))
        }


      </Swiper>

    </div>
  )
}

export default Banner