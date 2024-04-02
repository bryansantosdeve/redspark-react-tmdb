import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getDataTmdb from '../../config/http';
import {
  ButtonStyled,
  Caption,
  CardStyled,
  GridStyled,
  ImageStyled,
  MovieDetailsStyled,
  OverviewDescription,
  SectionStyled,
  Title,
  TitleStyled,
} from './styles';
import BannerCard from '../../components/cards/BannerCard';
import GenreButton from '../../components/buttons/GenreButton';
import Carousel from '../../components/Carousel';
import CastingSection from './fragments/CastingSection';
import DefaultFooter from '../../components/surface/DefaultFooter';
import Divider from '../../components/Divider';

function MovieDetails() {
  const { contentId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const endpoint = `3/movie/${contentId}`;
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    getDataTmdb({ endpoint, onSuccess, onError });
  }, []);

  const onSuccess = (response) => {
    setMovie(response.data);
    setGenres(response.data.genres);
  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <MovieDetailsStyled>
      <figure>
        <ImageStyled
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          alt='TMDB icon'
        />
      </figure>

      {/* Revisar encapsulamento de banner */}
      <BannerCard imgSrc={imageBaseUrl + movie.backdrop_path} />
      {/* Revisar encapsulamento de banner */}

      <SectionStyled>
        <TitleStyled>
          <Title>GENRE</Title>
        </TitleStyled>
        <ButtonStyled>
          {genres.map((genre) => {
            return <GenreButton key={genre.id} label={genre.name} />;
          })}
        </ButtonStyled>
      </SectionStyled>

      <SectionStyled>
        <TitleStyled>
          <Title>OVERVIEW</Title>
        </TitleStyled>
        <div>
          <OverviewDescription>{movie.overview}</OverviewDescription>
        </div>
        <GridStyled>
          <div>
            <TitleStyled>
              <Title>RELEASE DATE</Title>
            </TitleStyled>
            <div>
              <Caption>{movie.release_date}</Caption>
            </div>
          </div>
          <div>
            <TitleStyled>
              <Title>RUN TIME</Title>
            </TitleStyled>
            <div>
              <Caption>{movie.runtime}</Caption>
            </div>
          </div>
          <div>
            <TitleStyled>
              <Title>BUDGET</Title>
            </TitleStyled>
            <div>
              <Caption>{movie.budget}</Caption>
            </div>
          </div>
          <div>
            <TitleStyled>
              <Title>HOMEPAGE</Title>
            </TitleStyled>
            <div>
              <Caption>{movie.homepage}</Caption>
            </div>
          </div>
        </GridStyled>
      </SectionStyled>

      <SectionStyled>
        <TitleStyled>
          <Title>CAST</Title>
        </TitleStyled>
        <CardStyled>
          <CastingSection
            contentId={contentId}
            settings={{
              spaceBetween: 20,
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
          />
        </CardStyled>
      </SectionStyled>

      <SectionStyled>
        <TitleStyled>
          <Title>SIMILAR MOVIES</Title>
        </TitleStyled>
      </SectionStyled>
      <SectionStyled>
        <CardStyled>
          <Carousel
            endpoint={`3/movie/${contentId}/similar`}
            isBanner={false}
            settings={{
              spaceBetween: 20,
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
          />
        </CardStyled>
      </SectionStyled>

      <Divider />
      <DefaultFooter />
    </MovieDetailsStyled>
  );
}

export default MovieDetails;
