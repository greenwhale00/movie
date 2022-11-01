import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Main = ({ limit }) => {
    //데이터 가져오기
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);
    const MS = useRef(null);
    const movieData = async () => {
        const movie = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}`);

        console.log(movie.data.data.movies);

        getMovie(movie.data.data.movies);
        setLoad(false)
    }

    useEffect(() => {
        movieData()
    },)
    return (
        <div className='Main'>
            {
                load
                    ? <div>로딩중...</div>
                    :
                    <Slider
                        slidesToShow={5}
                        arrows={false}
                        ref={MS}
                        centerMode={true}
                        centerPadding={100}
                    >
                        {
                            movie.map(it => {
                                return (
                                    <div key={it.id} className="itm">
                                        <figure>
                                            <img src={it.large_cover_image} alt={it.title} />
                                        </figure>

                                        <div className="case">
                                            <div className='title'>{it.title_long}</div>
                                            <div className='des'>{it.description_full}</div>

                                            <ul className='genre'>
                                                {
                                                    it.genres.map((g, i) => <li key={i}>{g}</li>)
                                                }
                                            </ul>
                                        </div>

                                        <button className='btn'> + </button>
                                    </div>
                                )
                            })
                        }
                    </Slider>
            }

            <div className='arrows'>
                <i className='xi-arrow-left' onClick={() => MS.current.slickPrev()}></i>
                <i className='xi-arrow-right' onClick={() => MS.current.slickNext()} ></i>
            </div>

        </div >
    )
}

export default Main