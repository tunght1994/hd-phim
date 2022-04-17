import React from "react";
import { Link } from "react-router-dom";
import checkImg from "../../helper/checkImg";
import checkStr from "../../helper/checkStr";
import convertDateTime from "../../helper/convertTime";
import "./index.scss";

const MovieItem = ({ item }) => {
  return (
    <Link to={`/movie/detail/${item.id}`} className="movie-list-item">
      <img
        src={checkImg(item.poster_path || item.backdrop_path)}
        alt=""
        className="movie-list-item-img"
      />
      <div className="movie-list-item-info">
        <p>{checkStr(item.title || item.original_title || item.name || item.original_name, 18)}</p>
        <div className="movie-list-item-info-text">
          <p>{convertDateTime(item.release_date, "YYYY")}</p>
          <p>
            {item.vote_average}
            <i class="bx bxs-star icon"></i>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
