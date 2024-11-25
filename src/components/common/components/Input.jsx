import * as St from "../styles/common.styles";

const Input = ({ label = "", id, ...props }) => {
  return (
    <St.InputWrapper>
      <St.InputLabel htmlFor={id}>{label}</St.InputLabel>
      <St.InputLine />
      <St.Input id={id} {...props} />
    </St.InputWrapper>
  );
};

export default Input;
