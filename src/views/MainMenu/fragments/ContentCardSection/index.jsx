import { SwiperSlide } from 'swiper/react';
import Slider from '../../../../components/Slider';
import BannerCard from '../../../../components/cards/BannerCard';
import PosterCard from '../../../../components/cards/PosterCard';
import { useEffect, useState } from 'react';
import getDataTmdb from '../../../../config/http';
import { Link } from 'react-router-dom';

function ContentCardSection({ endpoint, settings, isBanner }) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
  const [contents, setContent] = useState([]);

  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, [endpoint]);

  const onSuccess = (response) => {
    setContent(response.data.results);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <Slider settings={settings}>
      {contents.map((content) => {
        return (
          <SwiperSlide key={content.id}>
            {isBanner ? (
              <Link to={`/content/${content.id}`}>
                <BannerCard
                  imgSrc={imageBaseUrl + content.backdrop_path}
                  title={content.title}
                />
              </Link>
            ) : (
              <PosterCard
                contentId={content.id}
                imgSrc={imageBaseUrl + content.poster_path}
                title={content.title}
                rated={content.vote_average}
              />
            )}
          </SwiperSlide>
        );
      })}
    </Slider>
  );
}

export default ContentCardSection;
