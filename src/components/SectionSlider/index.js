import React, { useState } from 'react'

// css
import './index.scss'

// component
import MovieList from '../MovieList';
import TvShows from '../TvShows';
import Button from '../Button'
import { MOVIE, POPULAR, TOPRATED, TRENDING, TVSHOWS } from '../../contants/key';

const SectionSlider = () => {

    const [isShowMovie, setIsShowMovie] = useState(MOVIE)


    return (
        <div className='section-slider'>
            <div className="section-slider-item">
                <div className="section-slider-item-header">
                    <div className="section-slider-item-header-left">
                        <div className="show-movie">
                            <Button
                                text="MOVIE LIST"
                                className="movie"
                                onClick={() => setIsShowMovie(MOVIE)}
                            />
                            <Button
                                text="TV SHOWS"
                                className="movie"
                                onClick={() => setIsShowMovie(TVSHOWS)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {
                isShowMovie === MOVIE ? (
                    <>
                        <MovieList typeID={TRENDING} />
                        <MovieList typeID={TOPRATED} />
                        <MovieList typeID={POPULAR} />
                    </>

                ) : (
                    <>
                        <TvShows typeID={TRENDING} />
                        <TvShows typeID={TOPRATED} />
                        <TvShows typeID={POPULAR} />
                    </>
                )
            }
        </div>
    )

}

export default SectionSlider