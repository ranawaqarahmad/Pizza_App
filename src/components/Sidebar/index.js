import { Fragment } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Fragment>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/home">Pizzas</SidebarLink>
          <SidebarLink to="/home">Desserts</SidebarLink>
          <SidebarLink to="/home">Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/home">Order Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </Fragment>
  );
};

export default Sidebar;
