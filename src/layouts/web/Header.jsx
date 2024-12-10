import { Link, useLocation } from "react-router-dom";
import Button from "../../components/common/components/Button";
import { navMenus } from "../../components/layout/const/header.const";
import * as St from "../../components/layout/styles/header.styles";
import useHeader from "../../store/useHeader";

const Header = () => {
  const { isTouched } = useHeader();
  const location = useLocation();
  return (
    <St.Header $isTouched={isTouched}>
      <St.HeaderWrapper>
        <St.HeaderLogo>
          <Link to='/home'>포레스트 픽쳐스</Link>
        </St.HeaderLogo>
        <St.NavWrapper>
          <St.NavList as={"ul"}>
            {navMenus.map((menu) => (
              <St.NavItem
                key={`menu${menu.name}`}
                $isActive={location.pathname === menu.href}>
                <Link to={menu.href}>{menu.name}</Link>
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
