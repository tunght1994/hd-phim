import React, { useState, useEffect } from "react";
import "./index.scss";
import { API_KEY, host } from "../../helper/host";
import MovieItem from "../../components/MovieItem";
import Button from '../../components/Button'

const Movie = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const url = `${host}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
      try {
        const request = await fetch(url);
        const resp = await request.json();
        const { total_pages, results } = resp;
        setTotalPage(total_pages);
        setData([...data, ...results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);


  return (
    <div className="movie-show">
      <div className="container">
        <div className="movie-show-item">
          {data?.map((item, index) => (
            <MovieItem item={item} />
          ))}
        </div>
        {page < totalPage ? (
          <div className="movie-show-btn">
            <Button
              onClick={() => setPage(page + 1)}
              text="Load More"
              className="movie-more-btn"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Movie;
