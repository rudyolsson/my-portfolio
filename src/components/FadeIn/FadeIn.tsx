import { HTMLAttributes } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props extends HTMLAttributes<HTMLElement> {
  component: JSX.Element;
  delay?: number;
  offset?: number;
}

export const FadeIn = ({ component, delay, offset }: Props) => {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      offset={offset || 50}
      duration={0.4}
      animateOnce={true}
      delay={delay || 0}
    >
      {component}
    </ScrollAnimation>
  );
};
