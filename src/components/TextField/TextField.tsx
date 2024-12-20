import React, { useState } from "react";
import "./TextField.css";
import { Typography } from "../Fonts";
import { Icon } from "../Icons";
import { Colors } from "../Colors";

interface HelperTextProps {
  text?: string;
  color?: string;
}

interface SelectorPrefixProps {
  default: string;
  list: { label: string; value: string }[];
}

interface TextFieldProps {
  type: string;
  isPassword?: boolean;
  placeholder?: string;
  label?: HelperTextProps;
  hint?: HelperTextProps;
  selectorPrefix: SelectorPrefixProps;
  select: SelectorPrefixProps;
  outlineColor: string;
  backgroundColor: string;
  prefixIcon?: React.JSX.Element;
  suffixIcon?: React.JSX.Element;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
}

const TextField = ({
  type = "text",
  placeholder,
  label,
  hint,
  outlineColor,
  backgroundColor,
  selectorPrefix,
  select,
  prefixIcon,
  suffixIcon,
  onChange,
  style,
  ...props
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div>
      {/* {(type === "password" ?? label) && ( */}
        <Typography style={{ color: label?.color }}>
          {type === "password" ? "Password" : label?.text}
        </Typography>
      {/* )} */}
      {select ? (
        <div>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`input-wrapper ${isFocused ? "focused" : ""} ${
              select ? "clickable" : ""
            }`}
            style={{ borderColor: outlineColor, background: backgroundColor }}
          >
            {prefixIcon && (
              <div className="input-prefix-icon">{prefixIcon}</div>
            )}
            <div>
              <Typography>{select.default}</Typography>
            </div>
            <div className="input-prefix-icon">
              <Icon
                icon="caret-down"
                variant="outline"
                color={Colors.primary.gray.neutral500}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          </div>
          {isDropdownOpen && (
            <div
              style={{
                background: Colors.primary.base.white,
                borderRadius: "8px",
                position: "fixed",
                border: `1px solid ${Colors.primary.gray.neutral200}`,
                minWidth: "200px"
              }}
            >
              {select.list.map((item, i) => (
                <div className="clickable selector-item" key={i} style={{ padding: "10px", width: "200px" }}>
                  <Typography>{item.label}</Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className={`input-wrapper ${isFocused ? "focused" : ""} ${
            select ? "clickable" : ""
          }`}
          style={{ borderColor: outlineColor, background: backgroundColor }}
        >
          {type === "password" ? (
            <div className="input-prefix-icon">
              <Icon
                icon="lock"
                variant="outline"
                color={Colors.primary.gray.neutral500}
              />
            </div>
          ) : selectorPrefix ? (
            <div className="input-prefix-icon">
              <select>
                {selectorPrefix.list.map((item, i) => (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            prefixIcon && <div className="input-prefix-icon">{prefixIcon}</div>
          )}
          <input
            type={
              type === "password"
                ? isPasswordOpen
                  ? "password"
                  : "text"
                : type
            }
            placeholder={placeholder}
            className="input-field"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
            {...props}
          />
          {select ? (
            <div className="input-prefix-icon">
              <Icon
                icon="caret-down"
                variant="outline"
                color={Colors.primary.gray.neutral500}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          ) : type === "password" ? (
            <div className="input-prefix-icon">
              <Icon
                icon={!isPasswordOpen ? "eye" : "eye-slash"}
                variant="outline"
                color={Colors.primary.gray.neutral500}
                onClick={() => setIsPasswordOpen(!isPasswordOpen)}
              />
            </div>
          ) : (
            suffixIcon && <div className="input-suffix-icon">{suffixIcon}</div>
          )}
        </div>
      )}
      {hint && (
        <Typography fontSize={14} style={{ color: hint?.color }}>
          {hint.text}
        </Typography>
      )}
    </div>
  );
};

export default TextField;
