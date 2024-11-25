import MainSection from "./MainSection";
import ServiceSection from "./ServiceSection";
import * as St from "../../home/styles/HomeStyle";
import ImageSection from "../components/ImageSection/ImageSection";
import ReviewSection from "../components/reviewSection/ReviewSection";

export default function Home() {
  return (
    <St.HomeWrapper>
      <MainSection />
      <ServiceSection />
      <ImageSection />
      <ReviewSection />
    </St.HomeWrapper>
  );
}
