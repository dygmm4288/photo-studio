import { useState } from "react";
import * as St from "../../../booking/styles/BookingStyles";
import Input from "../../../common/components/Input";

export default function PersonalInformation({
  personalInfoValues,
  onChangePersonalInfo,
}) {
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const handleOnChange = (field) => (event) => {
    onChangePersonalInfo(field, event.target.value);

    if (field === "username") {
      if (event.target.value.length >= 10) {
        setErrorMessage((prev) => ({
          ...prev,
          username: "이름은 최대 10자입니다.",
        }));
      } else if (event.target.value.length < 2) {
        setErrorMessage((prev) => ({
          ...prev,
          username: "이름은 최소 2자입니다.",
        }));
      } else if (event.target.value.length < 3) {
        setErrorMessage((prev) => ({
          ...prev,
          username: "",
        }));
      }
    } else if (field === "phone") {
      const regPhone = /^01([0|1|6|7|8|9])([0-9]{4,4})([0-9]{4})$/;
      if (!regPhone.test(event.target.value)) {
        setErrorMessage((prev) => ({
          ...prev,
          phone: "휴대폰 번호를 확인해 주세요.",
        }));
      } else {
        setErrorMessage((prev) => ({
          ...prev,
          phone: "",
        }));
      }
    } else if (field === "email") {
      const regEmail =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!regEmail.test(event.target.value)) {
        setErrorMessage((prev) => ({
          ...prev,
          email: "이메일을 확인해 주세요.",
        }));
      } else {
        setErrorMessage((prev) => ({
          ...prev,
          email: "",
        }));
      }
    }
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
        maxLength={10}
        onChange={handleOnChange("username")}
      />
      <span>{errorMessage.username}</span>
      <Input
        label="휴대폰"
        id="phone"
        placeholder="- 없이 입력해주세요."
        value={personalInfoValues.phone}
        maxLength={11}
        onChange={handleOnChange("phone")}
      />
      <span>{errorMessage.phone}</span>
      <Input
        label="이메일"
        id="email"
        value={personalInfoValues.email}
        onChange={handleOnChange("email")}
      />
      <span>{errorMessage.email}</span>
    </St.FromSectionWrapper>
  );
}
