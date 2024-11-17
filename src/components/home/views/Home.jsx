import MainSection from "./MainSection";
import ServiceSection from "./ServiceSection";
import * as St from "../../home/styles/HomeStyle";

export default function Home() {
  return (
    <St.HomeWrapper>
      <MainSection />
      <ServiceSection />
    </St.HomeWrapper>
  );
}
