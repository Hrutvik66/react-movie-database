import React from 'react';

// components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './LoadingButton';


// Hooks
import useHomeFetch from '../Hooks/useHomeFetch';

// config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';

// no Image pic
import NO_IMAGE from '../images/no_image.jpg';

const Home = () => {
   const { state, loading, error,searchTerm,setSearchTerm,setIsLoadingMore } = useHomeFetch();

   return (
      <>
         {!searchTerm && state.results[0] ? (
            <HeroImage
               image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
               title={state.results[0].original_title}
               text={state.results[0].overview}
            />
         )
            : null
         }
         <SearchBar setSearchTerm={setSearchTerm }/>
         <Grid header={searchTerm ?`Searched Results for ${searchTerm}`:'Popular Movies'}>
            {state.results.map(movie => (
               <Thumb
                  key={movie.id}
                  clickable
                  image={
                     movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NO_IMAGE
                  }
                  movieId={movie.id}
               />
            ))}
         </Grid>
         {loading && <Spinner />}
         {state.page < state.total_pages && !loading && (
            <Button text='Load More' Change = {()=>setIsLoadingMore(true)} />
            )}
      </>
   );
};

export default Home;