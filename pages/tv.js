import React from 'react'
import { useState,useEffect } from 'react';
import useGenres from '../src/Movies/Hooks/useGenre';
import Genres from "../src/Movies/Genres";
import CustomPagination from '../src/Movies/Pagination/CustomPagination';
import axios from 'axios';
import SingleContent from '../src/Movies/SingleContent/SingleContent';

const tv = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL=useGenres(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/tv?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    // console.log(data)
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page,genreforURL]);
  return (
    <div className='pageTitle'>
    TV Series

    <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />

    <div className='uppercase flex justify-center'>
    <div className='flex flex-wrap justify-around'>
      {content && content.map((c)=>    <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />)}
    </div>
      <CustomPagination setPage={setPage} />
    </div>
  
</div>
  )
}

export default tv