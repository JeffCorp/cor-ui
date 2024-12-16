import React from 'react';
import './Fonts.css';

export type FontWeight = 100 | 300 | 400 | 700 | 900;
export type FontStyle = 'normal' | 'italic';

export interface FontProps {
  weight?: FontWeight;
  style?: FontStyle;
}

// Export font family constant
export const FONT_FAMILY = 'Lato';

// Export utility functions for font usage
export const getFontClass = (weight: FontWeight = 400, style: FontStyle = 'normal'): string => {
  return `${FONT_FAMILY}-${weight}${style === 'italic' ? 'Italic' : ''}`;
};

// Export font configuration for documentation
export const fontWeights = {
  thin: 100,
  light: 300, 
  regular: 400,
  bold: 700,
  black: 900,
} as const;

// Export available font configurations
export const availableFonts = [ 
  { weight: 100, style: 'normal', name: 'Lato-Thin' },
  { weight: 100, style: 'italic', name: 'Lato-ThinItalic' },
  { weight: 300, style: 'normal', name: 'Lato-Light' },
  { weight: 300, style: 'italic', name: 'Lato-LightItalic' },
  { weight: 400, style: 'normal', name: 'Lato-Regular' },
  { weight: 400, style: 'italic', name: 'Lato-Italic' },
  { weight: 700, style: 'normal', name: 'Lato-Bold' },
  { weight: 700, style: 'italic', name: 'Lato-BoldItalic' },
  { weight: 900, style: 'normal', name: 'Lato-Black' },
  { weight: 900, style: 'italic', name: 'Lato-BlackItalic' },
] as const;

// Export CSS path for external usage
export const FONTS_CSS_PATH = 'components/Fonts/Fonts.css'; 