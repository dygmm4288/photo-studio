import { Link } from "react-router-dom";
import Button from "../../components/common/components/Button";
import { navMenus } from "../../components/layout/const/header.const";
import * as St from "../../components/layout/styles/header.styles";

const Header = () => {
  return (
    <St.Header>
      <St.HeaderWrapper>
        <St.HeaderLogo>포레스트 픽쳐스</St.HeaderLogo>
        <St.NavWrapper>
          <St.NavList as={"ul"}>
            {navMenus.map((menu) => (
              <St.NavItem key={`menu${menu.name}`}>
                <Link href={menu.href}>{menu.name}</Link>
              </St.NavItem>
            ))}
            <Button>문의하기</Button>
          </St.NavList>
        </St.NavWrapper>
      </St.HeaderWrapper>
    </St.Header>
  );
};

export default Header;
