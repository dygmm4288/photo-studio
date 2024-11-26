import * as St from "../../../booking/styles/BookingStyles";
import Input from "../../../common/components/Input";

export default function PersonalInformation() {
  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        예약자 정보를 입력해주세요
      </St.FormSectionDescText>
      <Input label="예약자 이름"></Input>
      <Input label="휴대폰"></Input>
      <Input label="이메일"></Input>
    </St.FromSectionWrapper>
  );
}
