import React from 'react';
import './Fonts.css';

export interface FontDisplayProps {
  text?: string;
  fontWeight?: 'normal' | 'bold';
  fontStyle?: 'normal' | 'italic';
  fontSize?: number;
}

const FontDisplay = ({
  text = 'Lato Font Example',
  fontWeight = 'normal',
  fontStyle = 'normal',
  fontSize = 16
}: FontDisplayProps) => {
  const fontStyles: React.CSSProperties = {
    fontFamily: 'Lato',
    fontWeight: fontWeight === 'bold' ? 700 : 400,
    fontStyle,
    fontSize: `${fontSize}px`
  };

  return (
    <div style={fontStyles}>
      {text}
    </div>
  );
};

export default FontDisplay;
