declare module 'react-scroll' {
  import { ComponentType, ReactNode } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    children: ReactNode;
    [key: string]: any;
  }

  export interface ElementProps {
    id: string;
    name: string;
    children: ReactNode;
    [key: string]: any;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<ElementProps>;
}
