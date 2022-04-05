import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { API_KEY, host } from '../../helper/host'
import './index.scss'

const VideoList = () => {
    const [data , setData] = useState([])
    console.log(data)
    const {id} = useParams()

    useEffect(() => {
        const url = `${host}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        const fetchData = async () => {
            const request = await fetch(url)
            const resp = await request.json()
            const { results} = resp
            setData(results.slice(0,1))
        }
        fetchData()
    },[])
  return (
    <div>
         {
                data.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
    </div>
  )
}

const Video = ({item}) => {

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList