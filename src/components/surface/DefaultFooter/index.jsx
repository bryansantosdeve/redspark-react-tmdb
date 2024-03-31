import {
  FooterStyled,
  FooterTitleStyled,
  FooterTitle,
  DescriptionStyled,
  Description,
} from './styles';

import GithubIcon from '../../../assets/icons/icon-github.svg';
import LinkedinIcon from '../../../assets/icons/icon-linkedin.svg';
import { Link } from 'react-router-dom';

function DefaultFooter({ title, description }) {
  return (
    <FooterStyled>
      <FooterTitleStyled>
        <FooterTitle>{title}</FooterTitle>
      </FooterTitleStyled>

      <DescriptionStyled>
        <Description>{description}</Description>
      </DescriptionStyled>

      <div>
        <Link to={process.env.REACT_APP_BRYANSANTOSDEV_GITHUB}>
          <img src={GithubIcon} alt='Github' />
        </Link>
        <Link to={process.env.REACT_APP_BRYANSANTOSDEV_LINKEDIN}>
          <img src={LinkedinIcon} alt='Linkedin' />
        </Link>
      </div>
    </FooterStyled>
  );
}

export default DefaultFooter;
