import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/index'
import Footer from '../Footer/index'

const Integrated = (props) => {

	const { children } = props

	return (
		<div>
			<Header/>
				{children}
			<Footer/>
		</div>
	)
}

Integrated.propTypes = {
	children: PropTypes.node.isRequired
}

export default Integrated