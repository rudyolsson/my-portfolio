import { ProjectSection } from 'components/ProjectSection';
import { FadeIn } from 'components/FadeIn';
import { FancyButton } from 'components/FancyButton/FancyButton';
import { MdMail } from 'react-icons/md';
import { ScrollDownIcon } from 'components/ScrollDownIcon';
import * as S from './styles';
import { projects } from './projects';

export const WorkLayout = () => {
  return (
    <>
      <S.Section>
        <FadeIn component={<S.TitleLarge>Recent Work</S.TitleLarge>} />
        <FadeIn
          component={
            <S.Paragraph>
              Here are some projects that I have worked on recently. For more information visit the
              sites, or to see what personal projects I've been working on check out my{' '}
              <S.Anchor href="https://github.com/rudyolsson">GitHub.</S.Anchor>
            </S.Paragraph>
          }
        />
      </S.Section>
      <FadeIn component={<ScrollDownIcon />} />

      {projects.map((project, i) => {
        return (
          <ProjectSection
            project={{
              ...project,
              bgColor: '#FFF',
            }}
            key={project.title}
          />
        );
      })}
      <S.Section>
        <S.TitleLarge>Let's Chat</S.TitleLarge>
        <FadeIn
          component={
            <S.Anchor href="mailto:rudyolsson.contact@gmail.com">
              <FancyButton>
                <MdMail /> Message Me
              </FancyButton>
            </S.Anchor>
          }
        />
        <FadeIn
          component={
            <S.Paragraph>
              If you are interested in working together or just feel like saying hey, reach out.
            </S.Paragraph>
          }
        />
      </S.Section>
    </>
  );
};
