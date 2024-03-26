import { useEffect, useState } from 'react';
import getDataTmdb from '../../../../config/http';
import Slider from '../../../../components/Slider';
import CustomBanner from '../../../../components/CustomBanner';
import { SwiperSlide } from 'swiper/react';

function MainBannerSection() {
  const [contents, setContents] = useState([]);
  const endpoint = '3/movie/upcoming';

  const carouselSettings = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, []);

  function onSuccess(response) {
    setContents(response.data.results);
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <>
      <Slider settings={carouselSettings}>
        {contents.map((content, index) => {
          return (
            <SwiperSlide>
              <CustomBanner
                key={index}
                imageSrc={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
                title={content.original_title}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </>
  );
}

export default MainBannerSection;
