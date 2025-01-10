import React from 'react';
import './Fonts.css';
import { Colors } from '../Colors';

export interface FontDisplayProps {
  children?: React.ReactNode;
  fontWeight?: number | 'normal' | 'bold';
  fontStyle?: 'normal' | 'italic';
  fontSize?: number;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  style?: React.CSSProperties;
}

const Typography = ({
  children = '',
  fontWeight = 'normal',
  fontStyle = 'normal',
  fontSize = 16,
  component = 'span',
  className,
  style,
}: FontDisplayProps) => {
  const fontStyles: React.CSSProperties = {
    fontFamily: 'Lato',
    fontWeight: fontWeight === 'bold' ? 700 : 400,
    fontStyle,
    fontSize: `${fontSize}px`,
    color: Colors.primary.base.black,
    ...style,
  };

  switch (component) {
    case 'h1':
      return (
        <h1 style={fontStyles} className={className}>{children}</h1>
      );
    case 'h2':
      return (
        <h2 style={fontStyles} className={className}>{children}</h2>
      );
    case 'h3':
      return (
        <h3 style={fontStyles} className={className}>{children}</h3>
      );
    case 'h4':
      return (
        <h4 style={fontStyles} className={className}>{children}</h4>
      );
    case 'h5':
      return (
        <h5 style={fontStyles} className={className}>{children}</h5>
      );
    case 'h6':
      return (
        <h6 style={fontStyles} className={className}>{children}</h6>
      );
    case 'p':
      return (
        <p style={fontStyles} className={className}>{children}</p>
      );
    default:
      return (
        <span style={fontStyles} className={className}>{children}</span>
      );
  }
};

export default Typography;
