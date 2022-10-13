import ArtysImg from 'assets/images/artys-screens.png';
import UmatchImg from 'assets/images/umatch-three-screens.png';
import FlexoImg from 'assets/images/flexo-three-screens.png';
import TokenUIImg from 'assets/images/token-admin-ui.png';
import HIImage from 'assets/images/hotel-insights.png';
import CapGImage from 'assets/images/capital-g.png';
import GMSImage from 'assets/images/gms.png';
import UnmindImage from 'assets/images/unmind.png';
import { Project } from 'types/interfaces';

export const projects: Project[] = [
    {
        imgURL: UnmindImage,
        title: "Unmind Web and Mobile App",
        description: "A cultural change platform for mental health and wellbeing.",
        skills: "React.js, AWS, GraphQL, JavaScript, Typescript, Infrastructure As Code (IaC), Node.js, Docker, PostgresSQL, Nest.js (Apollo), Prisma",
        siteURL: "https://www.unmind.com",
    },
    {
        imgURL: HIImage,
        title: "Hotel Insights with Google",
        description: "Hotel Insights uses hotel search data to help small and independent hoteliers determine where to target their marketing efforts.",
        skills: "Angular 2+, GCP, NgRx (Redux), JavaScript, Typescript, RxJs, Python3",
        siteURL: "https://hotelinsights.withgoogle.com/intl/en/",

    },
    {
        imgURL: CapGImage,
        title: "CapitalG",
        description: "CapitalG is Alphabet’s independent growth fund. Their portfolio includes companies like AirBnB, Lyft, and Stripe.",
        skills: "Angular 2+, RxJs, GCP, JavaScript, Typescript, Python3",
        siteURL: "https://capitalg.com/",

    },
    {
        imgURL: GMSImage,
        title: "Grow My Store with Google",
        description: "Grow My Store performs an assessment of online shops and creates a report offering recommendations for shop owners to improve the customers' shopping experience and accelerate the development of their business.",
        skills: "Angular 2+, GCP, NgRx (Redux), RxJs, JavaScript, Typescript, Python3",
        siteURL: "https://growmystore.thinkwithgoogle.com/",

    },
    {
        imgURL: ArtysImg,
        title: "Artys Music Platform",
        description: "Artys is a music platform and API to discover, vote on, and favourite music. User's can allocate their monthly subscription fee directly to artists with help from a secure blockchain who in turn can give percentages of the songs rights to group members or featured acts.",
        skills: "Angular 2+, MobX, RxJs, Nest.js (Express), Objection.js, Knex.js, PostgreSQL, Docker",

    },
    {
        imgURL: UmatchImg,
        title: "UMatch Artist Platform and Admin UIs",
        description: "UIs and API for artists to upload and manage their music on Artys Music as well as a Shapr-like mechanism for collaborating and messaging with other artists.",
        skills: "Angular 2+, MobX, RxJs, Nest.js (Express), Objection.js, Knex.js, PostgreSQL, Docker",
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
        skills: "Angular 2+, NgRx, RxJS,  Nest.js (Express), TypeORM, PostgreSQL, Docker",
    },
];
