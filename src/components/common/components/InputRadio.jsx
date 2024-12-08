import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import * as St from "../styles/common.styles";

const iconValue = {
  size: "1.8rem",
  color: "black",
};

const InputRadio = ({ name, value, id }) => {
  const isSelected = name === value;
  return (
    <St.RadioLabel htmlFor={id}>
      {isSelected ? (
        <FaCheckSquare {...iconValue} />
      ) : (
        <FaRegSquare {...iconValue} />
      )}
      <input
        style={{ display: "none" }}
        type='radio'
        value={value}
        id={id}
        name={name}
      />
    </St.RadioLabel>
  );
};

export default InputRadio;