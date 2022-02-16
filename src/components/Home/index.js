import React, { useEffect, useState } from 'react';
import { getPlaylists } from '@services/api/music-api.js'

const Home = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getPlaylists()
        .then((response) => {
            setData(response.data);
          })
        .then(console.log(setData, 'data'))
        .catch((error) => {
            console.log(error)
        })
    }, [])
    
    return (
        null
    )
}

export default Home