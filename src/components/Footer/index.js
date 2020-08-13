import React from 'react'

import FooterLogo from '../../assets/footer-logo.svg'

import { 
		FooterContainer, 
		TextFooterSectionContainer,
		NonTextSectionContainer,
		LogoContainer,
		FooterNavItemsContainer,
		CopyrightTextContainer,
		NavLink 
	} from './styles'

export default () => {
	return (
		<FooterContainer>
			<TextFooterSectionContainer>
				<FooterNavItemsContainer>
					<NavLink to='/help'>Help</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/contact-us'>Contact</NavLink>
				</FooterNavItemsContainer>
				<CopyrightTextContainer>
					<p id='copyright'>
						Copyright © 2020 Mealoo Code Team
					</p>
				</CopyrightTextContainer>
			</TextFooterSectionContainer>
			<NonTextSectionContainer>
				<LogoContainer>
					<FooterLogo/>
				</LogoContainer>
			</NonTextSectionContainer>
		</FooterContainer>
	)
}