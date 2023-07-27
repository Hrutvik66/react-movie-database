import React from 'react';

//Parameter movieId
import { useParams } from 'react-router-dom';
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//No Image
import NO_IMAGE from '../images/no_image.jpg';
// Components
// import Grid from './Grid';
import Spinner from './Spinner';
import Navigator from './Navigator';
import MovieInfo from './MovieInfo';
import Actor from './Actors';
import ScrollingGrid from './ScrollingGrid';
import ViewAll from './ViewAll';

//Hooks
import { useMovieFetch } from '../Hooks/useMovieFetch';

const Movie = () => {
    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong....</div>;

    return <div>
        <Navigator movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <ScrollingGrid header = 'Actors' >
            {movie.actors.length > 7 ? (
                movie.actors.slice(0, 7).map((actor) =>
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NO_IMAGE
                        }
                    />
                )
            )
                : (
                    movie.actors.map((actor) =>
                        <Actor
                            key={actor.credit_id}
                            name={actor.name}
                            character={actor.character}
                            imageUrl={
                                actor.profile_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                    : NO_IMAGE
                            }
                        />
                    )
                )
            }<ViewAll/>
        </ScrollingGrid>
    </div>
}

export default Movie;