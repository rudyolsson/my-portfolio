import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLElement> {
  component: JSX.Element;
  delay?: number;
  offset?: number;
}

export const FadeIn = ({ component, delay, offset }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: `-${offset || 50}px` }}
      transition={{ duration: 0.4, delay: delay || 0 }}
    >
      {component}
    </motion.div>
  );
};
