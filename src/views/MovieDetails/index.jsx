import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDataTmdb from '../../config/http';

function MovieDetails() {
  const { contentId } = useParams();
  const [movie, setMovie] = useState({});
  const endpoint = `3/movie/${contentId}`;

  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, []);

  const onSuccess = (response) => {
    console.log(response.data);
    setMovie(response.data);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}

export default MovieDetails;
