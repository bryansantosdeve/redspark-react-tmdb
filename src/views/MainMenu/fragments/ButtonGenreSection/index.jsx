import { useEffect, useState } from 'react';
import { Button } from './styles';
import getDataTmdb from '../../../../config/http';

function ButtonGenreSection() {
  const [genres, setGenres] = useState([]);
  const endpoint = '3/genre/movie/list';
  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, []);

  const onSuccess = (success) => {
    setGenres(success.data.genres);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <>
      {genres.map((genre) => {
        return <Button key={genre.id}>{genre.name}</Button>;
      })}
    </>
  );
}

export default ButtonGenreSection;
