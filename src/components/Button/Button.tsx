import React from "react";
import "./Button.css";
import { Typography } from "../Fonts";
import { Icon } from "../Icons";
import { Colors } from "../Colors";

interface ButtonProps {
  label?: string;
  prefixIcon?: React.JSX.Element;
  suffixIcon?: React.JSX.Element;
  background?: string;
  onClick?: (e: any) => void;
  isRounded?: boolean;
  isLoading?: boolean;
}

const Button = ({
  label,
  background,
  prefixIcon,
  suffixIcon,
  isRounded,
  isLoading,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{
        background,
        borderRadius: isRounded ? "50%" : "10px",
        height: isRounded ? "44px" : "auto",
        width: isRounded ? "44px" : "auto",
        padding: isRounded ? "8px" : "10px 14px",
      }}
    >
      {prefixIcon}
      {label && (
        <Typography fontSize={16} fontWeight={600}>
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
