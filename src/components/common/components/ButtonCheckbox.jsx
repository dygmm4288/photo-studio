import { useId, useState } from "react";
import * as St from "../styles/common.styles";

const ButtonCheckbox = ({
  label,
  id,
  onChange,
  disabled = false,
  ...props
}) => {
  const [isSelected, setSelected] = useState(false);
  const defaultId = useId();

  const handleChange = (e) => {
    if (disabled) return;
    setSelected(e.target.checked);
    if (onChange) onChange(e);
  };

  return (
    <St.ButtonCheckboxWrapper selected={isSelected} disabled={disabled}>
      <St.ButtonCheckbox
        type='checkbox'
        id={id || defaultId}
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
