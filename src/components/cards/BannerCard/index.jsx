import { Banner } from './styles';
import ImageNotFound from '../../../assets/images/image-not-found.jpg';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

function BannerCard({ imgSrc, title }) {
  return (
    <Banner src={imgSrc ? imageBaseUrl + imgSrc : ImageNotFound} alt={title} />
  );
}

export default BannerCard;
