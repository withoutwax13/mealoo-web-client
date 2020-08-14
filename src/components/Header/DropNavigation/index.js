import React from 'react'
import PropTypes from 'prop-types'

import AuthButton from '../../Button/Auth/index'

import { NavLink, DropNavigationItemsContainer } from '../styles'

const DropNavigation = (props) => {

	const { onPress } = props

	return (
		<DropNavigationItemsContainer>
			<NavLink to='/help' onClick={onPress}>Help</NavLink>
			<NavLink to='/about' onClick={onPress}>About</NavLink>
			<NavLink to='/contact-us' onClick={onPress}>Contact</NavLink>
			<AuthButton 
				height={30} width={90} 
				clickCallback={()=>{
					onPress()
					console.log("Join Button clicked!")
				}}
				customStyle={`margin-left: 0; align-self: center;`}>
					<h5>JOIN</h5>
			</AuthButton>
		</DropNavigationItemsContainer>
	)
}

DropNavigation.propTypes = {
	onPress: PropTypes.func.isRequired
}

export default DropNavigation