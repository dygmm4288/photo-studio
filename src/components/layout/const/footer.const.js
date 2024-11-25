import FaceBookIcon from "../../../assets/icons/FaceBookIcon";
import InstaIcon from "../../../assets/icons/InstaIcon";
import LocationIcon from "../../../assets/icons/LocationIcon";
import MailIcon from "../../../assets/icons/MailIcon";
import NaverIcon from "../../../assets/icons/NaverIcon";
import TelIcon from "../../../assets/icons/TelIcon";
import TimeIcon from "../../../assets/icons/TimeIcon";

export const footerInfos = [
  {
    kind: "location",
    icon: LocationIcon,
    content: "제주도 서귀포시 중문로 123",
  },
  {
    kind: "operating_hours",
    icon: TimeIcon,
    content: "운영 시간: 매일 10:00 ~ 18:00",
  },
  {
    kind: "tel",
    icon: TelIcon,
    content: "064-123-4567",
  },
  {
    kind: "email",
    icon: MailIcon,
    content: "forest_pictures_jeju@forestpictures.com",
  },
];
export const footerSNS = [
  {
    name: "인스타",
    icon: InstaIcon,
    href: "https://www.instagram.com",
  },
  {
    name: "페이스북",
    icon: FaceBookIcon,
    href: "https://www.facebook.com",
  },
  {
    name: "네이버",
    icon: NaverIcon,
    href: "https://naver.com",
  },
];
