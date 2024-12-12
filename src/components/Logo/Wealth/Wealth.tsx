import React from 'react';
import WealthBlack from './WealthBlack';
import WealthWhite from './WealthWhite';

interface WealthProps {
    theme?: 'light' | 'dark';
}

const Wealth: React.FC<WealthProps> = ({ theme = 'light' }) => {
    return theme === 'light' ? <WealthBlack /> : <WealthWhite />;
};

export default Wealth;