import { useState } from "react";
import * as St from "../../../booking/styles/BookingStyles";
import Input from "../../../common/components/Input";
import { useBookingStore } from "../../store/useBookingStore";

export default function PersonalInformation() {
  const { personalInfo, setPersonalInfo } = useBookingStore();
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });

    if (name === "username") {
      const regUsername = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;

      if (regUsername.test(value)) {
        setErrorMessage((prev) => ({
          ...prev,
          username: "특수문자는 사용할 수 없습니다.",
        }));
      } else if (value.length >= 10) {
        setErrorMessage((prev) => ({
          ...prev,
          username: "이름은 최대 10자입니다.",
        }));
      } else if (value.length < 2) {
        setErrorMessage((prev) => ({
          ...prev,
          username: "이름은 최소 2자입니다.",
        }));
      } else if (value.length < 3) {
        setErrorMessage((prev) => ({
          ...prev,
          username: "",
        }));
      }
    } else if (name === "phone") {
      const regPhone = /^01([0|1|6|7|8|9])([0-9]{4,4})([0-9]{4})$/;
      if (!regPhone.test(value)) {
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
    } else if (name === "email") {
      const regEmail =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!regEmail.test(value)) {
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
        name="username"
        value={personalInfo.username}
        maxLength={10}
        onChange={handleOnChange}
      />
      <span>{errorMessage.username}</span>
      <Input
        label="휴대폰"
        id="phone"
        name="phone"
        placeholder="- 없이 입력해주세요."
        value={personalInfo.phone || ""}
        maxLength={11}
        onChange={handleOnChange}
      />
      <span>{errorMessage.phone}</span>
      <Input
        label="이메일"
        id="email"
        name="email"
        value={personalInfo.email || ""}
        onChange={handleOnChange}
      />
      <span>{errorMessage.email}</span>
    </St.FromSectionWrapper>
  );
}
