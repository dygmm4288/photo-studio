import supabase from "../../../../supabase_login/src/main";
import Input from "../../common/components/Input";
import * as St from "../../home/styles/HomeStyle";
import ImageSection from "../components/ImageSection/ImageSection";
import ReviewSection from "../components/reviewSection/ReviewSection";
import MainSection from "./MainSection";
import ServiceSection from "./ServiceSection";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = () => {
    const api = {email: setEmail, password: setPassword};
  }


  return (
    <St.HomeWrapper>
      <Input type='email' label="email" value={email} />
      <MainSection />
      <ServiceSection />
      <ImageSection />
      <ReviewSection />
    </St.HomeWrapper>
  );
}
