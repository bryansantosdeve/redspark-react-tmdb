import { Link } from 'react-router-dom';
import {
  CardStyled,
  Figure,
  Image,
  DescriptionStyled,
  Title,
  Rated,
} from './styles';

function PosterCard({ contentId, imgSrc, title, rated }) {
  return (
    <CardStyled>
      <Figure>
        <Link to={`/content/${contentId}`}>
          <Image src={imgSrc} />
        </Link>
      </Figure>
      <DescriptionStyled>
        <Title>{title}</Title>
        <Rated>Rated: {rated.toFixed(1)}</Rated>
        <p>Estrelas</p>
      </DescriptionStyled>
    </CardStyled>
  );
}

export default PosterCard;
