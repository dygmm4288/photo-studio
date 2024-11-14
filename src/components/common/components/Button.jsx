import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <StButton {...props}>{children}</StButton>;
};

const StButton = styled.button``;

export default Button;
