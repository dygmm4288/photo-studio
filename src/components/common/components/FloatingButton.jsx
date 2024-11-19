import CalendarIcon from "../../../assets/icons/CalendarIcon";
import useMode from "../../../store/useMode";
import * as St from "../styles/common.styles";

const FloatingButton = () => {
  const { mode } = useMode();
  const isMobile = mode === "mobile";
  return (
    <St.FloatingButtonWrapper>
      {<CalendarIcon />}
      {!isMobile && <St.FloatingText>예약하기</St.FloatingText>}
    </St.FloatingButtonWrapper>
  );
};

export default FloatingButton;
