import Carousel from '../../components/Carousel';
import Divider from '../../components/Divider';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import DefaultFooter from '../../components/surface/DefaultFooter';
import ButtonGenreSection from './fragments/ButtonGenreSection';
import {
  ImageStyled,
  SearchFieldStyled,
  MainMenuStyled,
  SectionStyled,
  Title,
  TitleStyled,
  ButtonStyled,
  CardStyled,
  DividerStyled,
} from './styles';

function MainMenu() {
  return (
    <MainMenuStyled>
      <figure>
        <ImageStyled
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          alt='TMDB icon'
        />
      </figure>

      <SectionStyled>
        <CardStyled>
          <Carousel
            isBanner={true}
            endpoint={'3/trending/movie/week'}
            settings={{
              slidesPerView: 1,
              centeredSlides: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                clickable: true,
              },
            }}
          />
        </CardStyled>
      </SectionStyled>

      <SearchFieldStyled>
        <CustomTextInput placeholder={'Search a movie'} />
      </SearchFieldStyled>

      <SectionStyled>
        <TitleStyled>
          <Title>SELECT A GENRE BELOW</Title>
        </TitleStyled>
        <ButtonStyled>
          <ButtonGenreSection />
        </ButtonStyled>
      </SectionStyled>

      <SectionStyled>
        <CardStyled>
          <Carousel
            endpoint={'3/movie/upcoming'}
            settings={{
              spaceBetween: 20,
              slidesPerView: 5.2,
              navigation: true,
              breakpoints: {
                '@0.10': {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                '@0.50': {
                  slidesPerView: 1.2,
                  spaceBetween: 50,
                },
                '@0.75': {
                  slidesPerView: 2.2,
                  spaceBetween: 50,
                },
                '@1.00': {
                  slidesPerView: 3.2,
                  spaceBetween: 50,
                },
                '@1.50': {
                  slidesPerView: 4.2,
                  spaceBetween: 50,
                },
                '@2.00': {
                  slidesPerView: 5.2,
                  spaceBetween: 50,
                },
              },
            }}
            isBanner={false}
          />
        </CardStyled>
      </SectionStyled>

      <SectionStyled>
        <TitleStyled>
          <Title>&#9733; TOP RATED MOVIES &#9733;</Title>
        </TitleStyled>
        <CardStyled>
          <Carousel
            endpoint={'3/movie/upcoming'}
            settings={{
              spaceBetween: 10,
              slidesPerView: 6.2,
              navigation: true,
              breakpoints: {
                '@0.10': {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                '@0.50': {
                  slidesPerView: 1.2,
                  spaceBetween: 50,
                },
                '@0.75': {
                  slidesPerView: 2.2,
                  spaceBetween: 50,
                },
                '@1.00': {
                  slidesPerView: 3.2,
                  spaceBetween: 50,
                },
                '@1.50': {
                  slidesPerView: 4.2,
                  spaceBetween: 50,
                },
                '@2.00': {
                  slidesPerView: 5.2,
                  spaceBetween: 50,
                },
              },
            }}
            isBanner={false}
          />
        </CardStyled>
      </SectionStyled>

      <SectionStyled>
        <TitleStyled>
          <Title>&#9733; UPCOMING MOVIES &#9733;</Title>
        </TitleStyled>
        <CardStyled>
          <Carousel
            endpoint={'3/movie/upcoming'}
            settings={{
              spaceBetween: 10,
              slidesPerView: 6.2,
              navigation: true,
              breakpoints: {
                '@0.10': {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                '@0.50': {
                  slidesPerView: 1.2,
                  spaceBetween: 50,
                },
                '@0.75': {
                  slidesPerView: 2.2,
                  spaceBetween: 50,
                },
                '@1.00': {
                  slidesPerView: 3.2,
                  spaceBetween: 50,
                },
                '@1.50': {
                  slidesPerView: 4.2,
                  spaceBetween: 50,
                },
                '@2.00': {
                  slidesPerView: 5.2,
                  spaceBetween: 50,
                },
              },
            }}
            isBanner={false}
          />
        </CardStyled>
      </SectionStyled>

      <DividerStyled>
        <Divider />
      </DividerStyled>

      <DefaultFooter />
    </MainMenuStyled>
  );
}

export default MainMenu;
