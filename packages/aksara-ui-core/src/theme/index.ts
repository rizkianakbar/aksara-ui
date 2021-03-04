import { useTheme as defaultUseTheme } from 'styled-components';
import foundations from './foundations';
import variants from './variants';
import componentStyles from './componentStyles';

export const theme = {
  ...foundations,
  variants,
  componentStyles,
};

export type Theme = typeof theme;

export const useTheme = defaultUseTheme;

export * from './types';
