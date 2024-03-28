import {
  FooterStyled,
  FooterTitleStyled,
  FooterTitle,
  DescriptionStyled,
  Description,
} from './styles';

function DefaultFooter({ title, description }) {
  return (
    <FooterStyled>
      <FooterTitleStyled>
        <FooterTitle>{title}</FooterTitle>
      </FooterTitleStyled>

      <DescriptionStyled>
        <Description>{description}</Description>
      </DescriptionStyled>
    </FooterStyled>
  );
}

export default DefaultFooter;
