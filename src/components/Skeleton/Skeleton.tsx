import React from 'react';
import './Skeleton.module.css';

interface SkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  style,
}) => {
  const baseStyle: React.CSSProperties = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1em' : '100%'),
    ...style,
  };

  return (
    <div
      className={`skeleton ${variant}`}
      style={baseStyle}
      role="status"
      aria-label="loading"
    >
      <div className="shimmer" />
    </div>
  );
};

export default Skeleton;