import styled from "styled-components";
import MainSection from "./MainSection";
import ServiceSection from "./ServiceSection";

const HomeWrapper = styled.div`
  width: 100%;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <MainSection />
      <ServiceSection />
    </HomeWrapper>
  );
}
