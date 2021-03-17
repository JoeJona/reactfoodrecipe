import React from 'react'
import {SideContainer,Icon,CloseIcon,SideBarMenu,SideBarLink,SideBarRoute,
        SideBarBtnWrap} from './SideBarElement';

const SideBar = ({isOpen, toggle}) => {
    return (    
        <SideContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to='/'>Pizzas</SideBarLink>
                <SideBarLink to='/'>Desserets</SideBarLink>
                <SideBarLink to='/'>Full Menu</SideBarLink>
            </SideBarMenu>
            <SideBarBtnWrap>
                <SideBarRoute to='/'>Order Now</SideBarRoute>
            </SideBarBtnWrap>
        </SideContainer>
    )
}
export default SideBar
