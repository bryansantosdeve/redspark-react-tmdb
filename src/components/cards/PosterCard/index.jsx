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
import ImageNotFound from '../../../assets/images/image-not-found.jpg';

function PosterCard({
  contentId,
  imgSrc,
  title,
  rated,
  description,
  endpoint,
}) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <CardStyled key={contentId}>
      <Figure>
        <Link to={endpoint} reloadDocument>
          <Image src={imgSrc ? imageBaseUrl + imgSrc : ImageNotFound} />
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
