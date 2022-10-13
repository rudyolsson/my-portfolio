import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 60px;
  text-align: center;
`;

export const SectionTop = styled.section`
  padding-top: 60px;
  padding-bottom: 0;
  text-align: center;
`;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  background-color: #f5f5f5;
  border-radius: 50%;
  padding: 5px;
  @media (min-width: 450px) {
    height: 150px;
    width: 150px;
  }
`;

export const TitleSmall = styled.h2`
  font-size: 2em;
  color: #45b29a;
  margin: 20px auto;
`;

export const Paragraph = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 2em;
`;

export const Flag = styled.img`
  height: 52px;
  position: absolute;
  left: 50px;
  top: 204px;
  @media (min-width: 450px) {
    left: 100px;
  }
`;
