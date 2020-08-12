import React from 'react'

import Menu from './Menu/index'

import { HeaderContainer, LogoContainer, NavigationContainer } from './styles'

export default () => {
	return (
		<HeaderContainer>
			<LogoContainer>
				Mealoo Logo
			</LogoContainer>
			<NavigationContainer>
				<Menu/>
			</NavigationContainer>
		</HeaderContainer>
	)
}