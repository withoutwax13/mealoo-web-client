import React, { useState } from 'react'

import BurgerMenu from '../../../assets/BurgerMenu.svg'

import { MenuContainer, BurgerMenuContainer } from '../styles'

export default () => {

	const [ showMobileNav, toggleShowMobileNav ] = useState(false)
	
	return (
		<MenuContainer>
			<BurgerMenuContainer onClick={()=>{toggleShowMobileNav(!showMobileNav)}}>
				<BurgerMenu width={30}/>
			</BurgerMenuContainer>
		</MenuContainer>
	)
}