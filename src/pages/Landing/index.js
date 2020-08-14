import React from 'react'

import {
		LandingPageContainer, 
		HeroSectionContainer, 
		FeatureCollectionContainer, 
		FeatureItemContainer,
		ProductTrialContainer
	} from './styles'

export default () => {
	return (
		<LandingPageContainer>
			<HeroSectionContainer>
				HeroSectionContainer
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