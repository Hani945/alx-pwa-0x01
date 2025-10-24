import Button from '@/components/commons/Button';
import Loading from '@/components/commons/Loading';
import MovieCard from '@/components/commons/MovieCard';
import { MoviesProps } from '@/interfaces';
import { useCallback, useEffect, useState } from 'react';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch('/api/fetch-movies', { method: 'POST', body: JSON.stringify({}), headers: { 'Content-Type': 'application/json' }});
      const data = await resp.json();
      setMovies(data.movies || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchMovies(); }, [fetchMovies]);

  return (
    <div className='min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44'>
      <h1 className='text-3xl md:text-6xl font-bold my-8'>Movies List</h1>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mt-10'>
        {movies.map((movie, i) => (
          <MovieCard key={i} title={movie.titleText.text} posterImage={movie.primaryImage.url} releaseYear={movie.releaseYear.year} />
        ))}
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Movies;
