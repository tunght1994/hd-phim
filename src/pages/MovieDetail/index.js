import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// css
import './index.scss'

// help
import {host, API_KEY} from '../../helper/host'
import VideoList from '../../components/VideoList'


const MovieDetail = () => {

    const [data , setData] = useState([])
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
        </div>
    </div>
  )
}

export default MovieDetail