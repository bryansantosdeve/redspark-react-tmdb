import CustomCard from '../CustomCard';
import Slider from '../Slider';
import { SwiperSlide } from 'swiper/react';

// TODO: Implementar abstração para diferentes tipos de card no Carousel e.g Custom Card, Custom Banner, etc
function Carousel({ settings, contentList, title, contentSlideType }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
      </div>

      <Slider settings={settings}>
        {contentList.map((content, index) => {
          return (
            <SwiperSlide>
              {contentSlideType}
              <CustomCard
                key={index}
                imageSrc={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                title={content.original_title}
                rated={content.vote_average}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </>
  );
}

export default Carousel;
