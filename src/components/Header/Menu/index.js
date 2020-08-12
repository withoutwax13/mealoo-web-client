import React, { useState } from 'react'

import BurgerMenu from '../../../assets/BurgerMenu.svg'
import CloseBurgerMenu from '../../../assets/closeBurger.svg'

import Navigation from '../Navigation/index'
import DropNavigation from '../DropNavigation/index'

import { MenuContainer, BurgerMenuContainer, NavigationContainer } from '../styles'

export default () => {

	const [ showMobileNav, toggleShowMobileNav ] = useState(false)

	return (
		<MenuContainer>
			<BurgerMenuContainer onClick={()=>toggleShowMobileNav(!showMobileNav)}>
				{showMobileNav ? <CloseBurgerMenu/> : <BurgerMenu width={30}/>}
			</BurgerMenuContainer>
			<NavigationContainer>
				<Navigation/>
			</NavigationContainer>
			{showMobileNav ? <DropNavigation/> : null}
		</MenuContainer>
	)
}