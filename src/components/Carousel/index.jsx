import CustomCard from '../CustomCard';
import Slider from '../Slider';
import { SwiperSlide } from 'swiper/react';
import { TitleStyled } from './styles';

// TODO: Implementar abstração para diferentes tipos de card no Carousel e.g Custom Card, Custom Banner, etc
function Carousel({ settings, contentList, title, contentSlideType, isMovie }) {
  return (
    <>
      <div>
        <TitleStyled>&#9733; {title} &#9733;</TitleStyled>
      </div>

      <Slider settings={settings}>
        {contentList.map((content, index) => {
          return (
            <SwiperSlide virtualIndex={index}>
              {contentSlideType}
              <CustomCard
                key={index}
                imageSrc={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                title={isMovie ? content.original_title : content.original_name}
                rated={content.vote_average}
                contentId={content.id}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </>
  );
}

export default Carousel;
