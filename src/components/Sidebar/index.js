import React from "react"
import Profile from "../Profile/index"
import * as S from "./styled"
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks/index';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
)

export default Sidebar
