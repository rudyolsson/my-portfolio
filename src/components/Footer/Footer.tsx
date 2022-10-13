import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FadeIn } from 'components/FadeIn';
import * as S from './styles';

export const Footer = () => {
  return (
    <FadeIn
      component={
        <S.Wrapper>
          <S.FooterNav>
            <S.NavItem>
              <FadeIn
                delay={200}
                component={
                  <S.Anchor
                    href="https://www.linkedin.com/in/rudy-olsson-bb2152161/"
                    target="_blank"
                    aria-label="Click to open LinkedIn a new window"
                  >
                    <FaLinkedin />
                  </S.Anchor>
                }
              />
            </S.NavItem>
            <S.NavItem>
              <FadeIn
                delay={400}
                component={
                  <S.Anchor
                    href="https://github.com/rudyolsson"
                    target="_blank"
                    aria-label="Click to open GitHub a new window"
                  >
                    <FaGithub />
                  </S.Anchor>
                }
              />
            </S.NavItem>
            <S.NavItem>
              <FadeIn
                delay={600}
                component={
                  <S.Anchor
                    href="mailto:rudyolsson.contact@gmail.com"
                    target="_blank"
                    aria-label="Click to open your email client a new window"
                  >
                    <MdEmail />
                  </S.Anchor>
                }
              />
            </S.NavItem>
          </S.FooterNav>
          <div>
            <S.Paragraph>&#169; {new Date().getFullYear()} Rudy Olsson</S.Paragraph>
            <S.ParagraphSmall>Site Made With ReactJS</S.ParagraphSmall>
          </div>
        </S.Wrapper>
      }
    />
  );
};
