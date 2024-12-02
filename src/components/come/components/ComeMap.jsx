import Button from "../../common/components/Button";
import Input from "../../common/components/Input";
import useComePage from "../hooks/useComePage";
import * as St from "../styles/ComeStyle";
import KakaoMap from "./KakaoMap";

const ComeMap = () => {
  const { formData, handleChangeFormData, handleSearch } = useComePage();

  return (
    <St.ComeMapWrapper>
      <St.ComeMapForm onSubmit={handleSearch}>
        <Input
          label="출발"
          value={formData.start}
          onChange={handleChangeFormData("start")}
        />
        <Input
          label="도착"
          value={formData.end}
          onChange={handleChangeFormData("end")}
        />
        <St.ComeMapButtonWrapper>
          <Button type="submit">길찾기</Button>
        </St.ComeMapButtonWrapper>
      </St.ComeMapForm>
      <KakaoMap />
    </St.ComeMapWrapper>
  );
};

export default ComeMap;
