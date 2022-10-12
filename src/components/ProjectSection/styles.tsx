import styled from "styled-components";

interface WrapperProps {
    $bgColor?: string;
}

export const Wrapper = styled.section<WrapperProps>`
    padding: 70px 30px;
    text-align: center;
    align-items: center;
    background-color: ${props => props.$bgColor};
    color: #000;
`;


export const ScreenShot = styled.img`
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

export const Title = styled.h1`
    font-weight: bold;
    font-size: 1.7em;
    @media (min-width: 567px) {
        font-size: 2em;
    }
`;

export const Paragraph = styled.p`
    max-width: 700px;
    margin: 20px auto;
    font-size: 1.25em;
    `;

export const Tech = styled.p`
    font-size: 0.75em;
    margin: 5px 0 0 0;
`;

export const Link = styled.a`
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