import React from 'react'

import MainHeading from './MainHeading/index'
import SubHeading from './SubHeading/index'
import ActionButton from './ActionButton/index'

import { HeroSectionMainContent } from './style'

export default () => {
	return (
		<HeroSectionMainContent>
			<MainHeading/>
			<SubHeading/>
			<ActionButton/>
		</HeroSectionMainContent>
	)
}