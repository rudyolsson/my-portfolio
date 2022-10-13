import { useState, useEffect } from 'react';
import './Header.scss';
import signature from 'assets/images/signature.png';
import signatureGreen from 'assets/images/signature-green.png';
import { Link } from 'react-scroll';
import * as S from './styles';

export const Header = () => {
  const [activeClass, setActiveClass] = useState('header-dark');
  const [activeClassSig, setActiveClassSig] = useState('show');
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScroll(window.pageYOffset || document.documentElement.scrollTop);
    });
  });

  useEffect(() => {
    let activeClass = 'header-dark';
    let activeClassSig = 'show';
    if (scroll > 415) {
      activeClass = 'header-light forest';
      activeClassSig = 'hide';
    }
    setActiveClass(activeClass);
    setActiveClassSig(activeClassSig);
  }, [scroll]);

  return (
    <S.StyledHeader className={`header ${activeClass}`}>
      <Link to="home" spy={true} smooth={true} offset={50} duration={500} delay={200}>
        <S.Signature
          src={signature}
          alt="signature"
          className={`signature signature-black ${activeClassSig}`}
        />
        <S.Signature
          src={signatureGreen}
          alt="signature"
          className={`signature signature-green ${activeClassSig === 'show' ? 'hide' : 'show'}`}
        />
      </Link>
      <S.Nav className="nav shift">
        <S.NavUL>
          <S.NavLi>
            <Link to="home" spy={true} smooth={true} offset={430} duration={500} delay={200}>
              <S.Anchor aria-label="Click to scroll to About section">About</S.Anchor>
            </Link>
          </S.NavLi>
          <S.NavLi>
            <Link to="work" spy={true} smooth={true} offset={-100} duration={500} delay={200}>
              <S.Anchor aria-label="Click to scroll to Work section">Work</S.Anchor>
            </Link>
          </S.NavLi>
          <S.NavLi>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} delay={200}>
              <S.Anchor aria-label="Click to scroll to Contact section">Contact</S.Anchor>
            </Link>
          </S.NavLi>
        </S.NavUL>
      </S.Nav>
    </S.StyledHeader>
  );
};
