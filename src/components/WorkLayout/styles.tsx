import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 60px;
  text-align: center;
  position: relative;
`;

export const Paragraph = styled.p`
  max-width: 600px;
  margin: 0 auto;
  line-height: 2em;
`;

export const TitleLarge = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.darkGreen};
  margin: 20px auto;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.darkGreen};
`;
