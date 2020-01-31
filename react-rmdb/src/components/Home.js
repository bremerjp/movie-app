import React, { useState } from "react";

//import configs

import {
  API_URL,
  API_Key,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  API_KEY
} from "../config";

//import components

import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

//custom hook

import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();

  const [searchTerm, setSearchTerm] = useState("");

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
