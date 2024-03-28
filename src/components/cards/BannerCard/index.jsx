import { Banner } from './styles';

function BannerCard({ imgSrc, title }) {
  return <Banner src={imgSrc} alt={title} />;
}

export default BannerCard;
