import React from 'react'

import { Container } from './style'

import GoBackAsset from '../../../../assets/Meal/goBack.svg'
import ProfileAsset from '../../../../assets/Meal/profile.svg'

const NavPanel = () => {
	return (
		<Container>
			<GoBackAsset style={{cursor: 'pointer'}} width={25}/>
			<ProfileAsset style={{cursor: 'pointer'}} width={25}/>
		</Container>
	)
}

export default NavPanel