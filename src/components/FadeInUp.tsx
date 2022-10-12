import React, { HTMLAttributes } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

interface Props extends HTMLAttributes<HTMLElement> {
    component: JSX.Element;
    delay?: number;
    offset?: number;
}

export default function FadeInUp({ component, delay, offset }: Props): JSX.Element {
    return (
        <ScrollAnimation animateIn="fadeInUp" offset={offset || 50} duration={0.8} animateOnce={true} delay={delay || 0}>
            {component}
        </ScrollAnimation>
    )
}
