import {FancyButton} from 'components/FancyButton';
import { Link } from 'react-scroll';
import * as S from './styles';

interface Props {
    children: React.ReactNode;
    titleGreen: string;
    subtitle: string;
    titleBlack: string;
    btnText: string;
}

export const Banner = ({ titleGreen, subtitle, titleBlack, btnText }: Props) => {
    return (
        <S.Wrapper>
            <S.Title>
                <S.TitleBlack>{titleBlack}</S.TitleBlack>
                <S.TitleGreen>{titleGreen}</S.TitleGreen>
            </S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <Link to="work" spy={true} smooth={true} offset={-100} duration={500} delay={200}>
                <FancyButton>{btnText}</FancyButton>
            </Link>
        </S.Wrapper>
   )
}
