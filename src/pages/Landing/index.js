import React from 'react'

import AuthButton from '../../components/Button/Auth/index'

import {
		LandingPageContainer, 
		HeroSectionContainer, 
		FeatureCollectionContainer, 
		FeatureItemContainer,
		ProductTrialContainer,
		HeroSectionMainContent,
		HeroSectionMainHeading,
		HeroSectionMainHeadingContainer,
		HeroSectionSubHeading,
		HeroSectionSubHeadingContainer,
		HeroSectionActionButtonContainer,
		HeroSectionImageStyle,
		ActionButtonMobileContainer,
		ActionButtonTabletContainer,
		ActionButtonDesktopContainer
	} from './styles'

export default () => {
	return (
		<LandingPageContainer>
			<HeroSectionContainer>
				<HeroSectionMainContent>
					<HeroSectionMainHeadingContainer>
						<HeroSectionMainHeading>
							just eat
						</HeroSectionMainHeading>
					</HeroSectionMainHeadingContainer>
					<HeroSectionSubHeadingContainer>
						<HeroSectionSubHeading>
							WE'LL HANDLE THE REST
						</HeroSectionSubHeading>
					</HeroSectionSubHeadingContainer>
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
				</HeroSectionMainContent>
				<HeroSectionImageStyle>
					SVG IMAGE ASSET HERE
				</HeroSectionImageStyle>
			</HeroSectionContainer>
			<FeatureCollectionContainer>
				<FeatureItemContainer>
					Feature 1
				</FeatureItemContainer>
				<FeatureItemContainer>
					Feature 2
				</FeatureItemContainer>
				<FeatureItemContainer>
					Feature 3
				</FeatureItemContainer>
			</FeatureCollectionContainer>
			<ProductTrialContainer>
				ProductTrialContainer
			</ProductTrialContainer>
		</LandingPageContainer>
	)
}