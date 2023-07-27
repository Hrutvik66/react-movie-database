import React, { Component } from 'react';

// Component
import Thumb from '../Thumb';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// No image
import NO_IMAGE from '../../images/no_image.jpg';
// Style
import { Text, Wrapper, Content } from './MovieInfo.style';

const MovieInfo = ({movie}) => {
    return <Wrapper backdrop = {movie.backdrop_path}>
        <Content>
            <Thumb
                image={movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NO_IMAGE
                }
            clickable = {false}
            />
            <Text>
            <h1>{movie.title}</h1>
            <h3>PLOT</h3>
            <p>{movie.overview}</p>
                <div className='rating-directors'>
                    <div>
                        <h3>RATING</h3>
                        <div className='score'>{movie.vote_average}</div>
                    </div>
                    <div className='director'>
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map((director) => (
                            <p key={director.credit_id}>{ director.name}</p>
                        ))}
                    </div>
            </div>
        </Text>
        </Content>
    </Wrapper>
}

export default MovieInfo;