import * as St from "../styles/common.styles";

const Button = ({ theme = "primary", children, ...props }) => {
  return (
    <St.Button theme={theme} {...props}>
      {children}
    </St.Button>
  );
};

export default Button;
