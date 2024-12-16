import supabase from "../../../../supabase_login/src/main";
import * as St from "../../home/styles/HomeStyle";
import ImageSection from "../components/ImageSection/ImageSection";
import ReviewSection from "../components/reviewSection/ReviewSection";
import MainSection from "./MainSection";
import ServiceSection from "./ServiceSection";

export default function Home() {
  console.log("supabase auth", supabase.auth);
  return (
    <St.HomeWrapper>
      <MainSection />
      <ServiceSection />
      <ImageSection />
      <ReviewSection />
    </St.HomeWrapper>
  );
}
