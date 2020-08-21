import React from 'react'

import ImageUI from './ImageUI/index'
import MainContent from './MainContent/index'

import { HeroSectionContainer } from './style'

export default () => {
	return (
		<HeroSectionContainer>
			<MainContent/>
			<ImageUI/>
		</HeroSectionContainer>
	)
}