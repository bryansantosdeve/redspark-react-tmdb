import { useNavigate } from 'react-router-dom';
import CustomCardDescription from './fragments/CustomCardDescription';
import {
  CustomCardBackgroundStyled,
  CustomCardDescriptionBackgroundStyled,
  ImageStyled,
} from './styles';

/// TODO: Revisar estilização da Figure
function CustomCard({ imageSrc, title, rated, contentId }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/content/${contentId}`);
  }

  return (
    <CustomCardBackgroundStyled>
      <figure>
        <a href=' ' onClick={handleClick}>
          <ImageStyled src={imageSrc} alt={title}></ImageStyled>
        </a>
      </figure>
      <CustomCardDescriptionBackgroundStyled>
        <CustomCardDescription title={title} rated={rated} />
      </CustomCardDescriptionBackgroundStyled>
    </CustomCardBackgroundStyled>
  );
}

export default CustomCard;
