import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${props => props.theme.lightGreen};
    text-align:center;
    height: 250px;
    padding-top: 100px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 35px;
    z-index: 1000;
`;

export const TitleBlack = styled.span`
    margin-right: 7px;
`;

export const TitleGreen = styled.span`
    color: ${props => props.theme.darkGreen};
`;

export const Subtitle = styled.p`
    margin-bottom: 50px;
    margin-top: 10px;
`;