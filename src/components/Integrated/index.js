import React from 'react'

import Header from '../Header/index'
import Footer from '../Footer/index'

export default (props) => {

	const { children } = props

	return (
		<div>
			<Header/>
				{children}
			<Footer/>
		</div>
	)
}