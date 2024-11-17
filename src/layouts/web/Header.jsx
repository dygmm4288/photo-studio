import { Link } from "react-router-dom";
import Button from "../../components/common/components/Button";
import * as St from "../../components/layout/styles/header.styles";

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
    <St.HeaderWrapper>
      <St.HeaderLogo>포레스트 픽쳐스</St.HeaderLogo>
      <St.NavWrapper>
        <St.NavList as={"ul"}>
          {navMenus.map((menu) => (
            <St.NavItem key={`menu${menu.name}`}>
              <Link href={menu.href}>
                <div>{menu.name}</div>
              </Link>
            </St.NavItem>
          ))}
          <Button>문의하기</Button>
        </St.NavList>
      </St.NavWrapper>
    </St.HeaderWrapper>
  );
};

export default Header;
