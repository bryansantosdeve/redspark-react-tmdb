import { useEffect, useState } from 'react';
import Carousel from '../../../../components/Carousel';
import getDataTmdb from '../../../../config/http.jsx';

function DiscoverMoviesSection() {
  const [movies, setMovies] = useState([]);
  const endpoint = '3/discover/movie';

  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, []);

  function onSuccess(response) {
    setMovies(response.data.results);
  }

  function onError(error) {
    console.log(error);
  }

  const carouselSettings = {
    spaceBetween: 50,
    slidesPerView: 6,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <>
      <Carousel
        contentList={movies}
        settings={carouselSettings}
        title='DISCOVER A NEW MOVIE'
        isMovie={true}
      />
    </>
  );
}

export default DiscoverMoviesSection;
