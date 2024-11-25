import * as St from "../../styles/HomeStyle";

export default function ServiceInfo({
  titleSub,
  title,
  bg,
  infoNumber,
  infoText,
  buttonText,
  runAnimation = false,
}) {
  return (
    <St.GridItemWrapper $startAnimation={runAnimation}>
      <St.TypoSub>{titleSub}</St.TypoSub>
      <St.InfoTitle>{title}</St.InfoTitle>
      <St.TypoBox>
        <St.InfoNumber>{String(infoNumber).padStart(2, "0")}</St.InfoNumber>
        <St.ServiceTypo>{infoText}</St.ServiceTypo>
      </St.TypoBox>
      {buttonText && <St.InfoButton>{buttonText}</St.InfoButton>}
      {bg && <St.GridItemWrapperBG bg={bg} />}
    </St.GridItemWrapper>
  );
}
