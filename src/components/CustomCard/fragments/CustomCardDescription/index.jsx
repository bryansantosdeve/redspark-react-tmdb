import { RatedStyled, TitleStyled } from './styles';

function CustomCardDescription({ title, rated }) {
  return (
    <>
      <div>
        <TitleStyled>{title}</TitleStyled>
      </div>
      <div>
        <RatedStyled>Rated: {rated}</RatedStyled>
      </div>
      <div>
        <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      </div>
    </>
  );
}

export default CustomCardDescription;
