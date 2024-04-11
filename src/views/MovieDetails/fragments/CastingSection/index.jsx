import { useEffect, useState } from 'react';
import Slider from '../../../../components/Slider';
import getDataTmdb from '../../../../config/http';
import { SwiperSlide } from 'swiper/react';
import PosterCard from '../../../../components/cards/PosterCard';

function CastingSection({ contentId, settings }) {
  const [casting, setCasting] = useState([]);
  const endpoint = `3/movie/${contentId}/credits`;

  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, [endpoint]);

  const onSuccess = (response) => {
    setCasting(response.data.cast);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <Slider settings={settings}>
      {casting.map((person) => {
        return (
          <SwiperSlide key={person.id}>
            <PosterCard
              imgSrc={person.profile_path}
              title={person.original_name}
              description={person.character}
            />
          </SwiperSlide>
        );
      })}
    </Slider>
  );
}

export default CastingSection;
