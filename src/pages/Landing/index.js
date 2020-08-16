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
		HeroSectionImageStyleUltraMobileContainer,
		HeroSectionImageStyleMobileContainer,
		HeroSectionImageStyleTabletContainer,
		HeroSectionImageStyleDesktopContainer,
		HeroSectionImageStyleDesktopHDContainer,
		ActionButtonMobileContainer,
		ActionButtonTabletContainer,
		ActionButtonDesktopContainer
	} from './styles'

import MobileUltraImageAsset from '../../assets/Landing/ultra-mobile/1.svg'
import MobileImageAsset from '../../assets/Landing/mobile/1.svg'
import TabletImageAsset from '../../assets/Landing/tablet/1.svg'
import DesktopImageAsset from '../../assets/Landing/desktop/1.svg'
import DesktopHDImageAsset from '../../assets/Landing/desktophd/1.svg'

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

				{
					// not yet done; will be revisited in the future sprints
				}

				<HeroSectionImageStyleDesktopHDContainer>
					<DesktopHDImageAsset/>
				</HeroSectionImageStyleDesktopHDContainer>
				<HeroSectionImageStyleDesktopContainer>
					<DesktopImageAsset/>
				</HeroSectionImageStyleDesktopContainer>
				<HeroSectionImageStyleTabletContainer>
					<TabletImageAsset/>
				</HeroSectionImageStyleTabletContainer>
				<HeroSectionImageStyleMobileContainer>
					<MobileImageAsset/>
				</HeroSectionImageStyleMobileContainer>
				<HeroSectionImageStyleUltraMobileContainer>
					<MobileUltraImageAsset/>
				</HeroSectionImageStyleUltraMobileContainer>

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