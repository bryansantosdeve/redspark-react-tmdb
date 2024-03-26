import { useEffect, useState } from 'react';
import Carousel from '../../../../components/Carousel';
import getDataTmdb from '../../../../config/http';

/// TODO: Dinamizar atributo 'time_window' da URL para busca
function TrendingShowsSection() {
  const [trendingShows, setTrendingShows] = useState([]);
  const endpoint = '3/trending/tv/day';

  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, []);

  function onSuccess(response) {
    console.log(response.data.results);
    setTrendingShows(response.data.results);
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
    <Carousel
      settings={carouselSettings}
      title='TRENDING SHOWS'
      contentList={trendingShows}
      isMovie={false}
    />
  );
}

export default TrendingShowsSection;
