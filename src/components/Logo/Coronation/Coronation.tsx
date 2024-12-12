import React from 'react';
import CoronationBlack from './CoronationBlack';
import CoronationWhite from './CoronationWhite';

interface CoronationProps {
    theme?: 'light' | 'dark';
}

const Coronation: React.FC<CoronationProps> = ({ theme = 'light' }) => {
    return theme === 'light' ? <CoronationBlack /> : <CoronationWhite />;
};

export default Coronation;