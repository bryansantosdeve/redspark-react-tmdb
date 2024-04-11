import styled from 'styled-components';

export const CardStyled = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 338.5px;
  width: 221px;
`;

export const Figure = styled.figure`
  box-sizing: border-box;
  display: flex;
  width: 100%;
`;

export const Image = styled.img`
  border: solid 1px white;
  width: 100%;
  height: 333px;
`;

export const DescriptionStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: start;
  width: 100%;
`;

export const Title = styled.p`
  color: #f5f5f5;
  font-size: 1rem;
  font-weight: 700;
  line-height: 19.36px;
`;

export const Rated = styled.p`
  color: #f5f5f5;
  font-size: 1rem;
  font-weight: 300;
  line-height: 19.36px;
`;

export const Description = styled.p`
  color: #f5f5f5;
  font-size: 1rem;
  font-weight: 300;
  line-height: 19.36px;
`;
