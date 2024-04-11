import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDataTmdb } from '../../config/http';
import Slider from '../Slider';
import BannerCard from '../cards/BannerCard/index';
import PosterCard from '../cards/PosterCard/index';

function Carousel({ endpoint, settings, isBanner }) {
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
                  imgSrc={content.backdrop_path}
                  title={content.title}
                />
              </Link>
            ) : (
              <PosterCard
                contentId={content.id}
                imgSrc={content.poster_path}
                title={content.title}
                rated={content.vote_average}
                endpoint={`/content/${content.id}`}
              />
            )}
          </SwiperSlide>
        );
      })}
    </Slider>
  );
}

export default Carousel;
