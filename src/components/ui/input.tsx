import React from "react";

import inputClass from "./input.module.css";

// const inputTypes = ["text", "number"];
const sizes = ["input--medium", "input--large"];
const variantTypes = ["outlined", "filled", "standard"];
export type InputType =
  | "text"
  | "email"
  | "select"
  | "file"
  | "radio"
  | "checkbox"
  | "textarea"
  | "button"
  | "reset"
  | "submit"
  | "date"
  | "datetime-local"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "range"
  | "search"
  | "tel"
  | "url"
  | "week"
  | "password"
  | "datetime"
  | "time"
  | "color";

interface InputProps {
  inputStyle?: string;
  inputSize?: (typeof sizes)[number];
  children?: string;
  placeholder?: string;
  name: string;
  type: InputType;
  value?: string | number;
  disabled?: boolean;
  inputProps?: {
    max?: number;
    min?: number;
    maxlength?: number;
    minlength?: number;
  };
  variant?: (typeof variantTypes)[number];
}
const Input: React.FC<InputProps> = ({
  inputStyle = "",
  inputSize = "",
  children,
  placeholder,
  name,
  type,
  value,
  disabled,
  inputProps,
  variant = "",
}) => {
  const checkinputsize = sizes.includes(inputSize) ? inputSize : sizes[0];

  const checkvariantstyle = variantTypes.includes(variant)
    ? variant
    : variantTypes[0];
  const handleOnChange = () => {};
  return (
    <input
      className={`${inputClass.input} ${inputClass[checkinputsize]} ${inputClass[checkvariantstyle]}`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      disabled={disabled}
      max={inputProps?.max}
      maxLength={inputProps?.max}
      min={inputProps?.min}
      minLength={inputProps?.minlength}
    >
      {children}
    </input>
  );
};

export default Input;
