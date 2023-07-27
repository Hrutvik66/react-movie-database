import React from 'react';

import { Link } from 'react-router-dom';

import { Image } from '../Thumb/Thumb.styles';

const Thumb = ({image,movieId,clickable}) => {
    return <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
            <Image
            src={image}
            alt = "movie-poster"
            />
            </Link>
        ) : (
            <Image
            src={image}
            alt = "movie-poster"
            />    
        )             
    }
    </div>
}

export default Thumb;