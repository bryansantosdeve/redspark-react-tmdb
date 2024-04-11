import styled from 'styled-components';

export const MovieDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 6rem;
  margin-left: 6rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  row-gap: 20px;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 1.889vh;
`;

export const SectionGridStyled = styled.section`
  text-align: start;
  width: 100%;
  box-sizing: border-box;
`;

export const GridStyled = styled.div`
  display: grid;
  box-sizing: border-box;
  text-align: start;
  word-wrap: break-word;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(190px, auto));
`;
export const SectionStyled = styled.section`
  display: flex;
  align-items: start;
  box-sizing: border-box;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const TitleStyled = styled.span`
  box-sizing: border-box;
`;

export const Title = styled.h2`
  color: #989898;
  font-weight: 700;
  font-size: 1rem;
  line-height: 19.36px;
`;

export const ButtonStyled = styled.div`
  align-items: start;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const CardStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const OverviewDescription = styled.p`
  text-align: start;
  color: #ffffff;
  font-weight: 300;
  font-size: 1rem;
  line-height: 19.36px;
`;

export const Caption = styled.p`
  color: #ffeb3c;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19.36px;
`;
