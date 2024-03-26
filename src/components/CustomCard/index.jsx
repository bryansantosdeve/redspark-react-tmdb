import {
  CustomCardBackgroundStyled,
  CustomCardDescriptionBackgroundStyled,
  ImageStyled,
} from './styles';

/// TODO: Revisar estilização da Figure
function CustomCard({ imageSrc, title, rated }) {
  return (
    <CustomCardBackgroundStyled>
      <figure>
        <ImageStyled src={imageSrc} alt={title}></ImageStyled>
      </figure>
      <CustomCardDescriptionBackgroundStyled>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{rated}</p>
        </div>
        <div>
          <p>Espaço para implementação futura</p>
        </div>
      </CustomCardDescriptionBackgroundStyled>
    </CustomCardBackgroundStyled>
  );
}

export default CustomCard;
