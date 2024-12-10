import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/components/Button";
import { navMenus } from "../../components/layout/const/header.const";
import * as St from "../../components/layout/styles/header.styles";
import useHeader from "../../store/useHeader";
import useResponsive from "../../components/home/hooks/useResponsive";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import InstaIcon from "../../assets/icons/InstaIcon";
import FaceBookIcon from "../../assets/icons/FaceBookIcon";
import NaverIcon from "../../assets/icons/NaverIcon";
import { FaX } from "react-icons/fa6";

const Header = () => {
  const navi = useNavigate();
  const location = useLocation();
  const { isTouched } = useHeader();
  const { isMobile } = useResponsive();

  const handleRouting = (route) => {
    navi(`/${route.replace("/", "")}`);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleSideBarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <St.Header isTouched={isTouched}>
      {isMobile && (
        <St.SideMenuWrapper $isOpen={isOpen}>
          <St.SideMenuList>
            {navMenus.map((menu) => (
              <St.SideMenu
                onClick={() => handleRouting(menu.href)}
                key={`menu${menu.name}`}>
                {menu.name}
              </St.SideMenu>
            ))}
            <St.SideBarButton onClick={() => handleRouting("booking")}>
              예약하기
            </St.SideBarButton>
          </St.SideMenuList>
          <St.SideBarLinkSection>
            <p>포레스트 픽처스</p>
            <hr />
            <St.SideBarLinkIconBox>
              <InstaIcon />
              <FaceBookIcon />
              <NaverIcon />
            </St.SideBarLinkIconBox>
          </St.SideBarLinkSection>
        </St.SideMenuWrapper>
      )}
      <St.HeaderWrapper>
        <St.HeaderLogo>
          <Link to="/home">포레스트 픽처스</Link>
        </St.HeaderLogo>
        {isMobile ? (
          isOpen ? (
            <FaX
              size={24}
              color="#fff"
              cursor="pointer"
              onClick={handleSideBarToggle}
            />
          ) : (
            <FaBars
              size={28}
              color="#fff"
              cursor="pointer"
              onClick={handleSideBarToggle}
            />
          )
        ) : (
          <St.NavWrapper>
            <St.NavList as={"ul"}>
              {navMenus.map((menu) => (
                <St.NavItem
                  key={`menu${menu.name}`}
                  isActive={location.pathname === menu.href}>
                  <Link to={menu.href}>{menu.name}</Link>
                </St.NavItem>
              ))}
              <Button>문의하기</Button>
            </St.NavList>
          </St.NavWrapper>
        )}
      </St.HeaderWrapper>
    </St.Header>
  );
};

export default Header;
