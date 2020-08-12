import React from 'react'

import Menu from './Menu/index'
import { HeaderContainer, LogoContainer, RightHeaderContainer } from './styles'

import MealooLogo from '../../assets/mealoo-logo.svg'

export default () => {
	return (
		<HeaderContainer>
			<LogoContainer>
				<MealooLogo/>
			</LogoContainer>
			<RightHeaderContainer>
				<Menu/>
			</RightHeaderContainer>
		</HeaderContainer>
	)
}