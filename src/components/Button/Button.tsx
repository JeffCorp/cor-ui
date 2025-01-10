import React from "react";
import "./Button.css";
import { Typography } from "../Fonts";
import { Icon } from "@jeffcorp/cor-ui-icons";
import { Colors } from "../Colors";

interface ButtonProps {
  label?: string;
  labelColor?: string;
  prefixIcon?: React.JSX.Element;
  suffixIcon?: React.JSX.Element;
  background?: string;
  onClick?: (e: any) => void;
  isRounded?: boolean;
  isLoading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button = ({
  label,
  labelColor,
  background,
  prefixIcon,
  suffixIcon,
  isRounded,
  isLoading,
  className,
  onClick,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      style={{
        background,
        color: labelColor ?? Colors.primary.base.white,
        borderRadius: isRounded ? "50%" : "10px",
        height: isRounded ? "44px" : "auto",
        width: isRounded ? "44px" : "auto",
        padding: isRounded ? "8px" : "10px 14px",
        ...style
      }}
      {...props}
    >
      {prefixIcon}
      {label && (
        <Typography style={{ color: labelColor }} fontSize={16} fontWeight={600}>
          {label}
        </Typography>
      )}
      {isLoading ? (
        <Icon
          icon="Loading"
          color={Colors.primary.base.white}
          variant="outline"
          isLoading={isLoading}
        />
      ) : (
        suffixIcon
      )}
    </button>
  );
};

export default Button;
