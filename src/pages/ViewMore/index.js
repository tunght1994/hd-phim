import React, { useEffect, useState } from 'react'
import './index.scss'
import { useParams } from 'react-router'
import { API_KEY, host } from '../../helper/host'
import MovieItem from '../../components/MovieItem'
import Button from '../../components/Button'


const ViewMore = () => {
    const { type, typeID } = useParams()
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState()

    useEffect(() => {
        const url = typeID === "trending" ? `${host}/${typeID}/${type}/week?api_key=${API_KEY}&page=${page}`
            : `${host}/${type}/${typeID}?api_key=${API_KEY}&page=${page}`
        const fetchData = async () => {
            const request = await fetch(url)
            const resp = await request.json()
            const { results, total_pages } = resp
            setTotalPage(total_pages)
            setData([...data, ...results])
        }
        fetchData()
    }, [page])

    const loadMore = () => {
        setPage(page + 1)
    }

    return (
        <div className='view-more'>
            <div className="container">
                <div className="view-more-list">
                    {
                        data?.map((item, index) => (
                            <MovieItem item={item} />
                        ))
                    }
                </div>
                {
                    page < totalPage ? (
                        <div className='view-btn'>
                            <Button onClick={loadMore} text="Load More" className="view-more-btn" /> 
                        </div>
                    ) : <></>
                }

            </div>
        </div>
    )
}

export default ViewMore