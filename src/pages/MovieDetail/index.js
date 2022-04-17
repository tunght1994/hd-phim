import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import checkImg from '../../helper/checkImg'

// css
import './index.scss'

// help
import {host, API_KEY} from '../../helper/host'
import VideoList from '../../components/VideoList'
import checkStr from '../../helper/checkStr'
import convertDateTime from '../../helper/convertTime'
import Button from '../../components/Button'


const MovieDetail = () => {

    const [data , setData] = useState([])
    const { genres ,production_countries, production_companies} = data
    const { id } = useParams()
    
    useEffect(() => {
        const url = `${host}/movie/${id}?api_key=${API_KEY}&language=en-US`
        const fetchData = async () => {
            const request = await fetch(url)
            const resp = await request.json()
            setData(resp)
        }
        fetchData()
    },[])

  return (
    <div className='movie-detail'>
        <div className="container">
            <VideoList />
            <div className="movie-detail-info">
                <div className="movie-detail-info-left">
                    <img src={checkImg(data.poster_path || data.backdrop_path)} alt="" />
                </div>
                <div className="movie-detail-info-right">
                    <p className='title'>{data.title || data.original_title}</p>
                    <p className='value'>{data.overview}</p>
                    <div className="movie-detail-info-right-info">
                        <div className="movie-detail-info-right-item">
                            <div className='box'>
                            Released: <span>{convertDateTime(data.release_date , "DD-MM-YYYY")}</span>
                            </div>
                            <div className='box'>
                                Genre: {genres?.map((item, index) => (
                                    <span className='value'>{item.name}</span>
                                ))}
                            </div>
                            <div className='box'>
                                Casts: <span></span>    
                            </div>
                        </div>
                        <div className="movie-detail-info-right-item">
                            <div className='box'>
                            Duration: <span className='value'>{data.runtime} min</span>
                            </div>
                            <div className='box'>
                            Country: {production_countries?.map((item, index) => (
                                    <span className='value'>{item.name}, </span>
                                ))}
                            </div>
                            <div className='box'>
                                Production: <span>
                                {production_companies?.map((item, index) => (
                                    <span className='value'>{item.name}, </span>
                                ))}    
                                </span>    
                            </div>
                        </div>
                    </div>
                    <Button 
                        text="Xem Phim"
                        className="button"
                    />
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail