import React from "react";
import { IconMapFill } from './iconMapFill';
import { IconMapOutline } from './IconMapOutline'
import "./Icon.css"

export interface IconProps {
    icon: string;
    variant: 'outline' | 'fill';
    color: string;
    isLoading?: boolean;
    style?: React.CSSProperties;
    onClick?: (e: any) => void;
    size?: string;
}

const Icon = ({ icon, variant, color, isLoading, style, size, onClick }: IconProps) => {
    return (
        <div 
            onClick={onClick}
            className={isLoading ? "spinner" : ""}
            style={{ 
                WebkitMaskImage: `url(${variant === 'outline' ? IconMapOutline[icon] : IconMapFill[icon]})`,
                WebkitMaskRepeat: 'no-repeat',
                backgroundColor: color,
                width: size ?? "24px",
                height: size ?? "24px",
                ...style 
            }} 
        />
    );
}

export default Icon;
