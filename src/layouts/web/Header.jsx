import { Link } from "react-router-dom";
import Button from "../../components/common/components/Button";
import {
  StHeaderWrapper,
  StNavItem,
  StNavList,
  StNavWrapper,
} from "../../components/layout/styles/header.styles";
import { StHeading3, StHeading3Bold } from "../../css/fonts.styles";

const navMenus = [
  {
    name: "사진관 소개",
    href: "/home",
  },
  {
    name: "오시는길",
    href: "/come",
  },
  {
    name: "히든스팟",
    href: "/hidden-spot",
  },
];

const Header = () => {
  return (
    <StHeaderWrapper>
      <StHeading3Bold>포레스트 픽쳐스</StHeading3Bold>
      <StNavWrapper>
        <StNavList as={"ul"}>
          {navMenus.map((menu) => (
            <StNavItem key={`menu${menu.name}`}>
              <Link href={menu.href}>
                <StHeading3>{menu.name}</StHeading3>
              </Link>
            </StNavItem>
          ))}
          <Button>문의하기</Button>
        </StNavList>
      </StNavWrapper>
    </StHeaderWrapper>
  );
};

export default Header;
