import React, { FC } from "react";
import ConditionalRender from "../ConditionalRender";

interface InputProps {
  name: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, string>;
  placeholder?: string;
  type?: string;
  label?: string;
}

const Input: FC<InputProps> = ({
  name,
  value,
  handleChange,
  errors = {},
  placeholder,
  type,
  label
}) => {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </label>
      <ConditionalRender visible={Boolean(errors?.[name])}>
        <span>{errors?.[name]}</span>
      </ConditionalRender>
    </div>
  );
};

export default Input;
