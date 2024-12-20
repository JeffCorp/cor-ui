import React from 'react';
import coronationWhite from './coronation-light.svg';
import { CoronationProps } from './types';

const CoronationWhite = ({ style }: CoronationProps) => {
    return (
        <img src={coronationWhite} alt="Coronation White Logo" style={style} />
    );
};

export default CoronationWhite; 