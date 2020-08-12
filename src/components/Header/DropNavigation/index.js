import React from 'react'

import AuthButton from '../../Button/Auth/index'

import { NavLink, DropNavigationItemsContainer } from '../styles'

export default () => {
	return (
		<DropNavigationItemsContainer>
			<NavLink to='/help'>Help</NavLink>
			<NavLink to='/about'>About</NavLink>
			<NavLink to='/contact-us'>Contact</NavLink>
			<AuthButton 
				height={30} width={90} 
				clickCallback={()=>console.log("Join Button clicked!")}
				customStyle={`margin-left: 0; align-self: center;`}>
					<h5>JOIN</h5>
			</AuthButton>
		</DropNavigationItemsContainer>
	)
}