import { useNavigate } from "react-router";
import CalendarIcon from "../../../assets/icons/CalendarIcon";
import useMode from "../../../store/useMode";
import * as St from "../styles/common.styles";

const FloatingButton = () => {
  const { mode } = useMode();
  const isMobile = mode === "mobile";
  const navigate = useNavigate();

  return (
    <St.FloatingButtonWrapper>
      {<CalendarIcon />}
      {!isMobile && (
        <St.FloatingText onClick={() => navigate("/booking")}>
          예약하기
        </St.FloatingText>
      )}
    </St.FloatingButtonWrapper>
  );
};

export default FloatingButton;
