import CustomDivider from '../../components/CustomDivider';
import CustomTextInput from '../../components/inputs/CustomTextInput';
import CustomFooter from '../../components/surface/CustomFooter';
import CustomHeader from '../../components/surface/CustomHeader';
import DiscoverMoviesSection from './fragments/DiscoverMoviesSection';
import MainBannerSection from './fragments/MainBannerSection';
import TrendingShowsSection from './fragments/TrendingShowsSection';
import { BannerStyled, ImageStyled, SectionStyled } from './styles';

function MainMenu() {
  const titlePage = 'The Movie Database Menu';

  return (
    <>
      <CustomHeader title={titlePage} />

      <ImageStyled
        src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
        alt='TMDB icon'
      ></ImageStyled>

      <BannerStyled>
        <MainBannerSection />
      </BannerStyled>

      <div>
        <CustomTextInput placeholder='Pesquise por um filme' />
      </div>

      <main>
        <SectionStyled>
          <DiscoverMoviesSection />
        </SectionStyled>

        <SectionStyled>
          <TrendingShowsSection />
        </SectionStyled>
      </main>

      <CustomDivider />

      <CustomFooter
        title='ABOUT ME'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
    </>
  );
}

export default MainMenu;
