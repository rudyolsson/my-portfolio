import { HTMLAttributes } from 'react'
import {FadeInUp} from 'components/FadeInUp';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';
import { Project } from 'types/interfaces';
import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
    project: Project;
}

export const ProjectSection = ({ project }: Props) => {
    const { imgURL, bgColor, title, description, skills, siteURL } = project;
    return (
        <S.Wrapper $bgColor={bgColor}>
            <LazyLoad height={350} offset={200}>
                <ScrollAnimation animateIn="fadeIn" offset={50} duration={1} animateOnce={true} delay={0}>
                    <S.ScreenShot src={imgURL} alt={`An image of the app ${title}`}/>
                </ScrollAnimation>
            </LazyLoad>
            <FadeInUp component={
                <S.Title>{title}</S.Title>
            } />
            <FadeInUp component={
                <S.Paragraph>{description}</S.Paragraph>
            } />
            <FadeInUp component={
                <S.Tech>Skills: {skills}</S.Tech>
            } delay={100}/>
            {!siteURL ? '' : <FadeInUp component={
                <S.Link href={siteURL} target="_blank">Visit Site</S.Link>} />}
        </S.Wrapper>
    )
}
