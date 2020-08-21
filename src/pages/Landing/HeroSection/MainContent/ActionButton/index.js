import React from 'react'

import AuthButton from '../../../../../components/Button/Auth/index'

import {
			HeroSectionActionButtonContainer,
			ActionButtonMobileContainer,
			ActionButtonTabletContainer,
			ActionButtonDesktopContainer,
} from './style'

export default () => {
	return (
		<HeroSectionActionButtonContainer>
			<ActionButtonMobileContainer>
				<AuthButton width={82.955} height={30.682}>
					<h4>JOIN</h4>
				</AuthButton>
			</ActionButtonMobileContainer>
			<ActionButtonTabletContainer>
				<AuthButton width={112.223} height={43.690}>
					<h2>JOIN</h2>
				</AuthButton>
			</ActionButtonTabletContainer>
			<ActionButtonDesktopContainer>
				<AuthButton width={146.159} height={54.479}>
					<h1>JOIN</h1>
				</AuthButton>
			</ActionButtonDesktopContainer>
		</HeroSectionActionButtonContainer>
	)
}