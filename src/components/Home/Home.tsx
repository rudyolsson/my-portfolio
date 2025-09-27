import { Banner } from 'components/Banner';
import avatar from 'assets/images/ro.png';
import { FadeIn } from 'components/FadeIn';
import * as S from './styles';

export const Home = () => {
  return (
    <>
      <S.SectionTop>
        <Banner
          titleBlack="Hi, I'm"
          titleGreen="Rudy Olsson"
          subtitle="Senior Software Engineer"
          btnText="View My Work"
        ></Banner>
      </S.SectionTop>
      <S.Section className="forest">
        <S.Avatar src={avatar} alt="avatar" />
        <S.TitleSmall>About</S.TitleSmall>
        <FadeIn
          component={
            <S.Paragraph>
              Senior Software Engineer with +{new Date().getFullYear() - 2018} years of experience building SaaS platforms and distributed systems. Skilled in designing scalable architectures, leading cross-functional projects, crafting intuitive user experiences, and delivering products that drive business impact.
            </S.Paragraph>
          }
        />
      </S.Section>
    </>
  );
};
