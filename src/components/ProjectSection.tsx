import React, { HTMLAttributes } from 'react'
import styled from 'styled-components';
import FadeInUp from 'components/FadeInUp';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';
import { Project } from './types';

interface WrapperProps {
    $bgColor?: string;
}

const Wrapper = styled.section<WrapperProps>`
    padding: 70px 30px;
    text-align: center;
    align-items: center;
    background-color: ${props => props.$bgColor};
    color: #000;
`;


const ScreenShot = styled.img`
    border-radius: 5px;
    max-height: 200px;
    max-width: 300px;
    @media (min-width: 450px) {
        max-height: 400px;
        max-width: 350px;
  }
    @media (min-width: 768px) {
        max-height: 600px;
        max-width: 550px;
  }
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 1.7em;
    @media (min-width: 567px) {
        font-size: 2em;
    }
`;

const Paragraph = styled.p`
    max-width: 700px;
    margin: 20px auto;
    font-size: 1.25em;
    `;

const Tech = styled.p`
    font-size: 0.75em;
    margin: 5px 0 0 0;
`;

const Link = styled.a`
    background: ${props => props.theme.darkBlue};
    padding: 10px 20px;
    border-radius: 5px;
    margin: 50px auto 0 auto;
    display: block;
    max-width: 300px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`;

interface Props extends HTMLAttributes<HTMLElement> {
    project: Project;
}

export default function ProjectSection({ project }: Props): JSX.Element {
    const { imgURL, bgColor, title, description, skills, siteURL } = project;
    return (
        <Wrapper $bgColor={bgColor}>
            <LazyLoad height={350} offset={200}>
                <ScrollAnimation animateIn="fadeIn" offset={50} duration={1} animateOnce={true} delay={0}>
                    <ScreenShot src={imgURL} />
                </ScrollAnimation>
            </LazyLoad>
            <FadeInUp component={
                <Title>{title}</Title>
            } />
            <FadeInUp component={
                <Paragraph>{description}</Paragraph>
            } />
            <FadeInUp component={
                <Tech>Skill: {skills}</Tech>
            } />
            {!siteURL ? '' : <FadeInUp component={
                <Link href={siteURL} target="_blank">Visit Site</Link>} />}
        </Wrapper>
    )
}
