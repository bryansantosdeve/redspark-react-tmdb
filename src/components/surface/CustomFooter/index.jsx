import { DescriptionStyled, FooterStyled, TitleStyled } from './styles';

// TODO: Revisar organização da disposição de título e descrição
function CustomFooter({ title, description }) {
  return (
    <FooterStyled>
      <span>
        <TitleStyled>{title}</TitleStyled>
      </span>
      <div>
        <DescriptionStyled>{description}</DescriptionStyled>
      </div>
    </FooterStyled>
  );
}

export default CustomFooter;
