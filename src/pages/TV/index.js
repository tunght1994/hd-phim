import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './index.scss'
import { API_KEY, host } from '../../helper/host'
import Button from '../../components/Button'
import MovieItem from '../../components/MovieItem'

const TvShows = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const url = `${host}/trending/tv/week?api_key=${API_KEY}&page=${page}`
      try {
        const request = await fetch(url)
        const resp = await request.json()
        const {total_pages, results} = resp
        setTotalPage(total_pages)
        setData([...data, ...results])
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[page])

  return (
    <div className='tv-show'>
      <div className="container">
        <div className="tv-show-item">
          {
            data?.map((item, index) => (
              <MovieItem item={item} index={index}/>
            ))
          }
        </div>
        {
          page < totalPage ? (
            <div className="tv-show-btn">
              <Button 
              text="Load More" 
              onClick={() => setPage(page + 1)}
              />
            </div>
          ) : <></>
        }
      </div>
    </div>
  )
}

export default TvShows