import { createBox, createText, useTheme as useRestyleTheme } from '@shopify/restyle';
import { AppTheme } from './themeConfig';

export const Box = createBox<AppTheme>();
export const Text = createText<AppTheme>();
export const useTheme = () => useRestyleTheme<AppTheme>();
