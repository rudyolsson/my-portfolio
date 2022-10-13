import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.lightGreen};
  color: #1e836c;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  max-width: 500px;
  justify-content: space-around;
  margin: 30px auto 0 auto;
  width: 100%;
  padding: 0;
`;

export const NavItem = styled.li``;

export const Anchor = styled.a`
  font-size: 2.5em;
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
  position: relative;
  color: inherit;

  &::after {
    position: absolute;
    content: '';
    height: 0.1em;
    top: 100%;
    background: currentColor;
    z-index: -1;
    left: 0;
    right: 0;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  }

  &:hover::after {
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
    transform: scaleX(1);
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  margin: 0 auto;
`;

export const ParagraphSmall = styled(Paragraph)`
  font-size: 0.5em;
`;
