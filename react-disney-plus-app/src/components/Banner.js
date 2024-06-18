import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/request'

const Banner = () => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get(requests.fetchNowPlaying)
        const movieId =
            response.data.results[
                Math.floor(Math.random() * requests.data.results.length)
            ].id;

        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" },
        })
        setMovie(movieDetail)
    }

    return (
        <div>Banners</div>
    )
}

export default Banner