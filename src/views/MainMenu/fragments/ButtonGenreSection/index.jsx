import { useEffect, useState } from 'react';
import { getDataTmdb } from '../../../../config/http';
import GenreButton from '../../../../components/buttons/GenreButton';

function ButtonGenreSection() {
  const [genres, setGenres] = useState([]);
  const endpoint = '/genre/movie/list';
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
        return <GenreButton key={genre.id} label={genre.name} />;
      })}
    </>
  );
}

export default ButtonGenreSection;
