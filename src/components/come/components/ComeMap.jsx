import ErrorBoundaryWithNavigate from "../../common/components/ErrorBoundary";
import * as St from "../styles/ComeStyle";
import KakaoMap from "./KakaoMap";

const ComeMap = () => {
  return (
    <St.ComeMapWrapper>
      <ErrorBoundaryWithNavigate>
        <KakaoMap />
      </ErrorBoundaryWithNavigate>
    </St.ComeMapWrapper>
  );
};

export default ComeMap;
