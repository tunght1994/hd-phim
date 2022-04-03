import React, { useEffect, useState } from 'react'

// help
import { host } from '../../helper/host'
import { API_KEY } from '../../helper/contant'
import checkImg from '../../helper/checkImg'

const MovieList = ({typeID, ...props}) => {
    console.log(typeID)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            if (typeID.type === "movie" && typeID.typeID === "trending") {
                const url = `${host}/${typeID.type}/${typeID.typeID}?api_key=${API_KEY}&language=en-US`
                const request = await fetch(url)
                const resp = await request.join()
                setData(resp)
            } 
            if(typeID.type === "tv" && typeID.typeID === "top_rated") {
                const url = `${host}/${typeID.type}/${typeID.typeID}?api_key=${API_KEY}&language=en-US`
                const request = await fetch(url)
                const resp = await request.join()
                console.log(resp)
                setData(resp)
            }
        }
        fetchData()
    }, [typeID.type, typeID.typeID])

  return (
    <div>{typeID.type === "movie" && typeID.typeID === "top_rated" }</div>
  )
}

export default MovieList