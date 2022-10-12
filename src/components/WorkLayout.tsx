import React from 'react';
import ProjectSection from 'components/ProjectSection';
import ArtysImg from 'assets/images/artys-screens.png';
import UmatchImg from 'assets/images/umatch-three-screens.png';
import FlexoImg from 'assets/images/flexo-three-screens.png';
import TokenUIImg from 'assets/images/token-admin-ui.png';
import HIImage from 'assets/images/hotel-insights.png';
import CapGImage from 'assets/images/capital-g.png';
import GMSImage from 'assets/images/gms.png';
import UnmindImage from 'assets/images/unmind.png';
import styled from 'styled-components';
import FadeInUp from 'components/FadeInUp';
import FancyButton from 'components/FancyButton/FancyButton';
import { MdMail } from 'react-icons/md';
import ScrollDownIcon from './ScrollDownIcon';
import { TechIcon, Project } from './types';

export default function WorkLayout(): JSX.Element {
    const Section = styled.section`
        padding: 30px 60px;
        text-align: center;
        position: relative;
    `;

    const Paragraph = styled.p`
        max-width: 600px;
        margin: 0 auto;
        line-height: 2em;
 `;

    const TitleLarge = styled.h1`
        font-size: 2em;
        color: ${props => props.theme.darkGreen};
        margin: 20px auto;
        @media (min-width: 768px) {
        font-size: 3em;
  }
    `;

    const Anchor = styled.a`
        text-decoration: none;
        color: ${props => props.theme.darkGreen};
    `;

    return (
        <>
            <Section>
                <FadeInUp component={<TitleLarge>Recent Work</TitleLarge>} />
                <FadeInUp component={<Paragraph>Here are some projects that I have worked on recently. For more information visit the sites, or to see what personal projects I've been working on check out my <Anchor href="https://github.com/rudyolsson">GitHub.</Anchor></Paragraph>} />
            </Section>
            <FadeInUp component={<ScrollDownIcon />} />

            {projects.map((project, i) => {
                return (
                    <ProjectSection project={{
                        ...project,
                        bgColor: '#FFF',
                    }}
                        key={project.title}
                    />
                )
            })}
            <Section>
                <TitleLarge>Let's Chat</TitleLarge>
                <FadeInUp component={<Anchor href="mailto:rudyolsson.contact@gmail.com"><FancyButton><MdMail /> Message Me</FancyButton></Anchor>} />
                <FadeInUp component={<Paragraph>If you are interested in working together or just feel like saying hey, reach out.</Paragraph>} />
            </Section>
        </>
    )
}


const projects: Project[] = [
    {
        imgURL: UnmindImage,
        title: "Unmind Web and Mobile App",
        description: "A cultural change platform for mental health and wellbeing.",
        skills: "React.js, AWS, GraphQL, JavaScript, Typescript, Node.js, Docker, PostgresSQL",
        siteURL: "https://www.unmind.com",
    },
    {
        imgURL: HIImage,
        title: "Hotel Insights with Google",
        description: "Hotel Insights uses hotel search data to help small and independent hoteliers determine where to target their marketing efforts.",
        skills: "Angular 2+, GCP, NgRx (Redux), RxJs",
        siteURL: "https://hotelinsights.withgoogle.com/intl/en/",

    },
    {
        imgURL: CapGImage,
        title: "CapitalG",
        description: "CapitalG is Alphabet’s independent growth fund. Their portfolio includes companies like AirBnB, Lyft, and Stripe.",
        skills: "Angular 2+, RxJs",
        siteURL: "https://capitalg.com/",

    },
    {
        imgURL: GMSImage,
        title: "Grow My Store with Google",
        description: "Grow My Store performs an assessment of online shops and creates a report offering recommendations for shop owners to improve the customers' shopping experience and accelerate the development of their business.",
        skills: "Angular 2+, GCP, NgRx (Redux), RxJs",
        siteURL: "https://growmystore.thinkwithgoogle.com/",

    },
    {
        imgURL: ArtysImg,
        title: "Artys Music Platform",
        description: "Artys is a music platform and API to discover, vote on, and favourite music. User's can allocate their monthly subscription fee directly to artists with help from a secure blockchain who in turn can give percentages of the songs rights to group members or featured acts.",
        skills: "Angular 2+, MobX, RxJs, : NestJS (Express), ObjectionJS, KnexJS, PostgreSQL, Docker",

    },
    {
        imgURL: UmatchImg,
        title: "UMatch Artist Platform and Admin UIs",
        description: "UIs and API for artists to upload and manage their music on Artys Music as well as a Shapr-like mechanism for collaborating and messaging with other artists.",
        skills: "Angular 2+, MobX, RxJs, : NestJS (Express), ObjectionJS, KnexJS, PostgreSQL, Docker",
    },
    {
        imgURL: FlexoImg,
        title: "Project Management Platform",
        description: "An internal platform and API to manage projects. Highly integrated with the GitLab API in order to create and monitor milestones, issues, and commits. Integration with Slack to collect daily project management. Connected to Google Spreadsheets for transforming client quotes to Agile project breakdowns in GitLab.",
        skills: "Angular 2+, MobX, RxJs, ExpressJS, PostgreSQL, Docker",
    },
    {
        imgURL: TokenUIImg,
        title: "Token Investment Platform",
        description: "API and UI's for administrators and users to buy and sell tokenized resources as well as monitor resources saved to the blockchain.",
        skills: "Angular 2+, NgRx, RxJS,  NestJS (Express), TypeORM, PostgreSQL, Docker",
    },
];

export const imageGroups: TechIcon[][] = [
    [{
        src: 'react.png',
        name: 'ReactJS'
    },
    {
        src: 'angular.png',
        name: 'Angular'
    },
    {
        src: 'nodejs.png',
        name: 'NodeJS',
    },
    {
        src: 'html.png',
        name: 'HTML'
    },
    {
        src: 'css.png',
        name: 'CSS'
    }],
    [{
        src: 'redux.png',
        name: 'Redux'
    },
    {
        src: 'ngrx.png',
        name: 'NgRx'
    },
    {
        src: 'mobx.png',
        name: 'Mobx',
    },
    {
        src: 'nestjs.png',
        name: 'NestJS'
    },
    {
        src: 'mobx.png',
        name: 'MobX'
    }],
    [{
        src: 'javascript.png',
        name: 'JavaScript'
    },
    {
        src: 'typescript.png',
        name: 'TypeScript'
    },
    {
        src: 'sass.png',
        name: 'Sass',
    },
    {
        src: 'postgres.png',
        name: 'PostgreSQL'
    },
    {
        src: 'docker.png',
        name: 'Docker'
    },
    {
        src: 'mongo.png',
        name: 'MongoDB'
    }],
];
