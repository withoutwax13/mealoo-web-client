import React from 'react'

import { Link } from 'react-router-dom'

const NoAccess = () => {
	return (
		<div style={{height: '100vh'}}>
					You have no access to this route. We recommend you to join 
				<span style={{color: 'orange'}}>
					 Mealoo 
				</span> 
					through this 
				<Link to='/login'>
					page
				</Link>
					.Thank you!
		</div>
	)
}

export default NoAccess