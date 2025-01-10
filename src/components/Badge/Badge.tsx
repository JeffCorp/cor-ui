import React from "react";
import "./Badge.css";
import { Typography } from "../Fonts";
import { Icon } from "@jeffcorp/cor-ui-icons";
import { Colors } from "../Colors";

interface BadgeProps {
  type?: "default" | "leftIcon" | "rightIcon" | "textOnly";
  style?: "outline" | "bold" | "subtle";
  size?: "large" | "medium" | "small";
  color?: "purple" | "yellow" | "red" | "green" | "neutral";
  icon?: string;
//   iconColor?: string;
  isLoading?: boolean;
  child: React.ReactNode;
}

const Badge = ({
  type,
  style,
  size,
  color = "neutral",
  child,
  icon,
  isLoading,
//   iconColor,
}: BadgeProps) => {
  let cssStyle = {};
  const colorWheel = {
    purple: {
      background: "#B580D1",
    },
    yellow: {
      background: "#FFDA25",
    },
    red: {
      background: "#FF0226",
    },
    green: {
      background: "#73C934",
    },
    neutral: {
      background: "#242529",
    },
  };

  if (style === "outline") {
    cssStyle = {
      border: style === "outline" ? `1px solid ${colorWheel[color].background}` : "none",
      color: colorWheel[color].background,
      backgroundColor: Colors.primary.base.white
    };
  } else if (style === "subtle") {
    cssStyle = {
      backgroundColor: `${colorWheel[color].background}59`,
      color: colorWheel[color].background,
    };
  }

  return (
    <div className={`badge ${type} ${size} ${color} ${style}`} style={cssStyle}>
      {type === "leftIcon" && (
        <Icon
          icon={isLoading ? "circle-dashed" : icon ?? ""}
          isLoading={isLoading}
          variant="outline"
          color={colorWheel[color].background ?? ""}
        />
      )}
      <Typography fontSize={12}>{child}</Typography>
      {type === "rightIcon" && (
        <Icon
          icon={isLoading ? "spinner" : icon ?? ""}
          isLoading={isLoading}
          variant="outline"
          color={colorWheel[color].background ?? ""}
        />
      )}
    </div>
  );
};

export default Badge;
