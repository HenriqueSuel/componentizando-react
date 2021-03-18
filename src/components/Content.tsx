import { useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { api } from '../services/api';
import '../styles/content.scss';
import IMovieProps from '../interface/IMovie'
import IGenreResponseProps from '../interface/IGenreResponse'

interface Props {
  selectedGenreId: number
}

export function Content({ selectedGenreId }: Props) {

  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>({} as IGenreResponseProps);



  useEffect(() => {
    if (selectedGenreId !== 0) {
      api.get<IMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
        setMovies(response.data);
      });

      api.get<IGenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
        setSelectedGenre(response.data);
      })
    }

  }, [selectedGenreId]);


  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie, index) => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} key={index} />
          ))}
        </div>
      </main>
    </div>
  )
}