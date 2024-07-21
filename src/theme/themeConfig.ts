import { BaseTheme } from '@shopify/restyle';

const palette = {
  primary: '#007BFF',
  white: '#FFFFFF',
  black: '#000000',
  error: '#FF0000',
  background: '#F0F0F0',
  border: '#DDDDDD',
  text: '#333333',
  placeholder: '#999999',
};

const theme = {
  colors: {
    primary: palette.primary,
    white: palette.white,
    black: palette.black,
    error: palette.error,
    background: palette.background,
    border: palette.border,
    text: palette.text,
    placeholder: palette.placeholder,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
  },
  textVariants: {
    body: {
      fontSize: 16,
      color: 'text',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: 'black',
    },
    errorText: {
      fontSize: 14,
      fontWeight: '500',
      color: 'error',
    },
  },
  borderRadii: {
    m: 8,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
};

export type AppTheme = typeof theme & BaseTheme;
export default theme;
