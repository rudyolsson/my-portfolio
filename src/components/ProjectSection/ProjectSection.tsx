import { HTMLAttributes } from 'react';
import { FadeIn } from 'components/FadeIn';
import { Project } from 'types/interfaces';
import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  project: Project;
}

export const ProjectSection = ({ project }: Props) => {
  const { imgURL, bgColor, title, description, skills, siteURL } = project;
  return (
    <S.Wrapper $bgColor={bgColor}>
        <FadeIn component={<S.ScreenShot src={imgURL} alt={`An image of the app ${title}`} />} />
      <FadeIn component={<S.Title>{title}</S.Title>} />
      <FadeIn component={<S.Paragraph>{description}</S.Paragraph>} />
      <FadeIn component={<S.Tech>Skills and tools: {skills}</S.Tech>} delay={100} />
      {!siteURL ? (
        ''
      ) : (
        <FadeIn
          component={
            <S.Link href={siteURL} target="_blank">
              Visit Site
            </S.Link>
          }
        />
      )}
    </S.Wrapper>
  );
};
