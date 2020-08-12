import React from 'react'

import { NavLink } from '../styles'

export default () => {
	return (
		<div>
			<NavLink to='/help'>Help</NavLink>
			<NavLink to='/help'>About</NavLink>
			<NavLink to='/help'>Contact</NavLink>
		</div>
	)
}