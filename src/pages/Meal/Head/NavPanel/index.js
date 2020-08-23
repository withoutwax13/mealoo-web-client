import React from 'react'

import { Container } from './style'

import GoBackAsset from '../../../../assets/Meal/goBack.svg'
import ProfileAsset from '../../../../assets/Meal/profile.svg'

const NavPanel = () => {
	return (
		<Container>
			<GoBackAsset style={{cursor: 'pointer'}}/>
			<ProfileAsset style={{cursor: 'pointer'}}/>
		</Container>
	)
}

export default NavPanel