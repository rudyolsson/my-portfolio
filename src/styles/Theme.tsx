import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    charcoal: string;
    lightGreen: string;
    mediumGreen: string;
    darkGreen: string;
    darkBlue: string;
  }
}

export const theme: DefaultTheme = {
  charcoal: 'rgba(53, 53, 53, 1)',
  lightGreen: '#e0ebe8',
  mediumGreen: '#45b29a',
  darkGreen: '#1e836c',
  darkBlue: '#2b3d51',
};
