import React, { useState } from 'react'

import BurgerMenu from '../../../assets/BurgerMenu.svg'

import Navigation from '../Navigation/index'

import { MenuContainer, BurgerMenuContainer, NavigationContainer } from '../styles'

export default () => {

	const [ showMobileNav, toggleShowMobileNav ] = useState(false)

	return (
		<MenuContainer>
			<BurgerMenuContainer onClick={()=>{toggleShowMobileNav(!showMobileNav)}}>
				<BurgerMenu width={30}/>
			</BurgerMenuContainer>
			<NavigationContainer>
				<Navigation/>
			</NavigationContainer>
		</MenuContainer>
	)
}