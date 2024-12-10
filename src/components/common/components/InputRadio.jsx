import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import * as St from "../styles/common.styles";

const iconValue = {
  size: "1.8rem",
  color: "black",
};

const InputRadio = ({ name, value, id, onChange, checked }) => {
  return (
    <St.RadioLabel htmlFor={name}>
      {checked ? (
        <FaCheckSquare {...iconValue} />
      ) : (
        <FaRegSquare {...iconValue} />
      )}

      <input
        style={{ display: "none" }}
        type="radio"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        checked={checked}
      />
    </St.RadioLabel>
  );
};

export default InputRadio;
