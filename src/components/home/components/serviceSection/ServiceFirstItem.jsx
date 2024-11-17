import * as St from "../../styles/HomeStyle";

export default function ServiceFirstItem({
  titleSub,
  title,
  description,
  buttonText,
  runAnimation = false,
}) {
  return (
    <St.GridItemWrapper startAnimation={runAnimation}>
      <St.TypoSub>{titleSub}</St.TypoSub>
      <St.ColumnBox gap={5}>
        <St.InfoTitle>{title}</St.InfoTitle>

        <St.ServiceDescription>{description}</St.ServiceDescription>
        {buttonText && <St.InfoButton>{buttonText}</St.InfoButton>}
      </St.ColumnBox>
    </St.GridItemWrapper>
  );
}
