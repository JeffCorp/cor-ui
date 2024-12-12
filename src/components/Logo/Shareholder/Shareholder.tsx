import React from 'react';
import shareholderIcon from './shareholder.svg';
import './Shareholder.css';

interface ShareholderProps {
    size?: 'small' | 'large';
    theme?: 'light' | 'dark';
}

const Shareholder: React.FC<ShareholderProps> = ({ 
    size = 'small',
    theme = 'light'
}) => {
    const getImageSrc = () => {
        return shareholderIcon;
    };

    return (
        <div>
            <img 
                src={getImageSrc()} 
                alt="Shareholder"
                className={`shareholder-logo ${size}`}
            />
        </div>
    );
};

export default Shareholder;