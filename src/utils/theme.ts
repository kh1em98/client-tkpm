import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '1280px',
  '2xl': '96em',
});

const colors = {
  primary: {
    100: '#BEE3F8',
    200: '#90CDF4',
    300: '#63B3ED',
    400: '#4299E1',
    500: '#3182CE',
    600: '#2B6CB0',
    700: '#2C5282',
    800: '#2A4365',
    900: '#1A365D',
  },
};

const fonts = {
  heading: 'Open Sans',
  body: 'Open Sans',
};

const customTheme = extendTheme({ colors, breakpoints, fonts });

export default customTheme;
