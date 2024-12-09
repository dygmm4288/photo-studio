import { useId } from "react";
import * as St from "../styles/common.styles";

const ButtonCheckbox = ({
  label,
  id,
  onChange,
  checked = false,
  disabled = false,
  ...props
}) => {
  const defaultId = useId();

  const handleChange = (e) => {
    if (disabled) return;
    if (onChange) onChange(e);
  };

  return (
    <St.ButtonCheckboxWrapper selected={checked} disabled={disabled}>
      <St.ButtonCheckbox
        type="checkbox"
        id={id || defaultId}
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <St.ButtonCheckboxLabel htmlFor={id || defaultId}>
        {label}
      </St.ButtonCheckboxLabel>
    </St.ButtonCheckboxWrapper>
  );
};

export default ButtonCheckbox;
