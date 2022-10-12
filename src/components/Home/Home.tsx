import {Banner} from 'components/Banner'
import avatar from 'assets/images/ro.png';
import flag from 'assets/images/flag.png';
import { FadeIn } from 'components/FadeIn';
import * as S from './styles';

export const Home = () => {
    return (
        <>
            <S.SectionTop>
                <Banner
                    titleBlack="Hi, I'm"
                    titleGreen="Rudy Olsson"
                    subtitle="Full Stack Engineer"
                    btnText="View My Work">
                </Banner>
            </S.SectionTop>
            <S.Section className="forest">
                <S.Flag src={flag} alt="flag" />
                <S.Avatar src={avatar} alt="avatar" />
                <S.TitleSmall>About</S.TitleSmall>
                <FadeIn component={<S.Paragraph>I am a full-stack developer with a passion for creating great user experiences. I bring with me a sincere drive and ability to learn on-the-fly; I love a challenge.</S.Paragraph>} />
            </S.Section>
        </>
    )
}
