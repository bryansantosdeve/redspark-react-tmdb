import { Link } from 'react-router-dom';
import {
  CardStyled,
  Figure,
  Image,
  DescriptionStyled,
  Title,
  Rated,
  Description,
} from './styles';

function PosterCard({ contentId, imgSrc, title, rated, description }) {
  return (
    <CardStyled>
      <Figure>
        <Link to={`/content/${contentId}`}>
          <Image src={imgSrc} />
        </Link>
      </Figure>
      <DescriptionStyled>
        <Title>{title}</Title>
        <Rated>{rated && 'Rated: ' + rated.toFixed(1)}</Rated>
        <Description> {description || null} </Description>
      </DescriptionStyled>
    </CardStyled>
  );
}

export default PosterCard;
