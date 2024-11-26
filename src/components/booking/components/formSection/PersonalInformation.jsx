import * as St from "../../../booking/styles/BookingStyles";
import Input from "../../../common/components/Input";

export default function PersonalInformation({
  personalInfoValues,
  onChangePersonalInfo,
}) {
  const handleOnChange = (field) => (event) => {
    onChangePersonalInfo(field, event.target.value);
  };
  return (
    <St.FromSectionWrapper>
      <St.FormSectionDescText>
        예약자 정보를 입력해주세요
      </St.FormSectionDescText>
      <Input
        label="예약자 이름"
        id="username"
        value={personalInfoValues.username}
        onChange={handleOnChange("username")}
      />
      <Input
        label="휴대폰"
        id="phone"
        placeholder="- 없이 입력해주세요."
        value={personalInfoValues.phone}
        onChange={handleOnChange("phone")}
      />
      <Input
        label="이메일"
        id="email"
        value={personalInfoValues.email}
        onChange={handleOnChange("email")}
      />
    </St.FromSectionWrapper>
  );
}
