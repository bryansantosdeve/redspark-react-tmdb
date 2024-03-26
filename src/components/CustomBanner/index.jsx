import { FigureStyled, ImageStyled } from './styles';

function CustomBanner({ imageSrc, title }) {
  return (
    <FigureStyled>
      <ImageStyled src={imageSrc} alt={title}></ImageStyled>
    </FigureStyled>
  );
}

export default CustomBanner;
